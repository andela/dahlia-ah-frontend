import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const getNovel = (slug, setNovelData, setRelatedData, setGenreData, setAuthorsNovel) => {
  axios.get(`${BACKEND_PATH}/novels/${slug}`)
      .then((res) => {
      const { Genre: { title }, User: { id } } = res.data.novel;
      setNovelData(res.data.novel);
      getNovelsByGenre(title, setRelatedData);
      getGenres(setGenreData);
      getAuthorNovels(id, setAuthorsNovel);
    }).catch((error) => {});
};

export const getNovelsByGenre = (genre, setRelatedData) => {
  axios.get(`${BACKEND_PATH}/novels?slug?genre=${genre}`)
        .then((res) => {
        setRelatedData(res.data.data);
    }).catch((error) => {});
};

export const getGenres = (setGenreData) => {
  axios.get(`${BACKEND_PATH}/genres`)
        .then((res) => {
        setGenreData(res.data.data);
    }).catch((error) => {});
};

export const getAuthorNovels = (author, setAuthorsNovel) => {
  axios.get(`${BACKEND_PATH}/profiles/${author}/novels`)
        .then((res) => {
        setAuthorsNovel(res.data.novels);
    }).catch((error) => {});
};
