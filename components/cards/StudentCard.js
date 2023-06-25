import React from "react";

export const StudentCard = () => {
  return (
    <div>
      <div className="bg-white p-3 rounded-lg transition duration-500   ease-in-out transform hover:-translate-y-1 hover:shadow-lg  border shadow-sm  flex items-center justify-between  ">
        <div className="flex space-x-6   w-full ">
          <img
            src="https://i.pinimg.com/originals/25/0c/a0/250ca0295215879bd0d53e3a58fa1289.png"
            className="w-auto h-24 rounded-lg"
          />
          <div className="flex flex-col text-start">
            <div>
              <p className="  ">MD Yasin</p>
              <p className=" text-sm text-gray-400">id: 222004012</p>
            </div>
            <div className=" mt-2">
              <p className=" text-sm  ">Section: B</p>
              <p className=" text-sm text-gray-400">3rd</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <button class="flex justify-end w-24 text-right">
            <svg
              width="12"
              fill="currentColor"
              height="12"
              class="text-gray-500 hover:text-gray-800  "
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
