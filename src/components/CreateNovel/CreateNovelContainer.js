import React, { useState, useEffect, useContext } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';
import axios from 'axios';
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
  const [uploadedCover, setUploadedCover] = useState(false);
  const [uploadedThumb, setUploadedThumb] = useState(false);
  const [coverImgSrc, setCoverImgSrc] = useState('');
  const [thumbImgSrc, setThumbImgSrc] = useState('');
  const [genres, setGenres] = useState([]);
  const [statusColor, setStatusColor] = useState('redColor');
  const [ajaxSaveLoading, setAjaxSaveLoading] = useState(false);
  const [ajaxCoverUploadLoading, setAjaxCoverUploadLoading] = useState(false);
  const [ajaxThumbUploadLoading, setAjaxThumbUploadLoading] = useState(false);
  const [editorError, setEditorError] = useState(false);
  const [publishError, setPublishError] = useState('');
  const [ajaxPublishLoading, setAjaxPublishLoading] = useState(false);

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
      setPublishError('An error occured while attempting to upload image');
      setTimeout(() => {
        setPublishError('');
      }, 2000);
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
      setPublishError(`Cannot ${submitType} novel. One of the required fields is missing`);
      setTimeout(() => {
        setPublishError('');
      }, 2000);
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
      instance.post(`${config.BACKEND_PATH}/novels`, { ...newNovel }, { headers: { authorization: `${user.token}` } }).then(() => {
        setAjaxSaveLoading(false);
        setAjaxPublishLoading(false);
        setStatusColor('greenColor');
        setPublishError(`Successfully ${submitType}ed novel!`);
        setTimeout(() => {
          setPublishError('');
          setStatusColor('redColor');
          window.location.assign('/profile');
        }, 3000);
      }).catch((error) => {
        setAjaxSaveLoading(false);
        setAjaxPublishLoading(false);
        setPublishError(error.response.data.errors);
        setTimeout(() => {
          setPublishError('');
        }, 3000);
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
              statusColor={statusColor}
              publishError={publishError}
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
