import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const whyUsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="bg-[#020617] text-[#f8fafc] font-sans selection:bg-purple-500/30">
      <Navbar
        onHome={() => scrollToSection(homeRef)}
        onServices={() => scrollToSection(servicesRef)}
        onWhyUs={() => scrollToSection(whyUsRef)}
        onContact={() => scrollToSection(contactRef)}
      />
      <section ref={homeRef} className="h-screen pt-24">
        <Hero onContact={() => scrollToSection(contactRef)} />
      </section>

      <section ref={servicesRef} className="">
        <Services />
      </section>

      <section ref={whyUsRef} className="h-screen">
        <WhyChooseUs />
      </section>

      <section ref={contactRef} className="h-screen">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
