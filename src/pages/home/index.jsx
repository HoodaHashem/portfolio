import Navbar from "../../components/navbar";
import About from "../../components/sections/about";
import FAQ from "../../components/sections/faq";
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
      <FAQ />
    </>
  );
}

export default Home;
