import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="home">
      {/* Konten lainnya */}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Art Gallery is dedicated to showcasing the finest art pieces created by talented artists from around the world. Explore our
              collection and discover the beauty of art.
            </p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>
              Email: anzajuanda@gmail.com<br />
              Phone: +62-8314-6267-242
            </p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/zikri.dangers/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/needssomewine/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} Need Some Wine. All rights reserved.</p>
      </footer>
    </div>
  );
}
