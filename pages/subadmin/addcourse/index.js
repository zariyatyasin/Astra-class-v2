import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import CourseListCard from "@/components/cards/CourseListCard";
import { CrateCourse } from "@/components/modelForm/CrateCourse";
import { CourseTable } from "@/components/Table/CourseTable";
import Course from "@/model/Course";
import Faculty from "@/model/Faculty";
import { connectDb } from "@/utils/db";

import React, { useState } from "react";
import MuiCourseTable from "@/components/SubAdmin/course/MuiCourseTable";

const index = ({ faculties, courses }) => {
  const [modelOpen, setModelOpen] = useState(false);
  console.log(faculties);
  const [data, setData] = useState(courses);

  return (
    <AdminLayout>
      <CourseListCard />

      <CrateCourse
        data={data}
        faculties={faculties}
        modelOpen={modelOpen}
        setData={setData}
        setModelOpen={setModelOpen}
      />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <div className="flex items-center justify-between pb-8 bg-white  p-4 ">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500  "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for users"
            />
          </div>

          <button
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            onClick={() => setModelOpen(true)}
          >
            <p className="text-sm font-medium leading-none text-white">
              Add Course
            </p>
          </button>
        </div>

        <MuiCourseTable data={data} setData={setData} faculties={faculties} />
      </div>
    </AdminLayout>
  );
};

export default index;
export async function getServerSideProps(context) {
  connectDb();
  const faculties = await Faculty.find({}).sort({ updatedAt: -1 }).lean();
  const courses = await Course.find({}).sort({ updatedAt: -1 }).lean();
  return {
    props: {
      faculties: JSON.parse(JSON.stringify(faculties)),
      courses: JSON.parse(JSON.stringify(courses)),
    },
  };
}
