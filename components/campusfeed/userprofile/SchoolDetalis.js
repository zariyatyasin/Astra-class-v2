import React from "react";

export const SchoolDetalis = () => {
  return (
    <div>
      <div className="rounded-lg bg-white overflow-hidden shadow mt-5  p-6 ">
        <div className="px-4 flex justify-between items-center ">
          <h2 id="notes-title" className="text-lg font-medium text-gray-900">
            Educatuon
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
        <div className="grid mt-5 grid-cols-2  space-x-4 overflow-y-scroll flex justify-center items-center w-full ">
          <div
            className="relative flex flex-col justify-between   bg-white shadow-md rounded-lg  bg-cover text-gray-800 overflow-hidden cursor-pointer w-full object-cover object-center   h-40 my-2"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
          >
            <div className="absolute bg-gradient-to-t from-gray-900 to-gray-900   opacity-50 inset-0 z-0"></div>
            <div className="relative flex flex-row items-end  h-72 w-full ">
              <div className="absolute right-0 top-0 m-5">
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-2 py-2 rounded-md  bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Enroll Now
                  </button>
                </span>
              </div>
              <div className="p-6 rounded-lg  flex flex-col w-full z-10 ">
                <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">
                  Micro Labs
                </h4>
                <div className="flex justify-between items-center ">
                  <div className="flex flex-col">
                    <h2 className="text-sm flex items-center text-gray-300 font-normal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      Dubai
                    </h2>
                  </div>
                </div>
                <div className="flex pt-4  text-sm text-gray-300">
                  <div className="flex items-center mr-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="font-normal">4.5</p>
                  </div>
                  <div className="flex items-center font-medium text-white ">
                    3
                    <span className="text-gray-300 text-sm font-normal">
                      Credits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col justify-between   bg-white shadow-md  rounded-lg  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center   h-40 my-2"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/220989/pexels-photo-220989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
          >
            <div className="absolute bg-gradient-to-t from-gray-900 to-gray-900  opacity-50 inset-0 z-0"></div>
            <div className="relative flex flex-row items-end  h-72 w-full">
              <div className="absolute right-0 top-0 m-5">
                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-2 py-2 rounded-md  bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Enroll Now
                  </button>
                </span>
              </div>
              <div className="p-5 rounded-lg  flex flex-col w-full z-10 ">
                <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">
                  Loremipsum..
                </h4>
                <div className="flex justify-between items-center ">
                  <div className="flex flex-col">
                    <h2 className="text-sm flex items-center text-gray-300 font-normal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      India
                    </h2>
                  </div>
                </div>
                <div className="flex pt-4  text-sm text-gray-300">
                  <div className="flex items-center mr-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="font-normal">4.5</p>
                  </div>
                  <div className="flex items-center font-medium text-white ">
                    $1800
                    <span className="text-gray-300 text-sm font-normal">
                      /wk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
