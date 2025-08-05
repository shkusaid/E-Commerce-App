import React, { useEffect } from "react";
import { DataContext, getData } from "../ContextApi/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Category from "./Category";

function Carousal() {
  const { fetchingAllData, data } = getData();
  // console.log(data);
  useEffect(() => {
    fetchingAllData();
  }, []);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className} `}
        style={{ zIndex: 3 }}
      >
        <FaArrowRight
          className="arrow"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53374",
            color: "white",
            position: "absolute",
            padding: "7px",
            right: "50px",
          }}
        />
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <FaArrowLeft
          className="arrow"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53374",
            color: "white",
            position: "absolute",
            padding: "7px",
            left: "50px",
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to={"/next"} />,
    prevArrow: <SamplePrevArrow to={"/prev"} />,
  };
  return (
    <>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] items-center my-20 md:my-0 px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering You World With Best In Electronics
                  </h3>
                  <h1 className="text-xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className=" line-clamp-3 md:w-[500px] text-gray-500 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 rounded-md cursor-pointer text-white py-1 px-3 mt-3">
                    Buy Now
                  </button>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[550px] rounded-full shadow-2xl shadow-red-500 transition-all hover:scale-105 "
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </>
  );
}

export default Carousal;
