import React from "react";
import { Link } from "react-router-dom";
import fb from "../Images/facaebook.png";
import whatsapp from "../Images/whatsapp.png";
import insta from "../Images/insta.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-gray-950 text-white flex flex-col gap-5 lg:flex-row  justify-around px-20 py-14">
        <div>
          <p className=" text-3xl">Useful Links</p>
          <div className=" flex flex-col ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/vegetables">Vegetables</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className=" text-3xl ">Address</p>
          <div>Baneshwor-Shantinagar, Ktm</div>
          <div>Branch: Putalisadak, ktm</div>
          <div>veggie@134gmail.com</div>
        </div>
        <div>
          <p className=" text-3xl ">Find Us</p>
          <p>Contact no: 9876543210</p>
          <p>Tel no: 046-530-616</p>
          <div className=" flex gap-3 items-center">
            <img src={fb} alt="" className=" w-8 h-fit hover:cursor-pointer" />
            <img src={insta} alt="" className=" w-12 hover:cursor-pointer" />
            <img
              src={whatsapp}
              alt=""
              className=" w-8 h-fit hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr className=" bg-white" />
      <div className=" bg-slate-950 text-white lg:text-xl text-center py-4">
        2023 All Rights Reserved. Design by: Amit Paudel
      </div>
    </>
  );
};

export default Footer;
