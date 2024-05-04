import React from "react";
import "../sass/cta.scss";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
const Projects = () => {
  return (
    <div id="portfolio" className=" bg-orange-50">
      <div className="home md:px-11 px-2  w-full flex justify-center ">
        <div className="md:w-[80%] w-[95%]">
          <h1 className="my-10 text-4xl font-bold" data-aos="flip-left">
            PROJECTS
          </h1>
          <LeftProject
            projectImg={p2}
            webLink="https://waitechcomputerengineering.vercel.app/"
            wedDescription="i designed this marketing website for Waitech Computer Engineering
            Company, what the company does is Computer Repair & Sales of
            Computer, and i built it using react and tailwindcss, and i also
            made it fully Responsive the purpose of the website is just to
            market their business"
            webTitle="Waitech Computer Engineering"
            gitLink="https://github.com/Godspower-Ebere/waitechcomputerengineering"
            skills={[
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                imgAlt: "react",
                toolsLink: "https://reactjs.org/",
              },
              {
                imgSrc:
                  "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                imgAlt: "tailwindcss",
                toolsLink: "https://tailwindcss.com/",
              },
            ]}
          />
          <RightProject
            projectImg={p1}
            webLink="https://urflyntym.vercel.app/"
            wedDescription="i designed this marketing website for urflyntym travels 
            and tours using react and tailwindcss, and i made it fully Responsive the
          purpose of the website is just to market their business."
            webTitle="Urflyntym Travels & Tours"
            gitLink="https://github.com/Godspower-Ebere/urflyntym"
            skills={[
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                imgAlt: "html5",
                toolsLink: "https://www.w3.org/html/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                imgAlt: "css3",
                toolsLink: "https://www.w3schools.com/css/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                imgAlt: "bootstrap",
                toolsLink: "https://getbootstrap.com",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                imgAlt: "javascript",
                toolsLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ]}
          />
          <LeftProject
            projectImg={p5}
            webLink="https://rock-paper-scissors-lake-psi.vercel.app/"
            wedDescription="i built this game called ROCK-PAPER-SCISSORS using html, css, bootstrap & javascript 
            it is very function and mobile responsive i also added the rules for playing the game"
            webTitle="ROCK-PAPER-SCISSORS"
            gitLink="https://github.com/Godspower-Ebere/ROCK-PAPER-SCISSORS"
            skills={[
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                imgAlt: "html5",
                toolsLink: "https://www.w3.org/html/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                imgAlt: "css3",
                toolsLink: "https://www.w3schools.com/css/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                imgAlt: "bootstrap",
                toolsLink: "https://getbootstrap.com",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                imgAlt: "javascript",
                toolsLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ]}
          />
          <RightProject
            projectImg={p6}
            webLink="https://news-homepage-pi-eight.vercel.app/"
            wedDescription="This was a frontend project built using HTML, CSS Javascript
            & Bootstrap. i used css flexbox to make the landing page fully
            responsive. and functional"
            webTitle="News-Homepage"
            gitLink="https://github.com/Godspower-Ebere/news-homepage"
            skills={[
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                imgAlt: "html5",
                toolsLink: "https://www.w3.org/html/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                imgAlt: "css3",
                toolsLink: "https://www.w3schools.com/css/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                imgAlt: "bootstrap",
                toolsLink: "https://getbootstrap.com",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                imgAlt: "javascript",
                toolsLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ]}
          />

          <LeftProject
            projectImg={p3}
            webLink="https://huddle-landing-page-phi-flame.vercel.app/"
            wedDescription="This landing page was built using html, css bootstrap and javascript"
            webTitle="Huddle-Landing-Page"
            gitLink="https://github.com/Godspower-Ebere/Huddle-Landing-Page"
            skills={[
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                imgAlt: "html5",
                toolsLink: "https://www.w3.org/html/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                imgAlt: "css3",
                toolsLink: "https://www.w3schools.com/css/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                imgAlt: "bootstrap",
                toolsLink: "https://getbootstrap.com",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                imgAlt: "javascript",
                toolsLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ]}
          />
          <RightProject
            projectImg={p4}
            webLink="https://easy-bank-landing-page-psi-liart.vercel.app/"
            wedDescription="This was my first web project built using HTML, CSS Javascript
            & Bootstrap. i used bootstrap to make the landing page fully
            responsive."
            webTitle="Easy Bank landing page"
            gitLink="https://github.com/Godspower-Ebere/easy-bank-landing-page"
            skills={[
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                imgAlt: "html5",
                toolsLink: "https://www.w3.org/html/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                imgAlt: "css3",
                toolsLink: "https://www.w3schools.com/css/",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                imgAlt: "bootstrap",
                toolsLink: "https://getbootstrap.com",
              },
              {
                imgSrc:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                imgAlt: "javascript",
                toolsLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
