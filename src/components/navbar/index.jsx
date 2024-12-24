import PrimaryBtn from "../primaryBtn";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navImgBox">
        <img className="navLogo" src="./navlogo.svg" alt="Logo" />
      </div>
      <ul className="navbarList">
        <li className="navLink">
          <a href="#home">Home</a>
        </li>
        <li className="navLink">
          <a href="#about">About me</a>
        </li>
        <li className="navLink">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="navLink">
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <PrimaryBtn>Hire Me</PrimaryBtn>
    </div>
  );
};

export default Navbar;
