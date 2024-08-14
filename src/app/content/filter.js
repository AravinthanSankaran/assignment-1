"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image1 from "../../../public/images/learning.jpg";

const Data = [
  {
    id: 1,
    image: Image1,
    title:
      "Introduction to Machine Learning with Python: Understanding Algorithms and Data ",
    type: "Course",
    lessons: 109,
  },
  {
    id: 2,
    image: Image1,
    title:
      "Feature Engineering and Selection: Enhancing Model Performance in Python",
    type: "Course",
    lessons: 109,
  },
  {
    id: 3,
    image: Image1,
    title:
      "Model Evaluation and Optimization: Hyperparameter Tuning and Cross-Validation in Python",
    type: "Test",
    lessons: "Scheduled",
  },
  {
    id: 4,
    image: Image1,
    title:
      "Deep Learning with TensorFlow and Keras: Building Neural Networks in Python",
    type: "Test",
    lessons: "Scheduled",
  },
  {
    id: 5,
    image: Image1,
    title:
      "Deploying Machine Learning Models: From Development to Production with Python",
    type: "Test",
    lessons: "Scheduled",
  },
];

function Filter() {
  const [filter, setFilter] = useState("Filter By Type");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const filteredItems = Data.filter((item) =>
    filter === "Filter By Type" ? true : item.type === filter
  ).filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (selectedFilter) => {
    setFilter(selectedFilter);
    setDropdownVisible(false);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <section id="project" className="min-h-screen">
      <div className="container mx-auto ">
        <h2 className="text-2xl md:mt-5 text-white font-semibold">
          Content{" "}
          <span className="text-sm text-white bg-bgfilternumber p-2 rounded-full">
            {filteredItems.length}
          </span>
        </h2>
        <div className="flex items-center mb-4 border-[0.1px] p-2 mt-4">
          <div className="relative flex-grow mr-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border w-full text-white border-gray-300 bg-primary rounded-md"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-filtertext font-roboto bg-bgfilterbtn font-semibold text-sm px-4 py-2 rounded-md cursor-pointer"
            >
              {filter === "Filter By Type" ? "FILTER BY TYPE" : filter}
            </button>
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-64 bg-primary border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  <li
                    onClick={() => handleSelect("Filter By Type")}
                    className="block px-4 py-2 text-sm text-white hover:bg-btnsignuphover cursor-pointer"
                  >
                    All
                  </li>
                  <li
                    onClick={() => handleSelect("Course")}
                    className="block px-4 py-2 text-sm text-white hover:bg-btnsignuphover cursor-pointer"
                  >
                    Course
                  </li>
                  <li
                    onClick={() => handleSelect("Test")}
                    className="block px-4 py-2 text-sm text-white hover:bg-btnsignuphover cursor-pointer"
                  >
                    Test
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8 overflow-y-auto h-[500px]">
          {filteredItems.map((data) => (
            <div
              key={data.id}
              className="text-white border-1 rounded-lg flex hover:bg-[#988b8b36] p-2 "
            >
              <div className="hover:animate-swing">
                <Image
                  src={data.image}
                  alt="Content Thumbnail"
                  className="swing-animation"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex justify-between px-2">
                <div>
                  <h3 className="text-base font-semibold">{data.title}</h3>
                  <p>
                    {data.type} • {data.lessons} Lessons
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Filter;
