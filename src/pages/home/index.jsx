import Navbar from "../../components/navbar";
import About from "../../components/sections/about";
import Hero from "../../components/sections/hero";
import Portfolio from "../../components/sections/portfolio";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

export default Home;
