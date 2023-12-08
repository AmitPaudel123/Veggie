import React from "react";
import map from "../Images/map.jpg";

const Contact = () => {
  return (
    <>
      <div className=" my-16">
        <p className=" text-3xl font-bold text-center my-8">Get In Touch</p>
        <div className=" flex flex-col lg:flex-row justify-center gap-10">
          <div className="flex flex-col space-y-7">
            <input
              type="text"
              placeholder="Name"
              className=" shadow-sm shadow-black lg:w-[30rem] py-3 px-2"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className=" shadow-sm shadow-black lg:w-[30rem] py-3 px-2"
            />
            <input
              type="email"
              placeholder="Email"
              className=" shadow-sm shadow-black lg:w-[30rem] py-3 px-2"
            />
            <textarea
              name="message"
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
              className=" shadow-sm shadow-black lg:w-[30rem] py-3 px-2"
            ></textarea>
            <button className=" bg-green-600 text-white text-lg py-3 px-10 w-fit rounded-full hover:bg-black">
              Send
            </button>
          </div>
          <img src={map} alt="" className=" lg:w-[25rem] lg:h-[23rem]" />
        </div>
      </div>
    </>
  );
};

export default Contact;
