"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start text-center p-9">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-28">
          Welcome to Navigation
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Your Trusted Partner in Navigation
        </p>
        <Link
         href={""}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg md:text-xl cursor-pointer"
        >
          Get Our product
        </Link>
      </div>
    </div>
  );
}