import { useEffect } from "react";
import PrimaryBtn from "../primaryBtn";
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
        <label className="hamburger">
          <input
            type="checkbox"
            checked={hamMenu}
            onChange={() => setHamMenu(!hamMenu)}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div className={`hamMenu ${hamMenu ? "open" : ""}`}>
          <ul className="navbarList">
            <li className="navLink">
              <a href="#hero" onClick={() => setHamMenu(false)}>
                <p className="activeText">Home</p>
              </a>
            </li>
            <li className="navLink">
              <a href="#about" onClick={() => setHamMenu(false)}>
                <p>About Me</p>
              </a>
            </li>
            <li className="navLink">
              <a href="#portfolio" onClick={() => setHamMenu(false)}>
                <p>Portfolio</p>
              </a>
            </li>
            <li className="navLink">
              <a href="#contact" onClick={() => setHamMenu(false)}>
                <p>Contact me</p>
              </a>
            </li>
            <li className="nav-btn">
              <PrimaryBtn
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setHamMenu(false);
                }}
              >
                <p>Hire Me</p>
              </PrimaryBtn>
            </li>
          </ul>
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
      <PrimaryBtn
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p>Hire Me</p>
      </PrimaryBtn>
    </div>
  );
};

export default Navbar;
