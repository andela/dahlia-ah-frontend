import React from 'react';
import { Link } from 'react-router-dom';
import style from './membership.scss';

const Membership = () => (
  <section id={style.membership}>
    <h2>Membership</h2>
    <div className={style.membershipBox}>
      <div className={style.freeMembership}>
        <div>
          <h4>Free</h4>
          <ul>
            <li>Read Novels</li>
            <li>Bookmark Novels</li>
            <li>Follow Authors</li>
          </ul>
        </div>
        <div>
          <p><Link to="/">SIGN UP</Link></p>
        </div>
      </div>
      <div className={style.subscribeMembership}>
        <div>
          <h4>Subscription</h4>
          <ul>
            <li>Read Novels</li>
            <li>Bookmark Novels</li>
            <li>Follow and Collaborate with other Authors</li>
            <li>Like and Comment on Novels</li>
            <li>Novel Review and Analytics</li>
          </ul>
        </div>
        <div>
          <p><Link to="/">SUBSCRIBE</Link></p>
        </div>
      </div>
    </div>
  </section>
);

export default Membership;
