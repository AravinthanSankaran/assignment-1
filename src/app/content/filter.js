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
    title: "Master Machine Learning: From Basics to Advanced Techniques!",
    type: "Course",
    lessons: 109,
  },
  {
    id: 2,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced Techniques!",
    type: "Course",
    lessons: 109,
  },
  {
    id: 3,
    image: Image1,
    title: "Master Machine Learning: From Basics to Advanced Techniques!",
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
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = Data.filter((item) =>
    filter === "All" ? true : item.type === filter
  ).filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="project" className="min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl text-white font-semibold">
          Content{" "}
          <span className="text-sm text-white bg-bgfilternumber rounded-full">
            {filteredItems.length}
          </span>
        </h2>
        <div className="flex items-center mb-4">
          <div className="relative flex-grow mr-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border w-full border-gray-300 rounded-md"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <button
              onClick={() => setFilter(filter === "All" ? "Course" : filter === "Course" ? "Test" : "All")}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              FILTER BY TYPE: {filter}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {filteredItems.map((data) => (
            <div
              key={data.id}
              className="p-3 text-white border-1 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-3"
            >
              <div className="col-span-1 place-self-center lg:col-span-1">
                <Image
                  src={data.image}
                  alt="Content Thumbnail"
                  className="object-contain"
                  width={300}  // Adjust width and height as needed
                  height={200}
                />
              </div>
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-2xl font-semibold">{data.title}</h3>
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

