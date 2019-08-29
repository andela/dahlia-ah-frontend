import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.scss';

const Footer = () => (
  <footer>
    <div className={style.container}>
      <div className={style.information}>
        <div>
          <h4>Follow Us</h4>
          <p>
            <img src="https://res.cloudinary.com/allebd/image/upload/v1567001062/dahlia/icons8-facebook-f-50.png" alt="facebook logo" />
            <img src="https://res.cloudinary.com/allebd/image/upload/v1567001069/dahlia/icons8-google-50.png" alt="google logo" />
          </p>
        </div>
        <div>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>
            <ul>
              <li>Plot 233, Ikorodu Road, Lagos, Nigeria</li>
              <li>dahlia@andela.com</li>
              <li>234-0902-232-3233</li>
            </ul>
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>
            <ul>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms &amp; Conditions</Link></li>
              <li><Link to="/">Refund Policy</Link></li>
            </ul>
          </p>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright &copy; 2019 Author&apos;s Haven</p>
      </div>
    </div>
  </footer>
);

export default Footer;
