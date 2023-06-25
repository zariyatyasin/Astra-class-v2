import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";
const ClassRoomList = ({ classes }) => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("new");
  const [loadedClasses, setLoadedClasses] = useState(6);
  const [loading, setLoading] = useState(false);
  const [menuOpen, SetMenuopen] = useState(false);
  const filteredClasses = classes?.filter((cls) =>
    cls.name.toLowerCase().includes(query.toLowerCase())
  );
  const colorPalette = [
    "#F7CACA", // Soft Red
    "#F5DCA8", // Warm Yellow
    "#C8E2DA", // Cool Blue
    "#B6D1EA", // Soft Blue
    "#DFDCE3", // Light Gray
    "#D5E4C3", // Soft Green
  ];

  const getContrastColor = (bgColor) => {
    const hexColor = bgColor.replace("#", "");
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 125 ? "#000000" : "#ffffff";
  };
  const [colorMap] = useState(() => new Map());
  const getColorForClass = (classId) => {
    if (colorMap.has(classId)) {
      return colorMap.get(classId);
    }

    const randomColor =
      colorPalette[Math.floor(Math.random() * colorPalette.length)];

    colorMap.set(classId, randomColor);

    return randomColor;
  };
  const sortedClasses = filteredClasses.sort((a, b) => {
    if (sort === "new") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "old") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return 0;
    }
  });

  const loadMoreClasses = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadedClasses((prev) => prev + 6);
      setLoading(false);
    }, 1000);
  };
  return (
    <div className=" ">
      <div className="  rounded mb-5">
        <h1 className="text-3xl text-gray-900 mb-4">Class List</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search classes"
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex justify-end my-4 relative">
          <div>
            <button
              type="button"
              className="group inline-flex justify-center items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
              id="mobile-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onMouseEnter={() => SetMenuopen(true)}
              onMouseLeave={() => SetMenuopen(false)}
            >
              Sort
              <svg
                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`origin-top-left ${
              menuOpen ? "absolute" : "hidden"
            } top-3 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            onMouseEnter={() => SetMenuopen(true)}
            onMouseLeave={() => SetMenuopen(false)}
          >
            <div className="py-1" role="none">
              <div
                className="block px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
                onClick={() => setSort("new")}
              >
                Newest
              </div>
              <div
                className="block px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
                onClick={() => setSort("old")}
              >
                Oldest
              </div>
              <div className="block px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100">
                Ongoing
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedClasses.slice(0, loadedClasses).map((cls) => {
          const randomColor = getColorForClass(cls._id);
          const textColor = getContrastColor(randomColor);

          return (
            <li
              className="col-span-1 rounded-lg shadow hover:shadow-md divide-y divide-gray-200  overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              key={cls._id}
              style={{ backgroundColor: randomColor }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3
                      className={`text-${textColor} text-lg font-medium truncate`}
                    >
                      {cls.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 text-${textColor} text-xs font-medium bg-${textColor} rounded-full`}
                    >
                      Ongoing
                    </span>
                  </div>
                  <img
                    className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <div
                    className={`flex items-center text-${textColor} text-sm`}
                  >
                    <PersonOutlineOutlinedIcon className="mr-2" />
                    <p>{cls.teacher}</p>
                  </div>
                  <p className={`mt-2 text-${textColor} text-sm line-clamp-3`}>
                    {cls.description}
                  </p>
                </div>
              </div>
              <div className={`px-6 py-4 bg-white  text-${textColor} text-sm`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center text-${textColor}`}>
                      <GroupOutlinedIcon className="mr-1" />
                      <p>{cls.totalStudents}</p>
                    </div>
                    <div className={`flex items-center text-${textColor}`}>
                      <DoneAllOutlinedIcon className="mr-1" />
                      <p>{cls.attendance}% Attendance</p>
                    </div>
                    <div className={`flex items-center text-${textColor}`}>
                      <TrendingUpOutlinedIcon className="mr-1" />
                      <p>{cls.performance}% Performance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`px-6 py-4 bg-white text-${textColor} text-sm`}>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/student/classroom/?id=${cls._id}`}
                    className={`text-blue-600 hover:underline`}
                  >
                    View Details
                  </Link>

                  <div>
                    <span className={`font-medium text-${textColor}`}>
                      Start Date:
                    </span>{" "}
                    {cls.startDate}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {loadedClasses < sortedClasses.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 rounded-md bg-gray-300"
            onClick={loadMoreClasses}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassRoomList;
