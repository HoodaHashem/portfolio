import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";

const BackText = ({ backText, topText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Variants for each letter
  const letterVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Controls the timing between letters
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="backText"
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.p variants={containerVariant}>
        {backText.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariant}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>

      <motion.h1 variants={containerVariant}>
        {topText.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariant}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

BackText.propTypes = {
  backText: PropTypes.string,
  topText: PropTypes.string,
};

export default BackText;
