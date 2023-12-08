import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img from "../Images/banner-img.png";

export default function Swiperr() {
  const slidee = [
    {
      id: Math.random.toString(),
      url: img,
    },
    {
      id: Math.random.toString(),
      url: img,
    },
    {
      id: Math.random.toString(),
      url: img,
    },
  ];

  const nagigationStyle = {
    // width: "10px",
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidee.map((value) => {
          return (
            <>
              <SwiperSlide>
                <div
                  className=" flex lg:flex-row flex-col justify-between items-center lg:px-32 px-5 my-5
                "
                >
                  <div>
                    <p className=" text-5xl font-bold mb-5">
                      Fresh <br /> Vegetable <br /> Shop
                    </p>
                    <p className=" text-lg">
                      Many variations of passages of Lorem Ipsum available, but
                      the majority have suffered
                    </p>
                    <div className=" my-10 flex gap-3 lg:gap-8">
                      <button className=" bg-green-600 text-white lg:text-lg py-2 px-10 rounded-full hover:bg-black">
                        Buy Now
                      </button>
                      <button className=" bg-black text-white text-lg py-2 px-10 rounded-full">
                        Contact Us
                      </button>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <img
                      src={value.url}
                      alt="img not found"
                      className="w-[25rem]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
