import { useState } from "react";
import BackText from "../../backText";
import "./index.css";
import { faqData } from "../../../constants";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection">
      <BackText topText={"FREQUENTLY ASKED QUESTIONS"} backText={"F.Q.A"} />
      <div className="fqaContainer">
        <div className="fqaBacklightContainer">
          <div className="fqaLeftColor" />
          <div className="fqaRightColor" />
        </div>
      </div>

      <div className="faq">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-item-inner">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
