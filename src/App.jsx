import Header from "../src/Components/Header";
import Hero from "./Components/Hero";
import Carrossel from "./Components/Carrossel";
import About from "./Components/About";
import Services from "./Components/Specialties";
import Seguranca from "./Components/Seguranca";

import Footer from "./Components/Footer";

import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Carrossel />
      <About />
      <Services />
      <Seguranca />
      <Footer />
    </>
  );
}

export default App;
