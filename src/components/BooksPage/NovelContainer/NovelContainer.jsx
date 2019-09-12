import React, { useContext } from 'react';
import { SearchContext } from '../Hooks/searchContext';
import Novel from '../../SingleNovel/novel';
import './NovelContainer.scss';

const NovelContainer = () => {
  const { novels, notFound } = useContext(SearchContext);
  return (
    <div className="novel-container">
      {novels.map((novel) => {
        const descriptionArr = novel.description.split(' ');
        const newDescription = descriptionArr.length > 20 ? `${descriptionArr.splice(0, 20).join(' ')} ...` : novel.description;
        return (
          <Novel
            description={newDescription}
            likes={novel.likes}
            time={novel.readTime}
            title={novel.title}
            author={novel.author}
            cover={novel.thumbImgUrl}
            slug={novel.slug}
          />
        );
      })}
      <p className={notFound ? 'not-found' : 'hide'}>No match was found</p>
    </div>
  );
};

export default NovelContainer;
