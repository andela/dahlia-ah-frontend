import React from 'react';

const UnauthenticatedNav = () => (
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
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav-link">Sign Up</li>
          <li className="nav-btn">Sign In</li>
        </ul>
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
      <li className="nav-link">Sign Up</li>
      <li className="nav-link">Sign In</li>
    </ul>
  </div>
);

export default UnauthenticatedNav;
