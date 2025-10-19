import { useEffect } from "react";
import "./index.css";
import { useState } from "react";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState("md");
  const [hamMenu, setHamMenu] = useState(false);

  useEffect(() => {
    const determineScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth("sm");
      } else if (width >= 640 && width < 1024) {
        setScreenWidth("md");
      } else {
        setScreenWidth("lg");
      }
    };

    const handleScroll = () => {
      if (hamMenu) {
        setHamMenu(false);
      }
    };

    determineScreenSize();

    window.addEventListener("resize", determineScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", determineScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hamMenu]);

  if (screenWidth === "sm") {
    return (
      <div className="navContainer">
        <div className="navImgBox">
          <img className="navLogo" src="./navlogo.svg" alt="Logo" />
        </div>
      </div>
    );
  }
  return (
    <div className="navContainer">
      <div className="navImgBox">
        <img className="navLogo" src="./navlogo.svg" alt="Logo" />
      </div>
      <ul className="navbarList">
        <li className="navLink">
          <a href="#hero">
            <p className="activeText">Home</p>
          </a>
        </li>
        <li className="navLink">
          <a href="#about">
            <p>About Me</p>
          </a>
        </li>
        <li className="navLink">
          <a href="#portfolio">
            <p>Portfolio</p>
          </a>
        </li>
        <li className="navLink">
          <a href="#contact">
            <p>Contact me</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
