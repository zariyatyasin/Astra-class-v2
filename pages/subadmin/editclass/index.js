import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ClassStudentTable from "../../../components/SubAdmin/createClass/ClassStudentTable";
import axios from "axios";
import { AddStudentModelSubAdmin } from "@/components/SubAdmin/createClass/addStudentModel";
import { connectDb } from "@/utils/db";
import User from "@/model/User";

const index = ({ students }) => {
  const [data, setData] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [modelOpen, setModelOpen] = useState(false);
  const [studentList, setStudentList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/subadmin/createclass/${id}`);
          setData(response.data);
          setStudentList(response.data.students);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [id, modelOpen]);

  console.log("prev", studentList);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <AddStudentModelSubAdmin
        studentList={studentList}
        setStudentList={setStudentList}
        students={students}
        courseId={data.course}
        setModelOpen={setModelOpen}
        modelOpen={modelOpen}
      />
      <div className="    ">
        <div className="sm:flex  p-4 sm:justify-between bg-white sm:items-baseline items-center">
          <div className="sm:w-0 sm:flex-1 flex">
            <div>
              <h1
                id="message-heading"
                className="text-lg font-medium text-gray-900"
              >
                Full-Stack Developer
              </h1>
              <div className=" flex flex-wrap">
                <p className="mt-1 mr-2 text-sm text-gray-500 truncate">
                  Checkout and Payments Team
                </p>
                <div>
                  <p className="mt-1 mr-2 text-sm text-gray-500 truncate">
                    Total Studet
                  </p>
                </div>
                <div>
                  <p className="mt-1 text-sm text-gray-500 truncate">
                    Starting and ending
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {" "}
              Active{" "}
            </span>
            <div className="  border  ">
              <div>
                <button
                  type="button"
                  className="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  id="menu-0-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open options</span>

                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              <div
                className="origin-top-right hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-0-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 flex justify-between px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-0-item-0"
                  >
                    <span>Edit</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 flex justify-between px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-0-item-1"
                  >
                    <span>Duplicate</span>
                  </a>
                  <button
                    type="button"
                    className="text-gray-700 w-full flex justify-between px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-0-item-2"
                  >
                    <span>Archive</span>
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className=" inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
              onClick={() => setModelOpen(true)}
            >
              Add Student
            </button>
          </div>
        </div>
        {data && data.students.length > 0 ? (
          <ClassStudentTable
            studentList={studentList}
            itemsPerPage={10}
            setData={setData}
          />
        ) : (
          <div>No student added</div>
        )}
      </div>
    </AdminLayout>
  );
};

export default index;
export async function getServerSideProps(context) {
  connectDb();

  const students = await User.find({ role: "student" })
    .sort({ updatedAt: -1 })
    .lean();

  return {
    props: {
      students: JSON.parse(JSON.stringify(students)),
    },
  };
}
