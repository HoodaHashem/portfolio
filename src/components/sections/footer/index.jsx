import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./index.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
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
              href="https://www.linkedin.com/in/hooda-hashem"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <p className="footer-text">All rights reserved by Mahmoud Hashem</p>
      </div>
    </footer>
  );
};

export default Footer;
