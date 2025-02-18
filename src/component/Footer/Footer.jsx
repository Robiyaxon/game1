import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="/employer">
              <p>Resources Center</p>
            </a>
            <a href="/healthplan">
              <p>Testimonials</p>
            </a>
            <a href="/individual">
              <p>STV</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>Minute Magic</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <FaFacebook size={30} />
              </p>
              <p>
                <FaTwitter size={30} />
              </p>
              <p>
                <FaLinkedin size={30} />
              </p>
              <p>
                <FaInstagram size={30} />
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} Minute Magic All rights reserved</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/term">
              <div>
                <p>Term & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
