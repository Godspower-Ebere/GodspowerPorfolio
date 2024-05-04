import React from "react";
import "../sass/cta.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const RightProject = ({
  webLink,
  webTitle,
  wedDescription,
  gitLink,
  skills,
  projectImg,
}) => {
  return (
    <div>
      <div className=" w-full py-5">
        <div className="cont flex  md:justify-between flex-col md:flex-row-reverse flex-reverse">
          <div className="img md:w-[49%]">
            <img
              data-aos-duration="1000"
              data-aos="flip-right"
              src={projectImg}
              className="cta w-full md:h-[400px] h-80 border-none outline-none"
            />
          </div>
          <div className="content md:w-[49%] flex justify-center flex-col">
            <h1
              className=" md:text-left my-5 text-3xl font-bold"
              data-aos-duration="1000"
              data-aos="zoom-in"
            >
              {webTitle}
            </h1>
            <p className="text-xl" data-aos="zoom-in" data-aos-duration="1000">
              {wedDescription}
            </p>
            <div
              className="tools flex my-4 "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {skills.map((data) => {
                return (
                  <a
                    data-aos-duration="1000"
                    data-aos="zoom-in"
                    href={data.toolsLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={data.imgSrc}
                      alt={data.imgAlt}
                      width="50"
                      height="50"
                    />
                  </a>
                );
              })}
            </div>
            <div
              className="links flex"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a
                href={gitLink}
                target="_blank"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <FaGithub className="cta text-white p-1 me-4" size={40}>
                  {" "}
                </FaGithub>
              </a>
              <a
                href={webLink}
                target="_blank"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <FaExternalLinkAlt
                  className="cta text-white p-1"
                  size={40}
                ></FaExternalLinkAlt>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProject;
