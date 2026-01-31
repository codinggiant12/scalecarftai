import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#020617] text-[#f8fafc] font-sans selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
