import React from "react";

const Noticeboard = () => {
  return (
    <div class="w-full  h-full">
      <div class="  bg-white rounded-lg shadow-sm ">
        <div class=" ">
          <h1 class="font-extrabold tracking-wider">Notifications</h1>
        </div>
        <div class="flex flex-col text-sm">
          <div class="bg-yellow-50 flex justify-between items-center p-3 rounded-sm shadow-sm">
            <div class="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <p class="text-gray-700 font-bold tracking-wider">
                  Group lunch celebration
                </p>
                <p class="text-gray-400 text-xs">Due in 2 Days</p>
              </div>
            </div>
            <span class="font-bold text-yellow-500">+28%</span>
          </div>

          <div class="bg-indigo-50 flex justify-between items-center p-3 rounded-sm shadow-sm">
            <div class="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <p class="text-gray-700 font-bold tracking-wider">
                  Product goal strategy
                </p>
                <p class="text-gray-400 text-xs">Due in 7 Days</p>
              </div>
            </div>
            <span class="font-bold text-indigo-500">+8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticeboard;
