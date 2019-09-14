import React from 'react';
import PropTypes from 'prop-types';

const NovelInputSection = ({
  setTitle, title, onChange, description,
  setDescription, setChosenGenre, genres,
}) => (
  <>
    <div>
      <label htmlFor="title">
              Title
        <input className="novel-input" type="text" onChange={(e) => onChange(e, setTitle)} value={title} required />
      </label>
    </div>
    <div>
      <label htmlFor="description">
              Description
        <textarea className="novel-desc materialize-textarea" value={description} onChange={(e) => onChange(e, setDescription)} />
      </label>
    </div>
    <div className="novel-genre">
      <label htmlFor="genre">
        Genre
        <select id="genre" defaultValue="-- Select Genre --" onChange={(e) => onChange(e, setChosenGenre)}>
          <option value="">-- Select Genre --</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </label>
    </div>
  </>
);

NovelInputSection.propTypes = {
  setTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  setChosenGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NovelInputSection;
