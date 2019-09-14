import React, { useState, useEffect, useContext } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';
import axios from 'axios';
import M from 'materialize-css';
import toastr from 'toastr';
import config from '../../config/appConfig';
import { GenreContext } from '../../contexts/GenreContext';
import TopSectionDiv from './TopSectionDiv/TopSectionDiv';
import NovelInputSection from './NovelnputSection/NovelInputSection';
import EditorArea from './EditorArea/EditorArea';
import './createNovel.scss';

const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dahlia-ah-frontend/image/upload';

const instance = axios.create({
  header: {},
});
delete instance.defaults.headers.common.Authorization;

toastr.options = {
  debug: false,
  positionClass: 'toast-top-left',
  onclick: null,
  fadeIn: 300,
  fadeOut: 1000,
  timeOut: 5000,
  extendedTimeOut: 1000,
};

const imagePluginFactory = (editor) => {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => (
    new CloudinaryImageUploadAdapter(loader, 'dahlia-ah-frontend', 'dahlia-front'));
};

const CreateNovelsContainer = () => {
  const providedGenres = useContext(GenreContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [chosenGenre, setChosenGenre] = useState('');
  const [editor, setEditor] = useState('');
  const [slug, setSlug] = useState('');
  const [uploadedCover, setUploadedCover] = useState(false);
  const [uploadedThumb, setUploadedThumb] = useState(false);
  const [coverImgSrc, setCoverImgSrc] = useState('');
  const [thumbImgSrc, setThumbImgSrc] = useState('');
  const [genres, setGenres] = useState([]);
  const [ajaxSaveLoading, setAjaxSaveLoading] = useState(false);
  const [ajaxCoverUploadLoading, setAjaxCoverUploadLoading] = useState(false);
  const [ajaxThumbUploadLoading, setAjaxThumbUploadLoading] = useState(false);
  const [editorError, setEditorError] = useState(false);
  const [ajaxPublishLoading, setAjaxPublishLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    ClassicEditor
      .create(document.querySelector('#editor'), {
        alignment: {
          options: ['left', 'right'],
        },
        toolbar: {
          items: ['heading', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'blockQuote',
            '|', 'imageUpload', 'link', '|', 'undo', 'redo'],
          viewportTopOffset: 10,
        },
        extraPlugins: [imagePluginFactory],
      })
      .then((newEditor) => {
        setEditor(newEditor);
      })
      .catch(() => {
        setEditorError(true);
      });

    document.querySelector('.nav-btn').style.color = '#ffffff';
    document.querySelector('.nav-btn').style.border = 'none';
    document.querySelector('.nav-btn').style.cursor = 'default';
    document.querySelector('.nav-btn').style.boxShadow = 'none';

    return () => {
      document.querySelector('.nav-btn').style = {
        color: '#000008',
        border: '1px solid #000008',
      };
    };
  }, []);

  useEffect(() => {
    if (providedGenres.genres.length > 0) {
      const newGenres = providedGenres.genres.map((genre) => ({ id: genre.id, name: genre.name }));
      setGenres(newGenres);
    }
  }, [providedGenres]);

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }, [genres]);

  const handleChange = (e, setlocalState) => {
    setlocalState(e.target.value);
  };

  const handleFileCapture = (e, imageType) => {
    if (imageType === 'cover') {
      setAjaxCoverUploadLoading(true);
    } else {
      setAjaxThumbUploadLoading(true);
    }
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'dahlia-front');

    instance.post(cloudinaryUrl, formData, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then((response) => {
      const url = response.data.secure_url;

      if (imageType === 'cover') {
        setCoverImgSrc(url);
        setUploadedCover(true);
        setAjaxCoverUploadLoading(false);
      } else {
        setThumbImgSrc(url);
        setUploadedThumb(true);
        setAjaxThumbUploadLoading(false);
      }
    }).catch(() => {
      toastr.error('An error occured while attempting to upload image');
      if (imageType === 'cover') {
        setAjaxCoverUploadLoading(false);
      } else {
        setAjaxThumbUploadLoading(false);
      }
    });
  };

  const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
  const handleSubmit = (submitType = 'save') => {
    let isPublished;
    if (submitType === 'publish') {
      isPublished = 'true';
    }
    const empty = editor.getData() === '' || title === '' || description === '' || chosenGenre === '' || coverImgSrc === '' || thumbImgSrc === '';
    if (empty) {
      toastr.error(`Cannot ${submitType} novel. One of the required fields is missing`);
    } else {
      if (submitType === 'publish') {
        setAjaxPublishLoading(true);
      } else {
        setAjaxSaveLoading(true);
      }
      const newNovel = {
        title,
        description,
        coverImgUrl: coverImgSrc,
        thumbImgUrl: thumbImgSrc,
        genre: chosenGenre,
        isPublished,
        body: editor.getData(),
      };

      const method = saved ? 'patch' : 'post';

      instance[method](`${config.BACKEND_PATH}/novels/${slug}`, { ...newNovel }, { headers: { authorization: `${user.token}` } }).then((response) => {
        setAjaxSaveLoading(false);
        setAjaxPublishLoading(false);
        const msg = submitType === 'publish' ? 'published' : 'saved';
        toastr.success(`Successfully ${msg} novel!`);
        if (submitType === 'save') {
          setSaved(true);
          setSlug(response.data.novel.slug);
        } else {
          setTimeout(() => {
            window.location.assign('/profile');
          }, 500);
        }
      }).catch((error) => {
        setAjaxSaveLoading(false);
        setAjaxPublishLoading(false);
        toastr.error(error.response.data.errors);
      });
    }
  };

  return (
    <>
      {
      user.role === 'reader' ? window.history.back() : (
        <div className="writeNovelWrapper">
          <div className="writeNovelSection">
            <TopSectionDiv
              uploadedCover={uploadedCover}
              ajaxCoverUploadLoading={ajaxCoverUploadLoading}
              handleFileCapture={handleFileCapture}
              coverImgSrc={coverImgSrc}
              uploadedThumb={uploadedThumb}
              ajaxThumbUploadLoading={ajaxThumbUploadLoading}
              thumbImgSrc={thumbImgSrc}
              onSubmit={handleSubmit}
              ajaxSaveLoading={ajaxSaveLoading}
              ajaxPublishLoading={ajaxPublishLoading}
            />
            <NovelInputSection
              setTitle={setTitle}
              title={title}
              onChange={handleChange}
              description={description}
              setDescription={setDescription}
              chosenGenre={chosenGenre}
              setChosenGenre={setChosenGenre}
              genres={genres}
            />
            <EditorArea
              onSubmit={handleSubmit}
              ajaxSaveLoading={ajaxSaveLoading}
              editorError={editorError}
            />
          </div>
        </div>
      )
      }
    </>
  );
};

export default CreateNovelsContainer;
