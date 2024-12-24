import "./index.css";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { projects } from "../../constants";

const PortfolioCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const [exitingCards, setExitingCards] = useState([]);

  const handleTransition = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(direction);
    setExitingCards([currentIndex]);

    setTimeout(() => {
      if (direction === "right") {
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1,
        );
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1,
        );
      }
    }, 300);

    setTimeout(() => {
      setIsAnimating(false);
      setExitingCards([]);
    }, 600);
  };

  const nextCard = () => handleTransition("right");
  const prevCard = () => handleTransition("left");

  const getCardNumber = (place) => {
    return ((place % 7) + 7) % 7;
  };

  const getCardClassName = (position, index) => {
    const baseClass = "peripheralCard";
    const isExiting = exitingCards.includes(index);
    const animatingClass = isAnimating ? `sliding-${direction}` : "";
    const exitingClass = isExiting ? "exiting" : "";
    const isEdgeCard = position === "third" || position === "seventh";

    switch (position) {
      case "second":
        return `${baseClass} secondCard ${animatingClass} ${exitingClass} card-${position}`;
      case "third":
        return `${baseClass} thirdCard ${animatingClass} ${exitingClass} card-${position}`;
      case "fifth":
        return `${baseClass} fifthCard ${animatingClass} ${exitingClass} card-${position}`;
      case "sixth":
        return `${baseClass} sexthCard ${animatingClass} ${exitingClass} card-${position}`;
      case "seventh":
        return `${baseClass} seventhCard ${animatingClass} ${exitingClass} card-${position} edge-card`;
      default:
        return `${baseClass} ${animatingClass} ${exitingClass} card-${position} ${isEdgeCard ? "edge-card" : ""}`;
    }
  };

  return (
    <div className={`portfolioContainer ${isAnimating ? "animating" : ""}`}>
      <div className="leftCards">
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className={`nav-button ${isAnimating ? "disabled" : ""}`}
        >
          <FaArrowLeftLong />
        </button>
        <div className={getCardClassName("first", currentIndex)}>
          <div className="cardImg">
            <img
              src={projects[getCardNumber(currentIndex)].image}
              alt="Project Info"
              className="card-image"
            />
          </div>
        </div>
        <div className={getCardClassName("second", currentIndex + 1)}>
          <div className="cardImg">
            <img
              src={projects[getCardNumber(currentIndex + 1)].image}
              alt="Project Info"
              className="card-image"
            />
          </div>
        </div>
        <div className={getCardClassName("third", currentIndex + 2)}>
          <div className="cardImg">
            <img
              src={projects[getCardNumber(currentIndex + 2)].image}
              alt="Project Info"
              className="card-image"
            />
          </div>
        </div>
      </div>

      <div
        className={`centerCard ${isAnimating ? `sliding-${direction}` : ""}`}
      >
        <div className="centerCardImg">
          <img
            src={projects[getCardNumber(currentIndex + 3)].image}
            alt="Project Info"
            className="center-image"
          />
        </div>
        <div className="cardContent">
          <h2 className="card-title">
            {projects[getCardNumber(currentIndex + 3)].title}
          </h2>
          <h4 className="card-subtitle">
            {projects[getCardNumber(currentIndex + 3)].subtitle}
          </h4>
          <p className="card-description">
            {projects[getCardNumber(currentIndex + 3)].description}
          </p>
        </div>
      </div>

      <div className="rightCards">
        <div className={getCardClassName("fifth", currentIndex + 4)}>
          <div className="cardImg">
            <img
              src={projects[getCardNumber(currentIndex + 4)].image}
              alt="Project Info"
              className="card-image"
            />
          </div>
        </div>
        <div className={getCardClassName("sixth", currentIndex + 5)}>
          <div className="cardImg">
            <img
              src={projects[getCardNumber(currentIndex + 5)].image}
              alt="Project Info"
              className="card-image"
            />
          </div>
        </div>
        <div className={getCardClassName("seventh", currentIndex + 6)}>
          <div className="cardImg">
            <img
              src={projects[getCardNumber(currentIndex + 6)].image}
              alt="Project Info"
              className="card-image"
            />
          </div>
        </div>
        <button
          onClick={nextCard}
          disabled={isAnimating}
          className={`nav-button ${isAnimating ? "disabled" : ""}`}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCards;
