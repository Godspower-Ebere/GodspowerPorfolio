import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import "./App.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
const App = () => {
  return (
    <div>
      <Particle></Particle>
      <Home></Home>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
export default App;
