import { useEffect, useState } from 'react';
import Materialize from 'materialize-css';
import axios from 'axios';
import appConfig from '../../config/appConfig';

export const readNovelStates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [type, setType] = useState('general');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  return {
    isLoading,
    setIsLoading,
    requestSuccess,
    setRequestSuccess,
    requestError,
    setRequestError,
    type,
    setType,
    body,
    setBody,
    message,
    setMessage,
  };
};

export const handleSubmit = (
  e, slug, type, body, setIsLoading, setMessage, setRequestSuccess, setRequestError,
) => {
  e.preventDefault();
  setIsLoading(true);
  axios.post(`${appConfig.BACKEND_PATH}/novels/${slug}/report`, {
    type,
    body,
  })
    .then((res) => {
      setIsLoading(false);
      setRequestSuccess(true);
      setMessage(res.data.message);
      setTimeout(() => {
        setRequestSuccess(false);
      }, 3000);
    })
    .catch((err) => {
      setIsLoading(false);
      setRequestError(true);
      setMessage(err.response.data.errors[0].message);
      setTimeout(() => {
        setRequestError(false);
      }, 3000);
    });
};

const useReportNovel = () => useEffect(() => {
  const modal = document.querySelector('#report-modal');
  const select = document.querySelector('select');
  Materialize.Modal.init(modal);
  Materialize.FormSelect.init(select);
}, []);

export default useReportNovel;
