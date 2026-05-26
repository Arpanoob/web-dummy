import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import CloudBanking from "./components/CloudBanking";
import Stats from "./components/Stats";
import CtaBanner from "./components/CtaBanner";
import Marquee from "./components/Marquee";
import DigitalBanking from "./components/DigitalBanking";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <CloudBanking />
      <Stats />
      <CtaBanner brand="CB7" />
      <Marquee />
      <DigitalBanking />
      <CtaBanner variant="compact" brand="N7" />
      <CaseStudies />
      <CtaBanner variant="compact" brand="CB7" />
      <Footer />
    </div>
  );
}

export default App;
