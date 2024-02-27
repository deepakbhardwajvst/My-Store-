import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

export const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4 md:w-[90%] md:relative md:top-[50%] md:left-[50%]  md:translate-x-[-50%]">
      <div className="bg-no-repeat bg-gray-500 bg-[url('/src/assets/images/bg_shoes.png')] bg-center">
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-1000 ease-in-out scale-100"
                  : "opacity-0 blur-sm duration-1000 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className="w-full h-[300px] md:h-[700px] md:min-h-[700px]" src={item.img}></img>
                )}
              </div>
              <div className=" top-44 absolute mx-auto inset-x-1/4">
                <div className=" text-center text-xs text-white font-inter font-bold tracking-normal sm:text-lg md:text-2xl xl:text-4xl ">
                  <p>{parseInt(item.id) === slideIndex && item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-6 left-[30%] sm:left-[35%] md:left-[45%] md:bottom-12 ">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-3 sm:p-4 cursor-pointer"
                    : "bg-white rounded-full p-3 sm:p-4 cursor-pointer hover:bg-gray-300 "
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300 "
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <button
        className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300 "
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};
