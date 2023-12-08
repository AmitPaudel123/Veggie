import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [menubtn, setMenuBtn] = useState(<>&#9776;</>);
  const handleNav = () => {
    if (!showNav) {
      setShowNav(true);
      setMenuBtn(<>&times;</>);
    } else {
      setShowNav(false);
      setMenuBtn(<>&#9776;</>);
    }
  };

  return (
    <>
      <div className=" bg-green-600">
        <div className=" flex space-x-10 justify-between items-center py-6 px-10 lg:pl-20 lg:pr-40">
          <div>
            <img src={logo} alt="" />
          </div>

          <button
            className=" bg-slate-50 rounded-sm px-3 py-1 text-2xl lg:hidden"
            onClick={handleNav}
          >
            {menubtn}
          </button>

          <div className=" lg:flex space-x-8 text-white text-xl hidden">
            <Link to="/" className="hover:text-black">
              Home
            </Link>

            <Link to="/about" className="hover:text-black">
              About
            </Link>
            <Link to="/vegetables" className="hover:text-black">
              Vegetables
            </Link>
            <Link to="/blog" className="hover:text-black">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-black">
              Contact Us
            </Link>
          </div>
        </div>

        {showNav && (
          <div className="h-fit flex flex-col space-y-3 text-white text-xl justify-center items-center py-2 lg:hidden">
            <Link
              to="/"
              className="hover:text-black"
              onClick={() => {
                setShowNav(false);
                setMenuBtn(<>&#9776;</>);
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-black"
              onClick={() => {
                setShowNav(false);
                setMenuBtn(<>&#9776;</>);
              }}
            >
              About
            </Link>
            <Link
              to="/vegetables"
              className="hover:text-black"
              onClick={() => {
                setShowNav(false);
                setMenuBtn(<>&#9776;</>);
              }}
            >
              Vegetables
            </Link>
            <Link
              to="/blog"
              className="hover:text-black"
              onClick={() => {
                setShowNav(false);
                setMenuBtn(<>&#9776;</>);
              }}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-black"
              onClick={() => {
                setShowNav(false);
                setMenuBtn(<>&#9776;</>);
              }}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
