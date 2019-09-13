import React, { useContext } from 'react';
import ProfileContent from './ProfileContent/ProfileContent';
import './profilePage.scss';
import NovelListItem from './NovelListItem/NovelListItem';
import { ProfilePageContext } from '../../contexts/ProfilePageContext';
import EditProfile from './EditProfileModal/EditProfile';
import { AuthModalContext } from '../../context/AuthModalContext';

const ProfilePage = () => {
  const {
    userProfile,
    authorNovels,
    handleOpenModal,
    handleCloseModal,
    formFields,
    handleInputChange,
    handleSubmit,
    ajaxLoading,
  } = useContext(ProfilePageContext);

  const {
    name, image, bio, followers, following,
  } = userProfile;

  const { modalComponent } = useContext(AuthModalContext);

  let editModal = null;

  if (modalComponent === 'edit-profile') {
    editModal = (
      <EditProfile
        formdata={formFields}
        closeModal={handleCloseModal}
        onChange={handleInputChange}
        handleSubmit={handleSubmit}
        resourceLoading={ajaxLoading}
      />
    );
  }

  return (
    <main className="profile-page">
      {editModal}
      <section className="profile-container">
        {userProfile.name && (
          <ProfileContent
            name={name}
            image={image}
            bio={bio}
            following={following}
            followers={followers}
            written={authorNovels.length}
            openModal={handleOpenModal}
            ajaxLoading={ajaxLoading}
          />
        )}

        <h4>Your Most Liked Novels</h4>
        {authorNovels.slice(0, 3).map((novel) => {
          let summary;
          if (novel.description && novel.description.length > 250) {
            summary = `${novel.description.substring(0, 250)}...`;
          } else {
            summary = novel.description;
          }
          return (
            <NovelListItem
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

export default ProfilePage;
