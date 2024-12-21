import PrimaryBtn from "../primaryBtn";
import "./index.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navImgBox">
        <img className="navLogo" src="./navlogo.svg" alt="Logo" />
      </div>
      <ul className="navbarList">
        <li className="navLink activeText">Home</li>
        <li className="navLink">About me</li>
        <li className="navLink">Portfolio</li>
        <li className="navLink">Contact me</li>
      </ul>
      <PrimaryBtn>Hire Me</PrimaryBtn>
    </div>
  );
};

export default Navbar;
