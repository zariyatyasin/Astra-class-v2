import React from "react";

const EnrollmentTableData = ({ courses }) => {
  return (
    <div className=" ">
      <div className=" py-4 md:py-7 px-4  ">
        <div className="overflow-x-auto">
          <div className="relative overflow-x-auto shadow-md  g">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Course name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Credit
                  </th>

                  <th scope="col" className="px-6 py-3">
                    prerequisites
                  </th>
                  <th scope="col" className="px-6 py-3">
                    fee
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((item, id) => (
                  <tr className="bg-white border-b   -black" key={id}>
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  "
                        />
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">Silver</td>

                    <td className="px-6 py-4">
                      <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                        MATH 12
                      </button>
                    </td>
                    <td className="px-6 py-4">Yes</td>

                    <td className="flex items-center px-6 py-4 space-x-3">
                      <div className="font-medium bg-blue-500 p-2 text-white rounded">
                        Enroll
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTableData;
