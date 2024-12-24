import { FaArrowRight, FaGithub } from "react-icons/fa6";
import BackLight from "../../backlight";
import BackText from "../../backText";
import PortfolioCards from "../../portfolioCards";
import PrimaryBtn from "../../primaryBtn";
import "./index.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <BackText topText={"PORTFOLIO HIGHLIGHTS"} backText={"PORTFOLIO"} />

      <div className="portfolioBackLight">
        <BackLight />
      </div>
      <PortfolioCards />
      <div className="portfolioBtnContainer">
        <PrimaryBtn>
          <div className="portfolioBtn">
            <FaGithub size={"25"} />
            <p>View More</p>
            <FaArrowRight />
          </div>
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default Portfolio;
