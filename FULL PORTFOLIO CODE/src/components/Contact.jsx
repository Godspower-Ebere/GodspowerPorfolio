import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineHeatMap } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import contactbg from "../assets/contact-bg.png";
import "../sass/ctaY.scss";
const Contact = () => {
  return (
    <div className="bg-slate-900" id="contact">
      <div className="home md:px-11 px-2  w-full flex justify-center ">
        <div className="md:w-[80%] w-[95%]">
          <div className="w-full py-5">
            <div className="cont flex  md:justify-between flex-col md:flex-row">
              <form
                action="#"
                method="post"
                className="bg-white md:w-[45%] w-full px-4 h-full"
              >
                <h1 className=" md:text-left my-5 text-3xl font-bold">
                  Get in touch
                </h1>
                <p className="text-gray-600 m4-10">
                  I will love to hear from you.
                </p>
                <div className="name flex md:justify-between flex-col md:flex-row w-full">
                  <div className="fname md:w-[48%]">
                    <label htmlFor="" className="text-gray-600 ">
                      First name
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Name *"
                      className="w-full p-2 mb-4 border border-black outline-none"
                    />
                  </div>
                  <div className="mail md:w-[48%]">
                    <label htmlFor="" className="text-gray-600 ">
                      Your Email
                    </label>
                    <br />
                    <input
                      type="email"
                      placeholder="Email *"
                      className="w-full p-2 mb-4 border border-black outline-none"
                    />
                  </div>
                </div>
                <div className="number">
                  <label htmlFor="" className="text-gray-600 ">
                    Your Number
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="Phone Number *"
                    className="w-full p-2 mb-4 border border-black outline-none"
                  />
                </div>
                <div className="message">
                  <label htmlFor="" className="text-gray-600 ">
                    Your Number
                  </label>
                  <br />
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="w-full p-2 mb-4 border border-black outline-none"
                  ></textarea>
                </div>
                <input
                  type="button"
                  value="SEND MESSAGE"
                  className="ctaY text-xl py-2 px-3 my-7"
                />
              </form>

              <div className="contactinfo md:w-[45%] w-full my-3">
                <img src={contactbg} alt="GodspowerPortfolio" />

                <div className="info my-4">
                  <div className=" flex my-2">
                    <div className="icon w-[50px] h-[50px] flex justify-center items-center bg-yellow-400 me-4">
                      <AiFillPhone size={30}></AiFillPhone>
                    </div>
                    <div className="text text-lg">
                      <p className="text-gray-400 m4-10">PHONE</p>
                      <h1 className="text-white font-bold">
                        +234 704 073 1915
                      </h1>
                    </div>
                  </div>
                  <div className=" flex my-2">
                    <div className="icon w-[50px] h-[50px] flex justify-center items-center bg-yellow-400 me-4">
                      <AiFillMail size={30}></AiFillMail>
                    </div>
                    <div className="text text-lg">
                      <p className="text-gray-400 m4-10">MAIL</p>
                      <h1 className="text-white font-bold text-[15px]">
                        eberechukwurosemary2021@gmail.com
                      </h1>
                    </div>
                  </div>
                  <div className=" flex my-2">
                    <div className="icon w-[50px] h-[50px] flex justify-center items-center bg-yellow-400 me-4">
                      <FaMapMarkerAlt size={30}></FaMapMarkerAlt>
                    </div>
                    <div className="text text-lg">
                      <p className="text-gray-400 m4-10">VISIT ME @</p>
                      <h1 className="text-white font-bold">Lagos, Nigeria</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
