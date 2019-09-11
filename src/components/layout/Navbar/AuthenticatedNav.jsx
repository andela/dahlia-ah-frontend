/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link } from 'react-router-dom';
import useAuthenticatedNav from './effects/AuthenticatedNav';
import { UserContext } from '../../../contexts/UserContext';
import SignOut from '../../helpers/SignOut';

const AuthenticatedNav = () => {
  useAuthenticatedNav();

  return (
    <UserContext.Consumer>
      {(context) => {
        const { firstName, isVerified } = context.user;
        return (
          <div className="navSection">
            <div className="navbar-fixed">
              <nav className={isVerified || location.pathname !== '/confirmation-page' ? 'authenticated-nav navbar' : 'authenticated-nav navbar confirm-page'}>
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
                        Hi,
                        { ` ${firstName}` }
                      </span>
                      <img
                        src="https://img.icons8.com/ios/20/000000/expand-arrow--v1.png"
                        alt="dropdown"
                      />
                    </li>
                    <ul id="nav-dropdown" className="dropdown-content">
                      <li className="nav-link"><a href="#!">Account</a></li>
                      <li className="nav-link">
                        <Link to={{
                          pathname: '/user/settings',
                        }}
                        >
                          Settings
                        </Link>
                      </li>
                      <li className="nav-link"><a href="#!">Help</a></li>
                      <li className="nav-link"><a href="/" onClick={SignOut}>Sign Out</a></li>
                    </ul>
                  </ul>
                </div>
              </nav>
              <ul className="sidenav" id="mobile-demo">
                <li className="nav-link"><a href="#!">Account</a></li>
                <li className="nav-link">
                  <Link to={{
                    pathname: '/user/settings',
                  }}
                  >
                  Settings
                  </Link>
                </li>
                <li className="nav-link"><a href="#!">Help</a></li>
                <li className="nav-link"><a href="/" onClick={SignOut}>Sign Out</a></li>
              </ul>
            </div>
          </div>
        );
      }}

    </UserContext.Consumer>
  );
};


export default AuthenticatedNav;
