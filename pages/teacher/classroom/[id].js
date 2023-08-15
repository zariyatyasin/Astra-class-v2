// index.js
import React, { useState } from "react";
import TeacherLayout from "@/components/layout/TeacherLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Homework from "@/components/Teacher/homework/Homework";
import LecturePlan from "@/components/Teacher/lecturePlan/LecturePlan";
import Class from "../../../model/Class";
import User from "../../../model/User";
import { connectDb, disconnectDb } from "@/utils/db";
import LecturePlanForm from "@/components/Teacher/lecturePlan/LecturePlanForm";
import Exam from "@/components/Teacher/exam/Exam";
import PostApp from "@/components/Teacher/post/TeacherPost";
const Index = ({ classObj, users }) => {
  console.log(classObj, users);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TeacherLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Overview" />
            <Tab label="Homework" />
            <Tab label="Exam" />
            <Tab label="Post" />
            <Tab label="Plan" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <p>Overview Content</p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Homework />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Exam />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PostApp />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <LecturePlanForm />
          </TabPanel>
        </Box>
      </div>
    </TeacherLayout>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default Index;
export async function getServerSideProps(context) {
  try {
    await connectDb();

    const { id } = context.query;

    const classObj = await Class.findOne({
      _id: id,
    }).lean();

    if (!classObj) {
      await disconnectDb();
      return {
        notFound: true,
      };
    }

    const users = await User.find({
      _id: { $in: classObj.students.map((student) => student.studentId) },
    }).lean();

    await disconnectDb();

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
        users: [],
      },
    };
  }
}
