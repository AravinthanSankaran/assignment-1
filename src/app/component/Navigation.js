import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function Navigation() {
  return (
    <div className="px-5 py-2 hidden md:block">
      <div className=" flex justify-between items-center">
        <div className="flex">
          <IoIosArrowBack className="w-3 h-3 mx-1 mt-1 text-white" />
          <h1 className="text-white text-sm font-roboto">
            Master Machine Learning: From Basics To Advanced
          </h1>
        </div>
        <div className="flex space-x-2">
          <button className="font-roboto text-[12px] font-semibold text-orange-500 border border-orange-500 bg-btnsignup hover:bg-btnsignuphover hover:border-orange-500 py-2 px-4 rounded">
            SIGN IN
          </button>
          <button className="font-roboto text-[12px] font-semibold text-white bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded">
            SIGN UP
          </button>
        </div>
      </div>
      <hr class="h-px my-4 border-0 bg-gray-700" />
    </div>
  );
}

export default Navigation;
