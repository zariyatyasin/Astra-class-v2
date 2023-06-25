import { SidebarOpen } from "@/store/globalSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { useDispatch, useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import axios from "axios";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { connectDb } from "@/utils/db";
import { signOut } from "next-auth/react";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
const Menu = () => {
  const { OpenSidebar } = useSelector((state) => state.globalStore);
  const [active, setAtive] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/subadmin/accessenrollment"
        );

        setAtive(data.AccessEnrollment[0].enrollmentActive);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 transition-all  overflow-y-scroll  ease-in-out duration-300 bg-white h-screen border-r shadow  w-72 ${
        OpenSidebar ? "" : "-translate-x-full"
      }`}
    >
      <div
        className={`text-black  hidden    absolute right-[-20px] text-3xl top-[57px] z-50    cursor-pointer ${
          !OpenSidebar && "rotate-180"
        }`}
        onClick={() => dispatch(SidebarOpen(true))}
      >
        X
      </div>
      <div
        className={`absolute transition-all ease-in-out duration-300  top-0 left-0 h-screen `}
      >
        <div className={`  `}>
          <div
            className={`text-[white] text-3xl font-bold      flex items-center      `}
          >
            <Image
              src={"/image/profile.png"}
              alt="png"
              height={300}
              width={300}
            ></Image>
          </div>

          <div className="    flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/student"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <HomeOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/student/classes"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AccountBoxOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Class
                  </span>
                </Link>
              </li> */}
              <li>
                <Link
                  href="/student/enrollment"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AddchartOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Join Class
                  </span>
                  {active ? (
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                      OPEN
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-indigo-50 rounded-full">
                      CLOSE
                    </span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  href="/student/professor"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <GroupsOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Professor
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/student/transaction"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AccountBalanceOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Transaction
                  </span>
                </Link>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Tasks
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <CalendarMonthOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Calender
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <SchoolOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Academic Transcript
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                    15
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <MessageOutlinedIcon />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Report
                  </span>
                </a>
              </li>
              <li onClick={() => signOut()}>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <button className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
