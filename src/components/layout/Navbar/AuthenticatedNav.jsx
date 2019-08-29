import React from 'react';
import useAuthenticatedNav from './effects/AuthenticatedNav';

const AuthenticatedNav = () => {
  useAuthenticatedNav();

  return (
    <div className="navSection">
      <div className="navbar-fixed">
        <nav className="authenticated-nav navbar">
          <div className="nav-wrapper">
            <img
              className="brand-logo center"
              src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567007007/ah-logo-black.png"
              alt="Author's Haven"
            />
            <a href="#!" type="button" data-target="mobile-demo" className="sidenav-trigger">
              <img src="https://img.icons8.com/ios/50/000000/menu.png" alt="menu" className="font-icon" />
            </a>
            <button type="button" className="nav-btn btn-small hide-on-med-and-down">upgrade</button>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="notification" data-target="notification-dropdown">
                <img
                  src="https://img.icons8.com/ios/25/000000/appointment-reminders.png"
                  alt="notification icon"
                />
              </li>
              <ul id="notification-dropdown" className="dropdown-content">
                <li>Welcome</li>
              </ul>
              <li className="dropdown-trigger" data-target="nav-dropdown">
                <img
                  src="https://img.icons8.com/color/25/000000/person-male.png"
                  alt="profile"
                />
                <span className="greeting">
                  Hi, James
                </span>
                <img
                  src="https://img.icons8.com/ios/20/000000/expand-arrow--v1.png"
                  alt="dropdown"
                />
              </li>
              <ul id="nav-dropdown" className="dropdown-content">
                <li className="nav-link">Account</li>
                <li className="nav-link">Settings</li>
                <li className="nav-link">Help</li>
                <li className="nav-link">Sign Out</li>
              </ul>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>Account</li>
          <li>Settings</li>
          <li>Help</li>
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthenticatedNav;
