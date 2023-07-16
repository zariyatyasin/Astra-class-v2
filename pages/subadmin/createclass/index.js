import { CreateClassModel } from "@/components/SubAdmin/createClass/createClassModel";
import CreateClassTab from "@/components/SubAdmin/createClass/createClassTabs";
import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import CourseListCard from "@/components/cards/CourseListCard";
import Faculty from "@/model/Faculty";
import Course from "@/model/Course";
import Class from "@/model/Class";
import { connectDb } from "@/utils/db";
import React, { useState } from "react";
import User from "@/model/User";
import Batch from "@/model/Batch";
import ClassListTable from "@/components/Table/ClassListTable";
import ClassForm from "@/components/forms/CreateClassForm2";
import ClassListTableData from "@/components/Table/CreateClassTable";

const index = ({ teachers, courses, faculties, classes, batches }) => {
  const columnConfig = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "code", headerName: "Code", width: 200 },

    { field: "section", headerName: "Section", width: 120 },
    { field: "faculty", headerName: "Faculty", width: 200 },
    { field: "teacher", headerName: "Teacher", width: 200 },
    { field: "isActive", headerName: "Active", width: 120 },
    { field: "actions", headerName: "Actions", width: 300 },
  ];
  const [modelOpen, setModelOpen] = useState(false);
  const [data, setData] = useState(classes);

  return (
    <AdminLayout>
      <CreateClassModel
        teachers={teachers}
        batches={batches}
        courses={courses}
        faculties={faculties}
        modelOpen={modelOpen}
        setData={setData}
        setModelOpen={setModelOpen}
      />

      <div className="  ">
        <h2 className="text-lg font-medium text-gray-900">Create Class</h2>
        <div className="flex-1  my-4  flex justify-between">
          <div className="flex-1 flex">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search-field"
                className="block border w-full h-full pl-8 pr-3 py-2  text-gray-900 placeholder-gray-500   sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
          <div className="ml-4 flex items-center lg:ml-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              onClick={() => setModelOpen(true)}
            >
              Create
            </button>
          </div>
        </div>
        {/* <CourseListCard />
        <CreateClassTab data={data} />{" "} */}
      </div>

      {/* <ClassListTable data={data} setData={setData} /> */}
      <ClassListTableData
        data={data}
        setData={setData}
        teachers={teachers}
        batches={batches}
        courses={courses}
        faculties={faculties}
        columnConfig={columnConfig}
      />
    </AdminLayout>
  );
};

export default index;
export async function getServerSideProps(context) {
  connectDb();
  const faculties = await Faculty.find({}).sort({ updatedAt: -1 }).lean();
  const courses = await Course.find({}).sort({ updatedAt: -1 }).lean();
  const classes = await Class.find({}).sort({ updatedAt: -1 }).lean();
  const batches = await Batch.find({}).sort({ updatedAt: -1 }).lean();
  const teachers = await User.find({ role: "Teacher" })
    .sort({ updatedAt: -1 })
    .lean();

  return {
    props: {
      faculties: JSON.parse(JSON.stringify(faculties)),
      courses: JSON.parse(JSON.stringify(courses)),
      teachers: JSON.parse(JSON.stringify(teachers)),
      classes: JSON.parse(JSON.stringify(classes)),
      batches: JSON.parse(JSON.stringify(batches)),
    },
  };
}
