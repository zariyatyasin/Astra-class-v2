import UpdateCourseForm from "@/components/form/UpdateCourseForm";
import React from "react";

const UpdateCourse = ({
  setOpen,
  faculties,
  courseId,
  selectedRow,
  data,
  formData,
  setData,
}) => {
  return (
    <div>
      <div className={`  `}>
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
              onClick={() => setOpen(false)}
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              <UpdateCourseForm
                faculties={faculties}
                courseId={courseId}
                selectedRow={selectedRow}
                courseList={data}
                formData={formData}
                setData={setData}
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
