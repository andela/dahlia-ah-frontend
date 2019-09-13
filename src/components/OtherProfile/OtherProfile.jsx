import React, { useContext } from 'react';
import OtherProfileContent from './OtherProfileContent/OtherProfileContent';
import './otherProfile.scss';
import OtherProfileNovelListItem from './OtherProfileNovelListItem/OtherProfileNovelListItem';
import { OtherProfileContext } from '../../context/OtherProfileContext';

const OtherProfile = () => {
  const { userProfile, authorNovels } = useContext(OtherProfileContext);
  const {
    name, image, bio, followers, following,
  } = userProfile;
  return (
    <main className="profile-page">
      <section className="profile-container">
        {userProfile.name && (
        <OtherProfileContent
          name={name}
          image={image}
          bio={bio}
          following={following}
          followers={followers}
          written={authorNovels.length}
        />
        )}
        <h4>{authorNovels.length > 0 ? 'Most Liked Novels' : ''}</h4>
        {authorNovels.slice(0, 3).map((novel) => {
          let summary;
          if (novel.description && novel.description.length > 250) {
            summary = `${novel.description.substring(0, 250)}...`;
          } else {
            summary = novel.description;
          }
          return (
            <OtherProfileNovelListItem
              key={novel.id}
              summary={summary}
              title={novel.title}
              thumbImgUrl={novel.thumbImgUrl}
              readTime={novel.readTime}
              genre={novel.Genre.name}
              likes={novel.Likes.length}
              comments={novel.Comments.length}
            />
          );
        })}

      </section>
    </main>
  );
};

export default OtherProfile;
