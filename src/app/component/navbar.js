"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className="flex flex-wrap items-center justify-between z-10 fixed bg-white w-full h-20">
      <div className="lg:text-xl p-2 mr-4 inline-flex items-center font-bold">
        <Link href="/" className="text-3xl text-cyan-500 hover:text-primary">
          Navigation
        </Link>
      </div>
      {/* Header-mobile-view */}
      <div className="flex px-4">
        {active ? (
          <button
            className=" inline-flex text-2xl rounded md:hidden outline-none "
            onClick={handleClick}
          >
            <AiOutlineClose />
          </button>
        ) : (
          <button
            className=" inline-flex text-2xl rounded md:hidden outline-none"
            onClick={handleClick}
          >
            <AiOutlineMenu />
          </button>
        )}
      </div>

      <div className="w-full flex-grow md:inline-flex md:flex-grow md:w-auto">
        <div
          className={
            "md:inline-flex md:flex-row md:ml-auto space-x-0 md:space-x-4 flex flex-col  " +
            (active ? "bg-white md:bg-transparent" : "hidden")
          }
        >
          <Link href="/" className="lg:inline-flex hover:text-cyan-500 md:text-base p-5 md:p-0 lg:py-3 md:px-3 cursor-pointer" onClick={handleClick}>
            Home
          </Link>

          <Link href="/" className="lg:inline-flex hover:text-cyan-500 md:text-base p-5 md:p-0 lg:py-3 md:px-3 cursor-pointer" onClick={handleClick}>
            About
          </Link>
          <Link href="/contact" className="lg:inline-flex hover:text-cyan-500 md:text-base p-5 md:p-0 lg:py-3 md:px-3 cursor-pointer" onClick={handleClick}>
            Contact
          </Link>
          <Link href="/login" className="lg:inline-flex md:text-base md:p-0 lg:py-3 md:px-3 cursor-pointer hover:bg-primary rounded-2xl hover:text-white" onClick={handleClick}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
