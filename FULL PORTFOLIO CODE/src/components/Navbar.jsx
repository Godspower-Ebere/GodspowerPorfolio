import React, { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const change = () => {
    {
      toggle ? setToggle(false) : setToggle(true);
    }
    console.log(toggle);
  };
  return (
    <div className="py-4 bg-white">
      <div className="desktop flex w-full justify-center">
        <div className="flex w-[90%] justify-between">
          <div className="logo font-bold cursor-pointer text-2xl">
            &lt;GODSPOWER/&gt;
          </div>
          <div className="links md:block hidden">
            <ul className="flex">
              <li className="mx-4 cursor-pointer">HOME</li>
              <li className="mx-4 cursor-pointer">ABOUT</li>
              <li className="mx-4 cursor-pointer">PORTFOLIO</li>
              <li className="mx-4 cursor-pointer">CONTACT</li>
            </ul>
          </div>
          <div className="contact cursor-pointer font-bold md:block hidden">
            CONTACT NOW
          </div>
          <div
            className="contact cursor-pointer font-bold md:hidden"
            onClick={change}
          >
            click
          </div>
        </div>
      </div>
      <div className={toggle ? "block" : "hidden"}>
        <div className="links md:hidden">
          <ul className="block">
            <li className="mx-4 cursor-pointer">HOME</li>
            <li className="mx-4 cursor-pointer">ABOUT</li>
            <li className="mx-4 cursor-pointer">PORTFOLIO</li>
            <li className="mx-4 cursor-pointer">CONTACT</li>
            <li className="mx-4 cursor-pointer">
              <div className="contact cursor-pointer font-bold md:hidden">
                CONTACT NOW
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
