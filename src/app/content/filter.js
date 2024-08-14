// components/ContentFilter.js
// "use client";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import Learning from "../../../public/images/learning.jpg";

// export default function ContentFilter() {
//   const [filter, setFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const contentItems = [
//     {
//       id: 1,
//       image: "../../../public/images/learning.jpg",
//       title: "Master Machine Learning: From Basics to Advanced Techniques!",
//       type: "Course",
//       lessons: 109,
//     },
//     {
//       id: 2,
//       image: "../../../public/images/learning.jpg",
//       title: "Test Your Foundations: Introduction to Machine Learning",
//       type: "Test",
//       lessons: "Scheduled",
//     },
//     {
//       id: 3,
//       image: "../../../public/images/learning.jpg",
//       title: "Master Machine Learning: From Basics to Advanced Techniques!",
//       type: "Course",
//       lessons: 109,
//     },
//     {
//       id: 4,
//       image: "../../../public/images/learning.jpg",
//       title: "Supervised Learning: Assess Your Knowledge",
//       type: "Test",
//       lessons: "Scheduled",
//     },
//     {
//       id: 5,
//       image: "../../../public/images/learning.jpg",
//       title: "Test Your Foundations: Introduction to Machine Learning",
//       type: "Test",
//       lessons: "Scheduled",
//     },
//     // Add more items as needed
//   ];

//   const filteredItems = contentItems
//     .filter((item) => (filter === "All" ? true : item.type === filter))
//     .filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">
//           Content{" "}
//           <span className="text-sm text-white bg-bgfilternumber rounded-full">
//             {filteredItems.length}
//           </span>
//         </h2>
//         <div className="flex items-center space-x-4 relative">
//           <div className="relative">
//             <button
//               onClick={() => setFilter(filter === "All" ? "Filtered" : "All")}
//               className="flex bg-bgfilterbtn opacity-[0.08] px-4 py-2 rounded-md"
//             >
//               <h1 className="text-bgfilterbtn">FILTER BY TYPE</h1>{" "}
//               <IoIosArrowDown className="m-1" />
//             </button>
//             {filter !== "All" && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//                 <ul className="py-1">
//                   <li
//                     onClick={() => setFilter("All")}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                   >
//                     All
//                   </li>
//                   <li
//                     onClick={() => setFilter("Course")}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Course
//                   </li>
//                   <li
//                     onClick={() => setFilter("Test")}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Test
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="bg-gray-800 text-white p-4 rounded-md">
//             <img
//               src={item.image}
//               alt="Course Thumbnail"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p>
//               {item.type} • {item.lessons} Lessons
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image1 from "../../../public/images/learning.jpg";

const Data = [
  {
    id: 1,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced python!",
    type: "Course",
    lessons: 109,
  },
  {
    id: 2,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced OpenCV!",
    type: "Course",
    lessons: 109,
  },
  {
    id: 3,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced ROS2",
    type: "Test",
    lessons: "Scheduled",
  },
  {
    id: 4,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced Techniques!",
    type: "Test",
    lessons: "Scheduled",
  },
  {
    id: 5,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced Techniques!",
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
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  // return(
  //   <div>
  //     <h1 className="bg-red-700 p-9 w-screen">yfgdaiyfdopgd</h1>
  //   </div>
  // )

  return (
    <section id="project" className="min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl md:mt-5 text-white font-semibold">
          Content{" "}
          <span className="text-sm text-white bg-bgfilternumber rounded-full">
            {filteredItems.length}
          </span>
        </h2>
        <div className="flex items-center mb-4 border-[0.5px] p-2 mt-4">
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
              <div className="absolute right-0 mt-2 w-96 bg-primary border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  <li
                    onClick={() => handleSelect ("Filter By Type")}
                    className="block px-4 py-2 text-sm text-white hover:bg-btnsignuphover cursor-pointer"
                  >
                    All
                  </li>
                  <li
                    onClick={() => handleSelect ("Course")}
                    className="block px-4 py-2 text-sm text-white hover:bg-btnsignuphover cursor-pointer"
                  >
                    Course
                  </li>
                  <li
                    onClick={() => handleSelect ("Test")}
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
            <div key={data.id} className="text-white border-1 rounded-lg flex hover:bg-[#d3cfcf9e] p-2 ">
              <div className="hover:animate-swing">
                <Image
                  src={data.image}
                  alt="Content Thumbnail"
                  className="swing-animation"
                  width={200} // Adjust width and height as needed
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
