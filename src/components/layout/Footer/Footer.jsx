import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="footerContainer">
      <div className="information">
        <div>
          <h4>Follow Us</h4>
          <div className="subFooter">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-google" />
          </div>
        </div>
        <div>
          <h4>About Us</h4>
          <div className="subFooter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
          </div>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div className="subFooter">
            <ul>
              <li>Plot 233, Ikorodu Road, Lagos, Nigeria</li>
              <li>dahlia@andela.com</li>
              <li>234-0902-232-3233</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="subFooter">
            <ul>
              <li><Link to="#privacy-policy">Privacy Policy</Link></li>
              <li><Link to="#terms-and-conditions">Terms &amp; Conditions</Link></li>
              <li><Link to="#refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2019 Author&apos;s Haven</p>
      </div>
    </div>
  </footer>
);

export default Footer;
