import React from "react";

export const Education = () => {
  return (
    <div>
      <div className="rounded-lg bg-white overflow-hidden shadow mt-5  p-6 ">
        <div className="px-4 flex justify-between items-center ">
          <h2 id="notes-title" className="text-lg font-medium text-gray-900">
            Education
          </h2>

          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className="relative inline-flex items-center px-1 py-1 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className=" relative inline-flex items-center px-1 py-1 ml-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <span className="sr-only">Next</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className=" mt-5   space-x-4 overflow-y-scroll flex items-center w-full ">
          <div
            href="#"
            class="w-[440px]   shadow-md rounded-lg border overflow-hidden"
          >
            <div class="w-[440px]  flex p-5 gap-y-2">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Seal_of_East_Delta_University.png"
                  class="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div class="col-span-5 md:col-span-4 ml-4">
                <p class="text-gray-900 font-bold">East Delta Chittagong</p>

                <p class="text-gray-900 text-sm">
                  {" "}
                  Bachelor's degree,
                  <span>Computer science and engineering</span>{" "}
                </p>
                <p class="text-gray-500 text-sm"> May 2020 - Feb 2024</p>

                <p class="text-gray-900 text-sm">Grade: 2nd Year</p>
              </div>
            </div>
          </div>
          <div
            href="#"
            class="w-[440px]  shadow-md rounded-lg border overflow-hidden"
          >
            <div class=" w-[440px] grid grid-cols-6 p-5 gap-y-2">
              <div>
                <img
                  src="https://yt3.googleusercontent.com/ytc/AGIKgqMjoh2UNSX6Dlkx17G5D3DZ2Ljj5fJjNJZ487kUNw=s900-c-k-c0x00ffffff-no-rj"
                  class="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div class="col-span-5 md:col-span-4 ml-4">
                <p class="text-gray-900 font-bold">University of Mchigan</p>

                <p class="text-gray-900 text-sm">
                  {" "}
                  Bachelor's degree,
                  <span>Computer science and engineering</span>{" "}
                </p>
                <p class="text-gray-500 text-sm"> May 2020 - Feb 2024</p>

                <p class="text-gray-900 text-sm">Grade: 2nd Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
