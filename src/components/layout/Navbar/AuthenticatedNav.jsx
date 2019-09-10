/* eslint-disable no-restricted-globals */
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import useAuthenticatedNav from './effects/AuthenticatedNav';
import { UserContext } from '../../../contexts/UserContext';
import axios from '../../../api';
import SignOut from '../../helpers/SignOut';
import socket from '../../../helpers/socket';
import notificationState from '../../../hooks/Notification';
import Notification from '../../Notification/Notification';
import { markAllAsRead } from '../../../api/notification';

const AuthenticatedNav = () => {
  const { id } = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
  const { notifications, setNotification } = notificationState();
  const [isOpen, setIsOpen] = useState(false);

  const handleInstantNotification = (data) => {
    setNotification([data, ...notifications]);
  };

  const getUnread = () => {
    const unread = notifications.filter((notification) => notification.isRead === false);
    return unread.length;
  };

  socket.on(`notification-${id}`, (data) => {
    handleInstantNotification(data);
  });

  // get notification everytime auth nav mount
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      const { target: { id: elementId } } = event;
      const dontAffect = ['notItem', 'not-collection', 'notification', 'mark-all', 'notText', 'notImage'];
      if (!dontAffect.find((blacklistId) => blacklistId === elementId)) {
        setIsOpen(false);
      }
    });
    axios.get('/notifications')
      .then(({ data: { notifications: userNotifications } }) => {
        setNotification(userNotifications);
      })
      .catch(() => {});
  }, []);

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
                    <li className="notification" onClick={() => setIsOpen(!isOpen)} onKeyDown={() => setIsOpen(false)} role="presentation">
                      <img
                        src="https://img.icons8.com/ios/25/000000/appointment-reminders.png"
                        alt="notification icon"
                        id="notification"
                      />
                      { notifications.length > 0 && getUnread() > 0 ? <div className="notification-badge">{ getUnread() < 100 ? getUnread() : '99+' }</div> : null }
                    </li>
                    {
                      isOpen ? (
                        <ul className="notification-content">
                          <Notification
                            markAllAsRead={markAllAsRead}
                            notifications={notifications}
                            setNotification={setNotification}
                          />
                        </ul>
                      ) : null
                    }

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
                      <li className="nav-link">
                        <Link to={{
                          pathname: '/profile',
                        }}
                        >
                        Profile
                        </Link>

                      </li>
                      <li className="nav-link"><a href="#!">My Novels</a></li>
                      <li className="nav-link"><a href="#!">Bookmarks</a></li>
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
                <li className="nav-link">
                  <Link to={{
                    pathname: '/profile',
                  }}
                  >
                        Profile
                  </Link>

                </li>
                <li className="nav-link"><a href="#!">My Novels</a></li>
                <li className="nav-link"><a href="#!">Bookmarks</a></li>
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
