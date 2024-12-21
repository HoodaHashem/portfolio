import "./index.css";
import Sidebar from "../../sidebar";
import BackText from "../../backText";
import BackLight from "../../backlight";
import PrimaryBtn from "../../primaryBtn";

const Hero = () => {
  return (
    <section id="hero">
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
            <PrimaryBtn title={"View Portfolio"} />
            <img className="heroImg" src="./me.png" alt="Mahmoud Hashem" />
            <PrimaryBtn title={"Get In Touch"} />
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
