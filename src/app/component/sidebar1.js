"use client";

import { useState } from "react";
import { IoIosArrowBack, IoMdCalendar } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { GiDiscussion } from "react-icons/gi";
import { GrCircleQuestion } from "react-icons/gr";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed z-10 flex flex-col lg:w-64 text-gray-200">
        <div className="flex-shrink-0 flex flex-row items-center justify-between">
          <div className="flex mt-3 md:hidden">
            <IoIosArrowBack className="w-3 h-3 mx-1 mt-1 text-white" />
            <h1 className="text-white text-sm font-roboto">
              Master Machine Learning: From Basics To Advanced
            </h1>
          </div>
          <div className="relative">
            <button
              className="fixed top-4 right-4 z-30 p-2 bg-gray-800 text-white rounded-lg md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <hr className="block md:hidden h-px my-4 border-0 bg-gray-700" />
        <nav
          className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
            open ? "translate-x-0" : "translate-x-full"
          } w-64 z-20 md:relative  md:block`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <a
              className="flex p-4 font-roboto text-base rounded-lg bg-btnsignuphover text-white "
              href="/"
            >
              <MdOutlineDashboard className="mr-6 w-6 h-6" />
              <h1>Dashboard</h1>
            </a>

            <a
              className="flex p-4 font-roboto text-base rounded-lg hover:bg-btnsignup text-white "
              href="/"
            >
              <IoMdCalendar className="mr-6 w-6 h-6" />
              <h1>Calendar</h1>
            </a>

            <a
              className="flex p-4 font-roboto text-base  rounded-lg  hover:bg-btnsignup text-white "
              href="/"
            >
              <GoBook className="mr-6 w-6 h-6" />
              <h1>Content</h1>
            </a>
            <a
              className="flex p-4 font-roboto text-base rounded-md  hover:bg-btnsignup text-white"
              href="/"
            >
              <GiDiscussion className="mr-6 w-6 h-6" />
              <h1>Discussion</h1>
            </a>
            <a
              className="flex p-4 font-roboto text-base  rounded-lg  hover:bg-btnsignup text-white "
              href="/project"
            >
              <GrCircleQuestion className="mr-6 w-6 h-6" />
              <h1>About</h1>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
