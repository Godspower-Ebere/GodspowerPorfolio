import React, { useState } from "react";
import "../sass/cta.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export const Navbar = () => {
  const nav=document.getElementById("nav");
  const [toggle, setToggle] = useState(false);
  const hide = () => {
    setToggle(false);
  };
  const change = () => {
    {
      toggle ? setToggle(false) : setToggle(true);
    }
  };
  window.addEventListener("click",(event)=>{
    {event.target==nav ? setToggle(false): ""}
    
  })
  return (
    <div className="py-4 bg-white w-full fixed z-10">
      <div className="desktop flex w-full justify-center">
        <div className="flex md:w-[80%] w-[95%] justify-between">
          <div className="text-gray-800 logo font-bold cursor-pointer text-2xl">
            <span className="text-white cta">&lt;</span>&nbsp; GODSPOWER{" "}
            <span className="text-white cta">/&gt;</span>
          </div>
          <div className="links md:block hidden">
            <ul className="flex">
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#home">HOME</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#about">ABOUT</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="cta text-white text-xl py-2 px-3 contact cursor-pointer font-bold md:block hidden">
            <a href="#contact">CONTACT NOW</a>
          </div>
          <div
            className="contact cursor-pointer font-bold md:hidden"
            onClick={change}
          >
           {toggle==false ? <AiOutlineMenu size={50}></AiOutlineMenu> : <AiOutlineClose color="red" size={50}></AiOutlineClose>} 
          </div>
        </div>
      </div>
      <div className={toggle ? "block" : "hidden"} id="nav">
        <div className="links md:hidden">
          <ul className="block">
            <a href="#home" onClick={hide}>
              <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
                  HOME
              </li>
            </a>
            <a href="#about" onClick={hide}>
              <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
                  ABOUT
              </li>
            </a>
            <a href="#portfolio" onClick={hide}>
              <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
                  PORTFOLIO
              </li>
            </a>
            <a href="#contact" onClick={hide}>
              <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
                  CONTACT
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
