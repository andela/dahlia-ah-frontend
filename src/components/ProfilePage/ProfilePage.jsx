import React, { useContext } from 'react';
import ProfileContent from './ProfileContent/ProfileContent';
import './profilePage.scss';
import NovelListItem from './NovelListItem/NovelListItem';
import { ProfilePageContext } from '../../contexts/ProfilePageContext';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import AvatarUploadModal from './AvatarUploadModal/AvatarUploadModal';
import { AuthModalContext } from '../../context/AuthModalContext';
import PageLoadErrorModal from './PageLoadErrorModal/PageLoadErrorModal';

const ProfilePage = () => {
  const {
    userProfile,
    authorNovels,
    handleOpenModal,
    handleCloseModal,
    formFields,
    handleInputChange,
    handleSubmit,
    ajaxError,
    ajaxLoading,
    handleAvatarUpload,
    validationError,
    failureMessage,
  } = useContext(ProfilePageContext);

  const {
    firstName,
    lastName,
    image,
    bio,
    followers,
    following,
    formErrors,
  } = userProfile;

  const { modalComponent } = useContext(AuthModalContext);

  let pageLoadErrorModal = null;
  let editModal = null;
  let avatarUploadModal = null;

  if (modalComponent === 'page-load-error-modal') {
    pageLoadErrorModal = <PageLoadErrorModal description={ajaxError} />;
  }

  if (modalComponent === 'edit-profile') {
    editModal = (
      <EditProfileModal
        formdata={formFields}
        closeModal={handleCloseModal}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        resourceLoading={ajaxLoading}
        firstName={firstName}
        lastName={lastName}
        bio={bio}
        formErrors={formErrors}
        validationError={validationError}
        failureMessage={failureMessage}
      />
    );
  }

  if (modalComponent === 'avatar-modal') {
    avatarUploadModal = (
      <AvatarUploadModal
        closeModal={handleCloseModal}
        resourceLoading={ajaxLoading}
        handleAvatarUpload={handleAvatarUpload}
      />
    );
  }

  return (
    <main className="profile-page">
      {pageLoadErrorModal}
      {editModal}
      {avatarUploadModal}
      <section className="profile-container">
        {firstName && lastName ? (
          <ProfileContent
            name={`${firstName} ${lastName}`}
            image={image}
            bio={bio}
            following={following}
            followers={followers}
            written={authorNovels.length}
            openModal={handleOpenModal}
            ajaxLoading={ajaxLoading}
          />
        ) : (
          <ProfileContent
            name="Jon Doe"
            image={image}
            bio="Name cannot be blank"
            followers={0}
            following={0}
            written={0}
            openModal={handleOpenModal}
            ajaxLoading={ajaxLoading}
          />
        )}

        {authorNovels.length ? (
          <>
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
          </>
        ) : null}
      </section>
    </main>
  );
};

export default ProfilePage;
