import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../sass/cta.css";
import "../sass/ctaopp.css";
import boy1 from "../assets/boy1.png";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-slate-100" id="about">
      <div className="home md:px-11 px-2 md:h-[100vh] w-full flex justify-center ">
        <div className="md:w-[80%] w-[95%] flex md:justify-between items-center flex-col md:flex-row md:mt-0 mt-20">
          <div className="md:mb-24 mb-10">
            <img
              data-aos="zoom-in"
              className="md:h-[700px] h-[400px]"
              src={boy1}
              alt="Godspower Portfolio"
            />
          </div>

          <div className="text-left md:w-[50%] w-full space-y-5">
            <h1
              className="flex items-center md:justify-start font-bold text-2xl"
              data-aos="zoom-in"
            >
              Over the past 3+ years in the industry,
            </h1>
            <h1 className="text-lg" data-aos="zoom-in">
              I specialize in crafting robust web applications, backed by a
              versatile skill set covering a wide range of programming
              languages, frameworks, and libraries.
            </h1>
            <h1 className="text-lg" data-aos="zoom-in">
              💼 My expertise spans front-end technologies like HTML, CSS,
              Tailwind, and React.js, as well as back-end technologies including
              Node.js, PHP, and Django. 🌐 Proficient in managing both SQL
              databases (MySQL) and NoSQL databases (MongoDB), I excel in
              database management.
            </h1>
            <h1 className="text-lg" data-aos="zoom-in">
              🔍 Committed to staying at the forefront of industry trends and
              technologies, I continually refine my skills to deliver innovative
              and cutting-edge solutions. Let's build something remarkable
              together!
            </h1>

            <div className="btn" data-aos="zoom-in">
              <a href="#contact" data-aos="zoom-in">
                {" "}
                <button className="cta text-white text-xl py-2 px-3  me-4">
                  CONTACT ME
                </button>
              </a>
              <a href="#portfolio" data-aos="zoom-out">
                {" "}
                <button className="ctaopp text-white text-xl py-2 px-3 ">
                  PORTFOLIO
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
