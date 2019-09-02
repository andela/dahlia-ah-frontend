import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => (
  <div>
    <div className="notFound">
      <h1>404</h1>
      <p>The page you requested was not found</p>
      <button type="button" className="btnLarge"><Link to="/">Back to home</Link></button>
    </div>
  </div>
);

export default NotFound;
