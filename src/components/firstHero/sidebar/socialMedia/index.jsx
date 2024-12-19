import { FaGithub, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import "./index.css";
import { SlSocialLinkedin } from "react-icons/sl";
const SocialMedia = () => {
  return (
    <ul className="socialLinks">
      <li className="socialLink ">
        <a href="https://www.linkedin.com/in/hooda-hashem" target="_blank">
          <SlSocialLinkedin className="activeText" />
        </a>
      </li>
      <li className="socialLink">
        <a href="https://wa.me/+201551028992" target="_blank">
          <FaWhatsapp />
        </a>
      </li>
      <li className="socialLink">
        <a href="https://github.com/HoodaHashem" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="socialLink">
        <a href="https://twitter.com/MahmoudHashem26" target="_blank">
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
