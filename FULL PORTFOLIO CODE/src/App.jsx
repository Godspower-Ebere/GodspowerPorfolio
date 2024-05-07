import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import "./App.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="bg-white">
        <Navbar></Navbar>
      </div>
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
