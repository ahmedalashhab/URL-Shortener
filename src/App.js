import React from "react";
import "./css/index.css";
import "./css/stylesheet.css";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
