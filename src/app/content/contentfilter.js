// components/ContentFilter.js
"use client";
import { useState } from "react";

export default function ContentFilter() {
  const [filter, setFilter] = useState("All");

  const contentItems = [
    {
      id: 1,
      title: "Master Machine Learning: From Basics to Advanced Techniques!",
      type: "Course",
      lessons: 109,
    },
    {
      id: 2,
      title: "Test Your Foundations: Introduction to Machine Learning",
      type: "Test",
      lessons: "Scheduled",
    },
    {
      id: 3,
      title: "Supervised Learning: Assess Your Knowledge",
      type: "Test",
      lessons: "Scheduled",
    },
    // Add more items as needed
  ];

  const filteredItems = contentItems.filter((item) =>
    filter === "All" ? true : item.type === filter
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-semibold font-roboto">
          Content
          <span className="text-sm text-white bg-bgfilternumber rounded-full">
            {filteredItems.length}
          </span>
        </h2>
        <div className="relative">
          <button
            onClick={() => setFilter(filter === "All" ? "Filtered" : "All")}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            FILTER BY TYPE
          </button>
          {filter !== "All" && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1">
                <li
                  onClick={() => setFilter("Course")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Course
                </li>
                <li
                  onClick={() => setFilter("Test")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Test
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example content item */}
        <div className="bg-gray-800 text-white p-4 rounded-md">
          <img
            src="/path/to/image.jpg"
            alt="Course Thumbnail"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Master Machine Learning: From Basics to Advanced Techniques!
          </h3>
          <p>Course • 109 Lessons</p>
        </div>

        {/* Repeat similar blocks for other content items */}
      </div>
         
    </div>
  );
}
