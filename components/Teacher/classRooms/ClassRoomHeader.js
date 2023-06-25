import { AddStudentModelSubAdmin } from "@/components/SubAdmin/createClass/addStudentModel";
import { AddStudentModel } from "@/components/modelForm/AddStudentModel";
import React from "react";
import Table from "./TableStudent";

const ClassRoomHeader = ({
  setAddedStudents,
  classObj,
  students,
  addedStudents,
  onRemoveStudent,
  notAddedStudents,
  onAddStudent,
  setModelOpen,
  modelOpen,
}) => {
  return (
    // <div>
    //   <div
    //     className={`${modelOpen ? "block" : "hidden"} px-4 sm:px-6 lg:px-8 `}
    //   >
    //     <div
    //       className="fixed z-10 inset-0 overflow-y-auto"
    //       aria-labelledby="modal-title"
    //       role="dialog"
    //       aria-modal="true"
    //     >
    //       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    //         <div
    //           className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    //           onClick={() => setModelOpen(false)}
    //           aria-hidden="true"
    //         ></div>

    //         <span
    //           className="hidden sm:inline-block sm:align-middle sm:h-screen"
    //           aria-hidden="true"
    //         >
    //           &#8203;
    //         </span>

    //         <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle   sm:w-full sm:p-6">
    //           <div>
    //             <Table
    //               setAddedStudents={setAddedStudents}
    //               onRemoveStudent={onRemoveStudent}
    //               notAddedStudents={notAddedStudents}
    //               students={students}
    //               addedStudents={addedStudents}
    //               onAddStudent={onAddStudent}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:flex lg:items-center lg:justify-between py-12 px-4 sm:px-6 lg:px-8 bg-white">
    //     <div className="flex-1 min-w-0">
    //       <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
    //         {classObj.name}
    //       </h2>
    //       <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
    //         <div className="mt-2 flex items-center text-sm text-gray-500">
    //           <svg
    //             className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
    //               clipRule="evenodd"
    //             />
    //             <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    //           </svg>
    //           {classObj.section}
    //         </div>
    //         <div className="mt-2 flex items-center text-sm text-gray-500">
    //           <svg
    //             className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           {classObj.students.length}
    //         </div>
    //         <div className="mt-2 flex items-center text-sm text-gray-500">
    //           <svg
    //             className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
    //             <path
    //               fillRule="evenodd"
    //               d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           {classObj.credits} Credits
    //         </div>
    //         <div className="mt-2 flex items-center text-sm text-gray-500">
    //           <svg
    //             className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           Started on January 9, 2020
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-5 flex lg:mt-0 lg:ml-4">
    //       <span className="">
    //         <button
    //           type="button"
    //           className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           onClick={() => setModelOpen(true)}
    //         >
    //           <svg
    //             className="-ml-1 mr-2 h-5 w-5"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           Add Student
    //         </button>
    //       </span>

    //       {/* <span className="ml-3 relative sm:hidden">
    //         <button
    //           type="button"
    //           className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           id="mobile-menu-button"
    //           aria-expanded="false"
    //           aria-haspopup="true"
    //         >
    //           More
    //           <svg
    //             className="-mr-1 ml-2 h-5 w-5 text-gray-500"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>

    //         <div
    //           className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="mobile-menu-button"
    //           tabindex="-1"
    //         >
    //           <a
    //             href="#"
    //             className="block px-4 py-2 text-sm text-gray-700"
    //             role="menuitem"
    //             tabindex="-1"
    //             id="mobile-menu-item-0"
    //           >
    //             Edit
    //           </a>
    //           <a
    //             href="#"
    //             className="block px-4 py-2 text-sm text-gray-700"
    //             role="menuitem"
    //             tabindex="-1"
    //             id="mobile-menu-item-1"
    //           >
    //             View
    //           </a>
    //         </div>
    //       </span> */}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
        className={`${modelOpen ? "block" : "hidden"} px-4 sm:px-6 lg:px-8 `}
      >
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setModelOpen(false)}
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle   sm:w-full sm:p-6">
              <div>
                <Table
                  setAddedStudents={setAddedStudents}
                  onRemoveStudent={onRemoveStudent}
                  notAddedStudents={notAddedStudents}
                  students={students}
                  addedStudents={addedStudents}
                  onAddStudent={onAddStudent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg    overflow-hidden shadow mb-8 sm:mx-6 lg:mx-8 mt-8">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white px-4 p-6 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">
                  Welcome back,
                </p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Rebecca Nicholas
                </p>
                <p className="text-sm font-medium text-gray-600">
                  Product Designer
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <button
                className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setModelOpen(true)}
              >
                {" "}
                Add Student{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          <div className="px-6 py-5 text-sm font-medium text-center">
            <span className="text-gray-900"> {classObj.students.length} </span>
            <span className="text-gray-600">Student</span>
          </div>

          <div className="px-6 py-5 text-sm font-medium text-center">
            <span className="text-gray-900">{classObj.credits} </span>
            <span className="text-gray-600">Credits</span>
          </div>

          <div className="px-6 py-5 text-sm font-medium text-center">
            <span className="text-gray-900">{classObj.section} </span>
            <span className="text-gray-600">Section</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoomHeader;
