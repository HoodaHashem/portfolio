import Navbar from "../../components/navbar";
import About from "../../components/sections/about";
import Hero from "../../components/sections/hero";
import Portfolio from "../../components/sections/portfolio";
import Testimonials from "../../components/sections/testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default Home;
