import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { CommentModalContext } from '../../context/CommentModalContext';
import CommentContextProvider from '../../context/CommentContext';
import Comment from '../Comment/Comment';
import moment from 'moment';
import axios from 'axios';
import './ReadNovel.scss';
import appConfig from '../../config/appConfig';

const { BACKEND_PATH } = appConfig;

const ReadNovel = ({ match: { params: { slug } }}) => {
  const [novelData, setNovelData] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [endPoint, setEndPoint] = useState(6);
  const [authorsNovel, setAuthorsNovel] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const { modalComponent, setModalComponent } = useContext(CommentModalContext);

  const handleOpenModal = (comment) => {
    setModalComponent(comment);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  };

  const handleCloseModal = () => {
    setModalComponent(null);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'auto';
  };

  useEffect( () => {
    let author;
    const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));
    axios.get(`${BACKEND_PATH}/novels/${slug}`).then((res) => {

      author = res.data.novel.User;
      const testNovel = res.data.novel;
      setNovelData(res.data.novel);
      axios.get(`${BACKEND_PATH}/novels/?slug?genre=${res.data.novel.Genre.title}`).then((res) => {
        setRelatedData(res.data.data);
        axios.get(`${BACKEND_PATH}/genres`).then((res) => {
          setGenreData(res.data.data);
          axios.get(`${BACKEND_PATH}/profiles/${author.id}/novels`).then((res) => {
            setAuthorsNovel(res.data.novels);
            
            const currentNovel = res.data.novels.filter((novel) => {
              return novel.id === testNovel.id;
            });
            res.data.novels.length < 6 ? setEndPoint(res.data.novels.length) : setEndPoint(6);
            setLikes(currentNovel[0].Likes.length);
            let likeStatus = false;
            currentNovel[0].Likes.forEach((like) => {
              if(user.id === like.userId){
                likeStatus = true;
              }
            });
            setHasLiked(likeStatus);
          });
        })
        setLoading(false);
      })
    })
    .catch((error) => {});
    
  }, []);

  const toggle = (slug) => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    setHasLiked(!hasLiked);
    axios.post(`${BACKEND_PATH}/novels/${slug}/like`).then((res) => {
      const status = /unliked/.test(res.data.message);
      setHasLiked(!status);
      !status ? setLikes(likes + 1) : setLikes(likes - 1);
      setIsLoading(false);
    })
  }

  const setReadMoreHandler = (status) => {
    const length = !status ? authorsNovel.length : 6;
    !status ? setReadMore(true) : setReadMore(false);
    setEndPoint(length);
  }

  const render = !loading ? (
  <div><div className="read-novel">
    { modalComponent ? (
      <CommentContextProvider slug={slug}>
        <Comment closeModal={handleCloseModal} openModal={handleOpenModal} />
      </CommentContextProvider>
    ) : ''}
  <div id="cover" className="cover">
    <div className="cover-image" style={{ backgroundImage: `url(${novelData.coverImgUrl})`}}>
      <div className="read-novel-cover">
        <span className="genre-color">{novelData.Genre.name}</span>
        <h2 className="text-cover">{novelData.title}</h2>
      <p className="p-text">Updated { moment(novelData.updatedAt).utc().fromNow()}</p>
      <div className="div-text">
        <span className="span-text"><i className="far fa-user action-icon"></i><span className="span-text-value">{`${novelData.User.firstName} ${novelData.User.lastName}`}</span></span>
        <span className="span-text"><i className="far fa-clock action-icon"></i><span className="span-text-value">{`${novelData.readTime}`} mins read</span></span>
        <span className="span-text"><i className={hasLiked ? "fas fa-heart bg-red action-icon" : "far fa-heart bg-white action-icon"}  onClick={() => toggle(slug)}></i> <span className="span-text-value">{likes}</span></span>
        <span className="span-text" role="presentation" onClick={() => { handleOpenModal('comment'); }}><i className="far fa-comment action-icon"></i> <span className="span-text-value">234</span></span>
      </div>
    </div>
    </div>
    
    <div className="div-content">
      <main className="main-content">
        <div className="p-heading">
        <p className="text-content">
        {ReactHtmlParser(novelData.body)}git
        </p>
        </div>
      </main>
      <aside className="side-content">
        <form>
          <div className="row">
            <div className="input-field suffix col s6 search-container">
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Search...</label>
              <i className="fas fa-search"></i>
            </div>
          </div>
        <div className="advert-here">
          <p className="advert">Advertise Here</p>
        </div>
        <div className="novels">
          <div className="similar-novels">
            <h5 className="similar-heading">Similar Novels</h5>
            { relatedData.slice(0, 5).map((novel) => <div key={novel.id} className="filter-div"><p className="filter-title">{novel.title}</p></div>) }
          </div>
        </div>
        <div className="genre-div">
          <h5 className="genre-heading">Genres</h5>
          <div className="genres">
             { genreData.map((genre) => <div key={genre.id} style={{ background: genre.themeColor}} className="sub sub-genres1">{genre.name}</div> ) }
          </div>
        </div>
        </form>
      </aside><br/><br/>
    </div>
    <div className="other-novels-div">
      <div className="heading-1">
        <h1 className="heading-novel">Other Novels By {`${novelData.User.firstName} ${novelData.User.lastName}`}</h1>
      </div>
      <div className="other-novels">
      {authorsNovel.slice(0, endPoint).map((novel) =>
        
        <div className="image-container" key={novel.id}>
          <img src={novel.coverImgUrl} alt="image 1"  className="novel-image" style={{ width: '150px', height: '180px' }}/>
          <a href={`/novel/${novel.slug}`} className="read">Read</a>
        </div>
     )}
    </div>
    </div>
    <div className="btn-button">
      {
        authorsNovel.length <= 6 ? '' :  <button onClick={() => setReadMoreHandler(readMore)} className="btn-view">{ readMore ? 'View Less' : 'View More'}</button>
      }
    </div>
  </div>
  </div></div>) : <div>Loading</div>;
  return (
    <div>{ render }</div>
)};

ReadNovel.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(ReadNovel);
