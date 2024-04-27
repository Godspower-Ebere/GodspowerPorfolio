import React from "react";
import { Navbar } from "./Navbar";
import hi from "../assets/hi.gif";

const Home = () => {
  return (
    <div className="bg-orange-100">
      <div className="bg-white">
        <Navbar></Navbar>
      </div>
      <div className="home">
        <div>
          <h1 className="flex items-center font-bold text-xl">
            Hi,
            <img src={hi} alt="" />
            My NAME IS GODSPOWER
          </h1>
          <h1 className="font-bold text-5xl my-7">I'm a Web developer</h1>
          <h1 className="text-xl">Based in Lagos, Nigeria</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
