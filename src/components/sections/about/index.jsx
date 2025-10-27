import { motion } from "framer-motion";
import BackText from "../../backText";
import "./index.css";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="aboutSection"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <BackText topText={"WHO AM I ?"} backText={"ABOUT ME"} />

      <div className="AboutBacklightContainer">
        <div className="aboutLeftColor" />
        <div className="aboutRightColor" />
      </div>

      <motion.div
        className="paragraphContainer"
        variants={itemVariants}
      >
        <p className="aboutParagraph">
          Hello, I&apos;m Mahmoud Hashem, a dedicated and versatile full stack
          engineer with over 4 years of experience crafting robust digital
          solutions. My expertise spans both frontend and backend development,
          with proficiency in modern frameworks like React, Node.js, and Python.
          I specialize in building scalable web applications, RESTful APIs, and
          responsive user interfaces that deliver exceptional user experiences.
          My technical foundation includes database management, cloud
          infrastructure, and agile methodologies. I&apos;m passionate about
          writing clean, maintainable code and continuously learning new
          technologies to solve complex challenges. Let&apos;s collaborate to
          turn your innovative ideas into powerful, efficient applications that
          make a real impact.
        </p>
      </motion.div>

      <motion.div
        className="aboutBoxs"
        variants={containerVariants}
      >
        {[
          {
            num: "25 +",
            title: "Projects Completed",
            desc: "After 25+ completed projects my skills on prime.",
          },
          {
            num: "4 +",
            title: "Years of Experience",
            desc: "Hard working and learning 2+ years makes me suitable.",
          },
          {
            num: "15 +",
            title: "Happy Clients",
            desc: "I make sure to make every client happy and satisfy.",
          },
          {
            num: "24/7",
            title: "Available Everytime",
            desc: "I&apos;m always available and ready to work, just hit me up!",
          },
        ].map((item, index) => (
          <motion.div
            className={`aboutBox about${index}`}
            key={index}
            variants={itemVariants}
          >
            <h1 className="activeText">{item.num}</h1>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
