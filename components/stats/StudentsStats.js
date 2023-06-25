import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
const StudentsStats = () => {
  return (
    <div>
      <div>
        {/* <h3 class="text-lg leading-6 font-medium text-white">Last 30 days</h3> */}

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative bg-[#1E1E1E] bg-opacity-60 p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#754AD1] rounded-md">
                <SchoolOutlinedIcon className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-xl text-white font-light">7 Courses</p>
                <p className="mt-1 text-sm text-gray-400">In Progress</p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <a
                href="#"
                className="text-indigo-500 font-medium hover:underline"
              >
                View all
              </a>
            </div>
          </div>
          <div className="relative bg-[#1E1E1E] bg-opacity-60 p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#43CB8B] rounded-md">
                <UpdateOutlinedIcon className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-xl text-white font-light">7 Courses</p>
                <p className="mt-1 text-sm text-gray-400">In Progress</p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <a
                href="#"
                className="text-indigo-500 font-medium hover:underline"
              >
                View all
              </a>
            </div>
          </div>
          <div className="relative bg-[#1E1E1E] bg-opacity-60 p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F79A0C] rounded-md">
                <GradeOutlinedIcon className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-xl text-white font-light">7 Courses</p>
                <p className="mt-1 text-sm text-gray-400">In Progress</p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <a
                href="#"
                className="text-indigo-500 font-medium hover:underline"
              >
                View all
              </a>
            </div>
          </div>
          <div className="relative bg-[#1E1E1E] bg-opacity-60 p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F80B62] rounded-md">
                <AttachMoneyOutlinedIcon className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-xl text-white font-light">7 Courses</p>
                <p className="mt-1 text-sm text-gray-400">In Progress</p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <a
                href="#"
                className="text-indigo-500 font-medium hover:underline"
              >
                View all
              </a>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default StudentsStats;
