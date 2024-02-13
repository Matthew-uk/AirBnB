"use client";
import React from "react";
import TopNav from "./topNav";

const Navbar = () => {
  return (
    <div className="px-10 py-6">
      <TopNav />
    </div>
  );
};

{
  /* <details className="rounded-full border border-gray-300 flex flex-row items-center gap-4 p-2 open:border open:border-red-500 open:absolute open:top-0">
  <IoMenuOutline size={25} className="cursor-pointer" />
  <FaUserCircle size={25} className="cursor-pointer" />
  <summary className="marker:border marker:border-red-500 marker:bg-red-500 marker:text-red-500"></summary>
  <div className="dropdown">
    <h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      voluptatum inventore saepe ducimus eveniet corrupti, nihil molestias quasi
      omnis fuga aut impedit dolorem molestiae illo a delectus nemo? Sunt,
      doloremque.
    </h2>
  </div>
</details>; */
}

export default Navbar;
