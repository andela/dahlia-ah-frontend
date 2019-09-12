import React, { useContext } from 'react';
import PropType from 'prop-types';
import { NovelOfTheWeekContext } from '../../../context/NovelOfTheWeekContext';
import './novelOfTheWeek.scss';

const NovelOfTheWeek = ({ openModal }) => {
  const { novelOfTheWeek } = useContext(NovelOfTheWeekContext);
  const novelContent = novelOfTheWeek;

  return (
    <>
      { novelContent ? (
        <section id="weekNovel">
          <h2>Novel of the Week</h2>
          <div className="weekNovelBox">
            <div className="weekNovelImage" role="button" onClick={() => { openModal('signin'); }}>
              <img src={novelContent.coverImgUrl} alt="novel of the week" />
            </div>
            <div className="weekNovelDescription">
              <div>
                <h3 role="button" onClick={() => { openModal('signin'); }}>{novelContent.title}</h3>
                <p>{novelContent.description}</p>
                <button type="button" onClick={() => { openModal('signin'); }} className="btnMedium">See More</button>
              </div>
            </div>
          </div>
        </section>
      ) : ''}
    </>
  );
};

NovelOfTheWeek.propTypes = {
  openModal: PropType.func.isRequired,
};

export default NovelOfTheWeek;
