import React, { useState } from "react";

const SearchNav = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="hidden items-center justify-center w-full md:flex">
      <div className="flex flex-row justify-center items-center rounded-full bg-white border border-gray h-16 shadow my-2">
        <div
          className={`${
            active && "bg-white rounded-full"
          } relative px-4 py-2 h-full flex flex-col justify-center w-1/4`}
          onClick={() => setActive(true)}
        >
          <label className="text-xs">Where</label>
          <input
            type="text"
            className={`bg-transparent outline-none text-sm w-full placeholder:font-light`}
            placeholder="Search destinations"
          />
        </div>
        <div className="border-x flex flex-col justify-center p-2">
          <label className="text-xs">Check in</label>
          <input
            type="date"
            placeholder="Start Date"
            className="border border-gray-300 rounded-md focus:outline-none text-sm"
          />
        </div>{" "}
        <div className="border-r flex flex-col justify-center p-2">
          <label className="text-xs">Check out</label>
          <input
            type="date"
            placeholder="End Date"
            className="border border-gray-300 rounded-md focus:outline-none text-sm"
          />
        </div>{" "}
        <div
          className={`${
            active && "bg-white rounded-full"
          } relative px-4 py-2 h-full flex flex-col justify-center w-1/4`}
          onClick={() => setActive(true)}
        >
          <label className="text-xs">Who</label>
          <input
            type="text"
            className={`bg-transparent outline-none text-sm w-full placeholder:font-light`}
            placeholder="Add Guests"
          />
        </div>
        {/* <div>
          <label>Where</label>
          <input type="search" />
        </div> */}
      </div>
    </div>
  );
};

export default SearchNav;
