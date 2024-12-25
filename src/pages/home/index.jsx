import Navbar from "../../components/navbar";
import About from "../../components/sections/about";
import Contact from "../../components/sections/contact";
import FAQ from "../../components/sections/faq";
import Footer from "../../components/sections/footer";
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
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
