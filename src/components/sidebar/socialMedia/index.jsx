import { FaGithub, FaXTwitter } from "react-icons/fa6";
import "./index.css";
import { SlSocialLinkedin } from "react-icons/sl";
const SocialMedia = () => {
  return (
    <ul className="socialLinks">
      <li className="socialLink ">
        <a href="https://www.linkedin.com/in/hoodahashem" target="_blank">
          <SlSocialLinkedin className="activeText" />
        </a>
      </li>
      <li className="socialLink">
        <a href="https://github.com/HoodaHashem" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="socialLink">
        <a href="https://x.com/HoodaHashem" target="_blank">
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
