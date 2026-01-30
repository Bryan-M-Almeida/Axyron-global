/* Estilização reset */
import "./index.scss";

/* Componentes */
import Header from "../src/Components/Header";
import Hero from "./Components/Hero";
/* import Carrossel from "./Components/Carrossel"; */
import About from "./Components/About";
import Services from "./Components/Specialties";
import Seguranca from "./Components/Seguranca";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Gallery from "./Components/Gallery";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import CookieBanner from "./Components/CookieBanner";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* <Carrossel /> */}
        <About />
        <Services />
        <Seguranca />
        <Portfolio />
        <Team />
        <Gallery />
        <Faq />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
