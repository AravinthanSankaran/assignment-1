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
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setOpen(false); // Optional: Close the sidebar on mobile after clicking a menu item
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:static z-10 flex flex-col w-full lg:w-64 text-gray-200">
        <div className="flex-shrink-0 flex flex-row items-center justify-between">
          <div className="flex mt-3 md:hidden">
            <IoIosArrowBack className="w-3 h-3 mx-1 mt-1 text-white" />
            <h1 className="text-white text-sm font-roboto">
              Master Machine Learning: From Basics To Advanced
            </h1>
          </div>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-6 h-6 mt-2"
            >
              <path
                className={!open ? "block" : "hidden"}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                className={open ? "block" : "hidden"}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <hr class="h-px block z-10 md:hidden my-4 border-0 bg-gray-700" />
        <nav
          className={`flex-grow md:block w-64 left-7 px-4 pb-4 md:pb-0 overflow-y-auto  bg-primary ${
            open ? "block" : "hidden"
          }`}
        >
          <Link
            onClick={() => handleMenuClick("Dashboard")}
            className={`flex p-4 font-roboto text-base rounded-lg hover:bg-btnsignup text-white ${
              activeMenu === "Dashboard" ? "bg-btnsignuphover" : ""
            }`}
            href="/"
          >
            <MdOutlineDashboard className="mr-6 w-6 h-6" />
            <h1>Dashboard</h1>
          </Link>

          <Link
            onClick={() => handleMenuClick("Calendar")}
            className={`flex p-4 font-roboto text-base rounded-lg hover:bg-btnsignup text-white ${
              activeMenu === "Calendar" ? "bg-btnsignuphover" : ""
            }`}
            href="/calender"
          >
            <IoMdCalendar className="mr-6 w-6 h-6" />
            <h1>Calender</h1>
          </Link>

          <Link
            onClick={() => handleMenuClick("Content")}
            className={`flex p-4 font-roboto text-base rounded-lg hover:bg-btnsignup text-white ${
              activeMenu === "Content" ? "bg-btnsignuphover" : ""
            }`}
            href="/content"
          >
            <GoBook className="mr-6 w-6 h-6" />
            <h1>Content</h1>
          </Link>
          <Link
            className="flex p-4 font-roboto text-base rounded-md text-white"
            href="/"
          >
            <GiDiscussion className="mr-6 w-6 h-6 text-gray-500" />
            <h1 className="text-gray-500">Discussion</h1>
          </Link>
          <Link
            onClick={() => handleMenuClick("About")}
            className={`flex p-4 font-roboto text-base rounded-lg hover:bg-btnsignup text-white ${
              activeMenu === "About" ? "bg-btnsignuphover" : ""
            }`}
            href="/calender"
          >
            <GrCircleQuestion className="mr-6 w-6 h-6" />
            <h1>About</h1>
          </Link>
        </nav>
      </div>
    </div>
  );
}
