import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Document Icon

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <p>© The Shinex Hub 2025 - All rights reserved - Designed by UWIMANA Chantal.</p>
        </div>
        <div className="footer-middle">
          <div className="social-icons">
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/YOUR_YOUTUBE_CHANNEL" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com/YOUR_INSTAGRAM_PAGE" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/YOUR_TWITTER_PAGE" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/cookie-policy" className="footer-link">Cookie Policy</a>
          </div>
          <div className="trustpilot">
            <a href="https://www.instagram.com/YOUR_INSTAGRAM_PAGE" className="trustpilot-link" target="_blank" rel="noopener noreferrer">
              See our 23 reviews on IG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;