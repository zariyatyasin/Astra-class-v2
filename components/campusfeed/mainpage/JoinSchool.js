import Link from "next/link";
import React from "react";

const JoinSchool = () => {
  return (
    <div>
      <section aria-labelledby="who-to-follow-heading">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2
              id="who-to-follow-heading"
              className="text-base font-medium text-gray-900"
            >
              School may you like
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                <li className="flex items-center py-4 space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Seal_of_East_Delta_University.png"
                      alt=""
                    />
                  </div>
                  <Link
                    href={"/campusfeed/schoolprofile"}
                    className="min-w-0 flex-1"
                  >
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#">East Delta University</a>
                    </p>
                    <p className="text-sm text-gray-500">
                      <a href="#">@Edu</a>
                    </p>
                  </Link>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <svg
                        className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span> Get Admit </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                <li className="flex items-center py-4 space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://seeklogo.com/images/M/MIT-logo-73A348B3DB-seeklogo.com.png"
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#">Massachusetts Institute of Technology</a>
                    </p>
                    <p className="text-sm text-gray-500">
                      <a href="#">@mit</a>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <svg
                        className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span> Get Admit </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                <li className="flex items-center py-4 space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/1200px-Seal_of_the_University_of_Michigan.svg.png"
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#">university of Michigan</a>
                    </p>
                    <p className="text-sm text-gray-500">
                      <a href="#">@Michigan</a>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <svg
                        className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span> Get Admit </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                <li className="flex items-center py-4 space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://static.wikia.nocookie.net/footbal/images/7/75/Pennsylvania_State_University_seal_svg.png/revision/latest?cb=20110214090416"
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#">Pennsylvania State University</a>
                    </p>
                    <p className="text-sm text-gray-500">
                      <a href="#">@Pennsylvania</a>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <svg
                        className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span> Get Admit </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                {" "}
                View all{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinSchool;
