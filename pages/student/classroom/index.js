import AttendaceCard2 from "@/components/cards/Attendace/AttendaceCard2";
import DashboardCard11 from "@/components/cards/dashboard/DashboardCard11";
import DashboardCard12 from "@/components/cards/dashboard/DashboardCard12";
import WelcomeBanner from "@/components/cards/dashboard/WelcomeBanner";
import StudentLayout from "@/components/layout/StudentLayout";
import AttendanceStats from "@/components/student/classrooms/AttendaceState";
import { connectDb, disconnectDb } from "@/utils/db";
import Class from "../../../model/Class";
import { getSession } from "next-auth/react";
import React from "react";
import UserProfileCard from "@/components/cards/UserProfileCard";

const index = ({ classRoomDetails }) => {
  const attendanceData = [
    {
      date: "2022-05-01",
      present: 12,
      absent: 3,
    },
    {
      date: "2022-05-02",
      present: 10,
      absent: 5,
    },
    {
      date: "2022-05-03",
      present: 15,
      absent: 0,
    },
    {
      date: "2022-05-04",
      present: 7,
      absent: 8,
    },
    {
      date: "2022-05-05",
      present: 11,
      absent: 4,
    },
    {
      date: "2022-05-06",
      present: 9,
      absent: 6,
    },
    {
      date: "2022-05-07",
      present: 14,
      absent: 1,
    },
  ];

  console.log("this is ", classRoomDetails);

  return (
    <StudentLayout>
      <div>
        {/* <div class="flex-1 min-w-0">
          <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Home
          </h1>
        </div>
        <div class="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
          >
            Share
          </button>
          <button
            type="button"
            class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
          >
            Create
          </button>
        </div> */}
        {/* <WelcomeBanner classRoomDetails={classRoomDetails} /> */}
        <UserProfileCard />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-2 md:gap-6 mt-10">
        <AttendaceCard2 />
        <DashboardCard11 />
        <DashboardCard12 />
      </div>
    </StudentLayout>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

    const classId = context.query.id;

    await connectDb();

    const classRoomDetails = await Class.findById(classId);

    await disconnectDb();

    return {
      props: {
        classRoomDetails: JSON.parse(JSON.stringify(classRoomDetails)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        classRoomDetails: [],
      },
    };
  }
}
