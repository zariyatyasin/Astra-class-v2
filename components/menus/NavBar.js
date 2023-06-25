import { SidebarOpen } from "@/store/globalSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Link from "next/link";
export const NavBar = () => {
  const { OpenSidebar } = useSelector((state) => state.globalStore);
  const dispatch = useDispatch();
  const [menuOpen, SetMenuopen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 z-10  transition-all ease-in-out duration-300 bg-white shadow h-20   w-full flex items-center  px-4 sm:px-6 lg:px-8 }`}
      style={{
        transform: OpenSidebar ? "translateX(0)" : "",
      }}
    >
      <div className={`flex items-center text-black   w-full justify-between`}>
        <div className=" flex items-center">
          <div
            className="text-2xl flex md:text-3xl cursor-pointer"
            onClick={() => dispatch(SidebarOpen(true))}
          >
            <MenuIcon />
          </div>

          <div className="flex ml-2 flex-col justify-center">
            <div className="flex items-center">
              <img
                src={"/image/logo.png"}
                alt="png"
                className=" w-[150px]"
              ></img>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-white p-1 rounded-full text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            <NotificationsNoneOutlinedIcon sx={{ fontSize: "28px" }} />
          </div>
          <div className="ml-3 relative">
            <div>
              <button
                type="button"
                className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onMouseEnter={() => SetMenuopen(true)}
                onMouseLeave={() => SetMenuopen(false)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />

                <svg
                  className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
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
              className={`origin-top-right ${
                menuOpen ? "absolute" : "hidden"
              } right-0   w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              onMouseEnter={() => SetMenuopen(true)}
              onMouseLeave={() => SetMenuopen(false)}
            >
              <Link
                href="/campusfeed"
                className="block px-4 py-4 border-b text-sm text-green-700"
                role="menuitem"
                id="user-menu-item-0"
              >
                Campus Feed
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-2"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
