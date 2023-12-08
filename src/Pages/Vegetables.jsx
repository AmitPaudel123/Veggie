import React from "react";
import img1 from "../Images/img-1.png";
import img2 from "../Images/img-2.png";
import img3 from "../Images/img-3.png";
import img4 from "../Images/img-4.png";
import img5 from "../Images/img-5.png";
import img6 from "../Images/img-6.png";

const Vegetables = () => {
  const vegetables = [
    {
      url: img1,
      name: "Carrot",
      price: "$19",
    },
    {
      url: img2,
      name: "Peach",
      price: "$19",
    },
    {
      url: img3,
      name: "Tomato",
      price: "$19",
    },
    {
      url: img4,
      name: "Vegetable",
      price: "$19",
    },
    {
      url: img5,
      name: "Spinach",
      price: "$19",
    },
    {
      url: img6,
      name: "Mustard leaf",
      price: "$19",
    },
  ];
  return (
    <div className=" w-[80%] mx-auto py-12 ">
      <div className="mb-10">
        <p
          className=" text-3xl font-bold mb-3
        "
        >
          Our Vegetables
        </p>
        <p>
          Passages of Lorem Ipsum available, but the majority have suffered
          alteration
        </p>
      </div>

      <div className=" w-fit flex flex-4 flex-wrap justify-center items-center gap-10">
        {vegetables.map((value, index) => {
          return (
            <div key={index} className="mb-8">
              <img src={value.url} alt="" className=" w-80  h-72" />
              <div className=" text-center font-bold text-2xl my-2">
                {value.name}
              </div>
              <div className=" text-2xl text-green-600 font-bold text-center">
                $19
              </div>
              <div className=" text-center">
                <button className="bg-green-600 hover:bg-black text-lg text-white px-10 py-3 rounded-full">
                  Buy now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vegetables;
