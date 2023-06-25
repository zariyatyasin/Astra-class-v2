import StudentLayout from "@/components/layout/StudentLayout";

import React from "react";
import StudentsStats from "@/components/stats/StudentsStats";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ClassRoomList from "@/components/student/classrooms/classRoomlist";
import { getSession } from "next-auth/react";
import { connectDb, disconnectDb } from "@/utils/db";
import Class from "../../model/Class";
import JoinPage from "@/components/SinglePages/JoinPage";
const index = ({ classes }) => {
  const JoinSchool = true;

  return (
    <div>
      <StudentLayout>
        <div className="">
          {JoinSchool ? (
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-rows-5 gap-4">
              <div className="col-span-12 bg-red-200">
                <div className="bg-[#0F0F0F] py-12">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between  pb-4  ">
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl  leading-7 tracking-wide text-white sm:text-3xl sm:truncate">
                          Welcome Back, Yasin
                        </h2>
                      </div>
                      <div className="mt-4 flex md:mt-0 md:ml-4">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                        >
                          <AddBoxOutlinedIcon sx={{ fontSize: "18px" }} />{" "}
                          <p className="ml-1">Join Class</p>
                        </button>
                      </div>
                    </div>
                    <StudentsStats />
                  </div>
                </div>
              </div>

              <div className="col-span-12 row-span-4 row-start-2  ">
                <div className="px-4 sm:px-6 lg:px-8">
                  <ClassRoomList classes={classes} />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <JoinPage />{" "}
            </div>
          )}
        </div>
      </StudentLayout>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

    await connectDb();

    const classes = await Class.find({
      students: {
        $elemMatch: { studentId: session.user._id },
      },
    })
      .sort({ updatedAt: -1 })
      .lean();

    await disconnectDb();

    return {
      props: {
        classes: JSON.parse(JSON.stringify(classes)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        classes: [],
      },
    };
  }
}
