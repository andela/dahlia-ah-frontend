import React from 'react';
import PropTypes from 'prop-types';

const UnauthenticatedNav = ({ openModal }) => (
  <div className="navbar-fixed">
    <nav className="unauthenticated-nav navbar">
      <div className="nav-wrapper">
        <img
          className="brand-logo center"
          src="https://res.cloudinary.com/drlcfqzym/image/upload/v1566998517/ah-logo-white.png"
          alt="Author's Haven"
        />
        <a href="#!" type="button" data-target="mobile-demo" className="sidenav-trigger">
          <img src="https://img.icons8.com/ios/50/000000/menu.png" alt="menu" className="font-icon" />
          {/* <i className="fas fa-bars" />/ */}
        </a>
        <span>
          <button type="submit" className="btn-flat nav-link" onClick={openModal}>Sign Up</button>
          <button type="submit" className="btn-flat nav-btn" onClick={openModal}>Sign In</button>
        </span>
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down">

        </ul> */}
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
      <button type="submit" className="nav-link" onClick={openModal}>Sign Up</button>
      <button type="submit" className="nav-link" onClick={openModal}>Sign In</button>
    </ul>
  </div>
);

UnauthenticatedNav.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default UnauthenticatedNav;
