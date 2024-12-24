import { useEffect, useRef } from "react";
import BackText from "../../backText";
import { comments } from "../../../constants";
import "./index.css";
import BackLight from "../../backlight";

const Testimonials = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials">
      <BackText topText={"WHAT CLIENTS SAYS ?"} backText={"TESTIMONIALS"} />

      <div className="testimonialsBackLight">
        <BackLight />
      </div>

      <div className="commentsContainer">
        {comments.map((ele, idx) => (
          <div
            className="commentCard"
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <p>{ele.comment}</p>
            <div className="userContainer">
              <img
                src={ele.image}
                alt={`${ele.name}'s portrait`}
                loading="lazy"
              />
              <div className="userInfo">
                <h4>{ele.name}</h4>
                <h5>{ele.postion}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
