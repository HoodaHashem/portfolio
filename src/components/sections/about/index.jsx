import BackText from "../../backText";
import "./index.css";

const About = () => {
  return (
    <section id="about" className="aboutSection">
      <BackText topText={"WHO AM I ?"} backText={"ABOUT ME"} />
      <div className="AboutBacklightContainer">
        <div className="aboutLeftColor" />
        <div className="aboutRightColor" />
      </div>
      <div className="paragraphContainer">
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
      </div>

      <div className="aboutBoxs">
        <div className="aboutFirst">
          <h1 className="activeText">25 +</h1>
          <h2>Projects Completed</h2>
          <p>after this my skills on prime.</p>
        </div>
        <div className="aboutSecond">
          <h1 className="activeText">4 +</h1>
          <h2>Years of Experience</h2>
          <p>Hard working and learning 2+ years makes me suitable.</p>
        </div>
        <div className="aboutThird">
          <h1 className="activeText">15 +</h1>
          <h2>Happy Clients</h2>
          <p>I make sure to make every client happy and satisfy.</p>
        </div>
        <div className="aboutFourth">
          <h1 className="activeText">24/7</h1>
          <h2>Available Everytime</h2>
          <p>I&apos;m always available and ready to work, just hit me up!</p>
        </div>
      </div>
    </section>
  );
};
export default About;
