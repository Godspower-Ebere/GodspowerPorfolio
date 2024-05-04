import React from "react";
import { FaGithub } from "react-icons/fa";
import "../sass/cta.scss";

const Footer = () => {
  const date = new Date();
  return (
    <div className="border-t border-gray-700 py-3 bg-slate-900">
      <div className="home md:px-11 px-2 w-full flex justify-center ">
        <div className="md:w-[80%] w-[95%] flex md:justify-between items-center flex-col md:flex-row md:mt-0 mt-20">
          <div className="social">
            <a
              className="cta"
              href="https://github.com/Godspower-Ebere/"
              target="_blank"
            >
              <FaGithub color="orange" size={30}></FaGithub>
            </a>
          </div>
          <div className="copy text-white">
            © {date.getFullYear()} copyright all right reserved by{" "}
            <b>Godspower</b>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
