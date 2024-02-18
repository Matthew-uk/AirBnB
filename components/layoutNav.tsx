"use client";
import React from "react";
import CategoriesBox from "./categoriesBox";
import categories from "./categories";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineFilterAlt,
} from "react-icons/md";

const LayoutNav = () => {
  const slideLeft = () => {
    const slider: HTMLElement | any = document.getElementById("slider");
    if (slider?.scrollLeft === 0) {
      return false;
    }
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    const slider: HTMLElement | any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    // <div className="relative flex items-center">
    //   <MdChevronLeft
    //     size={20}
    //     className="absolute left-0 bg-white rounded-full cursor-pointer"
    //   />
    //   <div
    //     id="slider"
    //     className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth border border-red-400 px-4"
    //   >
    //     {categories.map((category, index) => {
    //       return (
    //         <category.icon size={20} className="inline-block cursor-pointer" />
    //       );
    //     })}
    //   </div>
    //   <MdChevronRight
    //     size={20}
    //     className="absolute right-0 bg-white rounded-full cursor-pointer"
    //   />
    // </div>
    <div className="flex flex-col md:flex-row py-2 px-2 md:px-4 gap-2 justify-between">
      <div className="flex relative items-center w-full md:w-9/12 px-8">
        <div
          onClick={slideLeft}
          className="absolute left-0 border border-black/40 p-1 cursor-pointer rounded-full opacity-60 hover:opacity-100 transition"
        >
          <MdChevronLeft size={20} />
        </div>
        <div
          id="slider"
          className="flex flex-row items-center scroll-smooth justify-between overflow-x-auto w-full gap-8 scrollbar-hide"
        >
          {categories.map((category, index) => (
            <CategoriesBox
              key={index}
              label={category.label}
              icon={category.icon}
              description={category.description}
            />
          ))}
        </div>
        <div
          onClick={slideRight}
          className="absolute right-0 border border-black/40 p-1 cursor-pointer rounded-full opacity-60 hover:opacity-100 transition"
        >
          <MdChevronRight size={22} />
        </div>
      </div>
      {/* Filter */}
      <div className="flex flex-row w-full gap-2 justify-between mt-2 md:mt-0 items-center">
        <div className="flex flex-row items-center justify-between px-2 border border-neutral-600 rounded-md text-xs text-neutral-600 cursor-pointer h-max py-2">
          <MdOutlineFilterAlt size={16} />
          <h2>Filters</h2>
        </div>
        {/* Tax */}
        <div className="flex flex-row border border-neutral-600 gap-4 p-1 items-center justify-between rounded-md cursor-pointer">
          <label className="flex flex-row justify-between gap-2 items-center cursor-pointer">
            <span className="ms-3 text-xs font-medium text-gray-900">
              Display total before taxes
            </span>
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              disabled={false}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-gray-700 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black -z-10"></div>
          </label>
          {/* <h2>Display Total before taxes </h2>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
        </div>
      </div>
    </div>
  );
};

export default LayoutNav;
