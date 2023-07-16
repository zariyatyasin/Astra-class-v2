import FeaturesCard from "@/components/cards/FeaturesCard";
import TeacherLayout from "@/components/layout/TeacherLayout";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import React, { useEffect } from "react";
import Class from "../../model/Class";
import { TeacherCard } from "@/components/cards/TeacherCard";
import { TeacherClass } from "@/components/Teacher/TeacherClasses/TeacherClass";
import { getSession, useSession } from "next-auth/react";
import { connectDb, disconnectDb } from "@/utils/db";

const index = ({ classes }) => {
  console.log(classes);

  return (
    <TeacherLayout>
      <TeacherClass classes={classes} />
    </TeacherLayout>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

    await connectDb();

    const classes = await Class.find({ "teacher.teacherId": session.user._id })
      .populate("teacher.teacherId")
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
