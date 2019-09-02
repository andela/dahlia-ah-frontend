import React from 'react';
import PropType from 'prop-types';

const UnauthenticatedNav = ({ openModal }) => (
  <div className="navSection">
    <div className="navbar-fixed">
      <nav className="unauthenticated-nav navbar">
        <div className="nav-wrapper">
          <img
            className="brand-logo center"
            src="https://res.cloudinary.com/drlcfqzym/image/upload/v1566998517/ah-logo-white.png"
            alt="Author's Haven"
          />
          <a href="#!" type="button" data-target="mobile-demo" className="sidenav-trigger">
            <img src="https://img.icons8.com/ios/50/ffffff/menu.png" alt="menu" className="font-icon" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <button type="button" className="nav-link" onClick={openModal}>Sign Up </button>
            <button type="button" className="nav-btn">Sign In</button>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <button type="button" className="nav-link" onClick={openModal}>Sign Up </button>
        <button type="button" className="nav-btn">Sign In</button>
      </ul>
    </div>
  </div>
);

UnauthenticatedNav.propTypes = {
  openModal: PropType.func.isRequired,
};
export default UnauthenticatedNav;
