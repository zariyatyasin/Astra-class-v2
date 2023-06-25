import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
const UserProfile = () => {
  const profile = {
    name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
    avatar:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    backgroundImage:
      "https://png.pngtree.com/background/20210715/original/pngtree-fresh-green-watercolor-style-education-background-picture-image_1288386.jpg",
    fields: [
      ["Phone", "(555) 123-4567"],
      ["Email", "ricardocooper@example.com"],
      ["Title", "Senior Front-End Developer"],
      ["Team", "Product Development"],
      ["Location", "San Francisco"],
      ["Sits", "Oasis, 4th floor"],
      ["Salary", "$145,000"],
      ["Birthday", "June 8, 1990"],
    ],
  };
  return (
    <div>
      <div className="max-w-7xl  mx-auto">
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt=""
        />
      </div>
      <div className=" max-w-7xl  mx-auto px-4 py-10  ">
        <div className="   sm:-mt-24 sm:flex sm:items-end sm:space-x-5">
          <div className="flex flex-col">
            <img
              className="h-28 w-28 rounded-full object-cover ring-4 ring-white sm:h-40 sm:w-40 "
              src={profile.avatar}
              alt=""
            />
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {profile.name}
              </h1>
            </div>
            <div className="mt-3 flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-3 md:mt-0 flex items-center text-sm text-gray-500">
                  <LocationOnOutlinedIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  Chittagong, Bangladesh
                </div>
                <div className="mt-3 md:mt-0 flex items-center text-sm text-gray-500">
                  <PeopleAltOutlinedIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  500+
                </div>
              </div>
            </div>

            <p class="text-sm mt-3     text-gray-600">
              Student of Computer science and engineering
            </p>
            <div className="mt-3  flex items-center text-sm text-gray-500">
              <Diversity2OutlinedIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              30{" "}
              <span className="text-blue-600 font-medium ml-1">
                {" "}
                Project Done
              </span>
            </div>
            <div class="mt-3 flex lg:mt-3 ">
              <span class="">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#227AFE]  focus:outline-none focus:ring-2 focus:ring-offset-2  "
                >
                  <AddOutlinedIcon className="mr-2 flex items-center" />
                  Invite to Project
                </button>
              </span>
              <span class="hidden sm:block ml-3">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PersonAddAlt1OutlinedIcon className="mr-2 flex items-center" />
                  Follow
                </button>
              </span>

              <span class="hidden sm:block ml-3">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <MailOutlinedIcon className="mr-2 flex items-center" />
                  Chat
                </button>
              </span>
            </div>
          </div>
          <div className="mt-6   h-full sm:flex-1 sm:min-w-0 sm:flex  sm:items-center sm:justify-end   sm:pb-1">
            <div className="mt-6   flex flex-col items-start justify-stretch  ">
              <div class="px-4   py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm   truncate">Languages</p>
                </div>
                <div class="mt-3 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded text-sm  bg-gray-100 text-gray-900">
                      English{" "}
                    </span>
                    <span class="inline-flex ml-3 items-center px-2.5 py-0.5 rounded text-sm  bg-gray-100 text-gray-900">
                      Bangla
                    </span>
                    <span class="inline-flex ml-1 items-center px-2.5 py-0.5 rounded text-sm    text-blue-600">
                      +2 more
                    </span>
                  </div>
                </div>
              </div>
              <div class="px-4 py-4   sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm   truncate">Featured Skills</p>
                </div>
                <div class="mt-3 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded text-sm  bg-gray-100 text-gray-900">
                      React
                    </span>
                    <span class="inline-flex ml-3 items-center px-2.5 py-0.5 rounded text-sm  bg-gray-100 text-gray-900">
                      Javascript
                    </span>
                    <span class="inline-flex ml-3 items-center px-2.5 py-0.5 rounded text-sm  bg-gray-100 text-gray-900">
                      MERN
                    </span>
                    <span class="inline-flex ml-1 items-center px-2.5 py-0.5 rounded text-sm    text-blue-600">
                      +22 more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            {profile.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
