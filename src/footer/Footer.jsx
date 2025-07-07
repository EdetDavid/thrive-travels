import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ className }) => {
  return (
    <footer data-aos="fade-in" className={`footer p-4 ${className}`}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h5 className="fw-bolder">About Us</h5>
            <ul className="list-unstyled">
              <li>About Thrive</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-icons">
              <li>
                <a
                  className="nav-link"
                  href="https://ng.linkedin.com/company/thrivetravelsandtours-limited"
                >
                  <FaLinkedin /> <span className="icon-text">Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://www.instagram.com/thrivetravelsandtours/?hl=en"
                >
                  <FaInstagram /> <span className="icon-text">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://www.facebook.com/thrivetravelsandtours/"
                >
                  <FaFacebook /> <span className="icon-text">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://twitter.com/thrivetravels/status/1701554433811767480"
                >
                  <FaTwitter /> <span className="icon-text">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://www.tiktok.com/@thrivetravelsandtours?is_from_webapp=1&sender_device=pc"
                >
                  <FaTiktok /> <span className="icon-text">Tiktok</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <p className="copywright">
              &copy; {new Date().getFullYear()} Thrive Travels & Tours Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
