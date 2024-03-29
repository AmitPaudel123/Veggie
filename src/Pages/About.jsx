import React from "react";
import img from "../Images/about-img.png";
const About = () => {
  return (
    <>
      <div className="w-fit mx-auto py-12">
        <div className="mb-14 mx-5">
          <p className=" text-3xl font-bold mb-3">About Us</p>
          <p>
            Passages of Lorem Ipsum available, but the majority have suffered
            alteration
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img src={img} alt="" className=" mx-5"/>

          <div className="mx-5 mt-8">
            <p className=" text-3xl font-bold mb-14">Fresh any</p>
            <p className=" w-fit lg:w-[450px] my-14 ">
              Variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomisedvariations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised
            </p>
            <button className=" bg-green-600 text-white text-lg py-3 px-8 rounded-full hover:bg-black">
              View more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
