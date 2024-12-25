import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import "./index.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">All rights reserved by Mahmoud Hashem</p>
        <div className="footer-logo">
          <div className="navImgBox">
            <img className="navLogo" src="./navlogo.svg" alt="Logo" />
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/HoodaHashem"
            className="social-link"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="social-link"
            href="https://x.com/HoodaHashem"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            className="social-link"
            href="https://wa.me/+201551028992"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/hooda-hashem"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
