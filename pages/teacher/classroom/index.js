import TeacherLayout from "@/components/layout/TeacherLayout";
import { connectDb, disconnectDb } from "@/utils/db";
import Class from "@/model/Class";
import Student from "@/model/Student";
import User from "@/model/User";
import React from "react";

const index = ({ classObj, users }) => {
  console.log(users);
  return (
    <TeacherLayout>
      <div className="px-4 sm:px-6 lg:px-8 ">index</div>
    </TeacherLayout>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    await connectDb();

    const { id } = context.query;
    console.log(id);
    const classObj = await Class.findOne({
      _id: id,
    }).lean();

    // Get the student details for each studentId
    // const students = await Student.find({
    //   studentId: { $in: classObj.students.map((student) => student.studentId) },
    // }).lean();
    const users = await User.find({
      _id: { $in: classObj.students.map((student) => student.studentId) },
    }).lean();

    await disconnectDb();

    // Add the students array to the classObj

    return {
      props: {
        classObj: JSON.parse(JSON.stringify(classObj)),
        users: JSON.parse(JSON.stringify(users)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        classObj: null,
        students: [], // Add an empty students array to avoid potential issues
      },
    };
  }
}
