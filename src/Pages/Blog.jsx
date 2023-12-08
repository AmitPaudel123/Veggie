import React from "react";
import img from "../Images/img-3.png";
const Blog = () => {
  return (
    <>
      <div className="w-fit mx-auto py-12">
        <div className="mb-14">
          <p className=" text-3xl font-bold mb-3">Our Blog</p>
          <p>
            Passages of Lorem Ipsum available, but the majority have suffered
            alteration
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="mx-10 mt-8">
            <p className=" text-3xl font-bold mb-14">Blog</p>
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
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Blog;
