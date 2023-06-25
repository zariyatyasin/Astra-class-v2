import React from "react";

const UniOverview = () => {
  return (
    <div>
      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <div className="flex justify-between">
              <h2
                className="text-base font-medium text-gray-900"
                id="announcements-title"
              >
                Overview
              </h2>
              <div className="flex flex-col">
                <span className="text-green-700 text-sm font-medium">
                  Open Now
                </span>
              </div>
            </div>
            <div className="flow-root mt-6">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                <li className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a
                        href="#"
                        className="hover:underline focus:outline-none"
                      >
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        About us
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      The mission of the University of Michigan is to serve the
                      people of Michigan and the world through preeminence in
                      creating, communicating, preserving and applying
                      knowledge, art, and academic values, and in developing
                      leaders and citizens who will challenge the present and
                      enrich the future.
                    </p>
                  </div>
                </li>

                <li className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a
                        href="#"
                        className="hover:underline focus:outline-none"
                      >
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        Phone
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      +1 (734) 764-1817
                    </p>
                  </div>
                </li>

                <li className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a
                        href="#"
                        className="hover:underline focus:outline-none"
                      >
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        Founded
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      1817
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniOverview;
