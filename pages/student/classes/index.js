import StudentLayout from "@/components/layout/StudentLayout";
import ClassRoomList from "@/components/student/classrooms/classRoomlist";
import { connectDb, disconnectDb } from "@/utils/db";

import { getSession } from "next-auth/react";
import React from "react";
import Class from "../../../model/Class";
const index = ({ classes }) => {
  return (
    <StudentLayout>
      <ClassRoomList classes={classes} />
    </StudentLayout>
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
