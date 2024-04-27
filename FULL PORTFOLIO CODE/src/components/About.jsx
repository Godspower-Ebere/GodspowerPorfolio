import React from "react";
import "../sass/cta.css";
import "../sass/ctaopp.css";
import boy1 from "../assets/boy1.png";
const About = () => {
  return (
    <div className="bg-slate-100" id="about">
      <div className="home md:px-11 px-2 md:h-[100vh] w-full flex justify-center ">
        <div className="md:w-[80%] w-[95%] flex md:justify-between items-center flex-col md:flex-row md:mt-0 mt-20">
          <div className="md:mb-24 mb-10">
            <img
              className="md:h-[700px] h-[400px]"
              src={boy1}
              alt="Godspower Portfolio"
            />
          </div>

          <div className="text-left md:w-[50%] w-full">
            <h1 className="flex items-center md:justify-start justify-center font-bold text-2xl">
              With over 2 years of hands-on experience,
            </h1>
            <h1 className="text-xl">
              I specialize in crafting robust web applications, backed by a
              versatile skill set covering a wide range of programming
              languages, frameworks, and libraries. 💼 My expertise spans
              front-end technologies like HTML, CSS, Tailwind, and React.js, as
              well as back-end technologies including Node.js, PHP, and Django.
              🌐 Proficient in managing both SQL databases (MySQL) and NoSQL
              databases (MongoDB), I excel in database management. 🔍 Committed
              to staying at the forefront of industry trends and technologies, I
              continually refine my skills to deliver innovative and
              cutting-edge solutions. Let's build something remarkable together!{" "}
            </h1>
            <div className="btn">
              <button className="cta text-white text-xl py-2 px-3 my-7 mx-4">
                CONTACT ME
              </button>
              <button className="ctaopp text-white text-xl py-2 px-3 my-7">
                PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
