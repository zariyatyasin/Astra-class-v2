import React from "react";

import AddStudentSearch from "./addStudentBar";

export const AddStudentModelSubAdmin = ({
  studentList,
  setStudentList,
  students,
  modelOpen,
  setModelOpen,
  courseId,
}) => {
  return (
    <div className={`${modelOpen ? "block" : "hidden"}`}>
      <div
        className="fixed z-20 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={() => setModelOpen(false)}
          ></div>

          <div className="relative inline-block align-bottom  bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
            <div>
              <AddStudentSearch
                studentList={studentList}
                courseId={courseId}
                students={students}
                setStudentList={setStudentList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
