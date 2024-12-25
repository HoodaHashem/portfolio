import "./index.css";
import Sidebar from "../../sidebar";
import BackText from "../../backText";
import BackLight from "../../backlight";
import PrimaryBtn from "../../primaryBtn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero" className="heroSection">
      <div className="heroContainer">
        <div className="heroSidebar">
          <Sidebar />
        </div>
        <div className="heroContent">
          <BackText
            topText={"HI, MY NAME IS"}
            backText={"FULL STACK DEVELOPER"}
          />
          <h1 className="heroName">MAHMOUD HASHEM</h1>
          <div className="imgBox">
            <PrimaryBtn
              onClick={() => {
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="heroBtnContentViewPortfolio">
                <FaArrowLeft />
                <p>View Portfolio</p>
              </div>
            </PrimaryBtn>
            <img className="heroImg" src="./me.png" alt="Mahmoud Hashem" />
            <PrimaryBtn
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="heroBtnGetInTouch">
                <FaArrowRight />
                <p>Get In Touch</p>
              </div>
            </PrimaryBtn>
          </div>

          <div className="heroBackground">
            <BackLight />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
