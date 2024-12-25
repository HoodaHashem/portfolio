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
          <a href="/terms" className="footer-link">
            Terms and Conditions
          </a>
          <a href="/privacy" className="footer-link">
            Privacy and Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
