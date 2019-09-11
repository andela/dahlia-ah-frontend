import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthModalContext } from '../../../context/AuthModalContext';
import Login from '../../Login/Login';
import SignUpFormContainer from '../../SignupForm/SignupFormContainer';
import ForgotPassword from '../../ForgotPassword/ForgotPasswordContainer';

const UnauthenticatedNav = () => {
  const { modalComponent, setModalComponent } = useContext(AuthModalContext);

  const handleOpenModal = (component) => {
    setModalComponent(component);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  };

  const handleCloseModal = () => {
    setModalComponent(null);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'auto';
  };

  let renderedModal = null;
  switch (modalComponent) {
    case 'signup':
      renderedModal = (
        <SignUpFormContainer
          closeModal={handleCloseModal}
          openModal={handleOpenModal}
        />
      );
      break;
    case 'signin':
      renderedModal = (
        <Login
          closeModal={handleCloseModal}
          openModal={handleOpenModal}
        />
      );
      break;
    case 'reset-password':
      renderedModal = (
        <ForgotPassword
          closeModal={handleCloseModal}
        />
      );
      break;
    default:
      break;
  }
  return (
    <>
      { renderedModal }
      <div className="navSection">
        <div className="navbar-fixed">
          <nav className="unauthenticated-nav navbar">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">
                <img
                  className="logo"
                  src="https://res.cloudinary.com/drlcfqzym/image/upload/v1566998517/ah-logo-white.png"
                  alt="Author's Haven"
                />
              </Link>
              <a href="#!" type="button" data-target="mobile-demo" className="sidenav-trigger">
                <img src="https://img.icons8.com/ios/50/ffffff/menu.png" alt="menu" className="font-icon" />
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <button type="button" className="nav-link" onClick={() => { handleOpenModal('signup'); }}>Sign Up </button>
                <button type="button" className="nav-btn" onClick={() => { handleOpenModal('signin'); }}>Sign In</button>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <button type="button" className="nav-link" onClick={() => { handleOpenModal('signup'); }}>Sign Up </button>
            </li>
            <li>
              <button type="button" className="nav-btn" onClick={() => { handleOpenModal('signin'); }}>Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UnauthenticatedNav;
