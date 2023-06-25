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

  useEffect(() => {}, []);

  // const classes = [
  //   {
  //     id: 1,
  //     title: "History",
  //     description: "Learn about the past with Mrs. Brown",
  //     teacher: "Sarah Brown",
  //     students: ["Jack", "Maggie", "Noah"],
  //   },
  //   {
  //     id: 2,
  //     title: "Art",
  //     description: "Explore creativity with Mr. Garcia",
  //     teacher: "Carlos Garcia",
  //     students: ["Olivia", "Parker", "Quinn"],
  //   },
  //   {
  //     id: 3,
  //     title: "Physical Education",
  //     description: "Stay active and healthy with Coach Rodriguez",
  //     teacher: "Miguel Rodriguez",
  //     students: ["Riley", "Sam", "Taylor"],
  //   },
  //   {
  //     id: 4,
  //     title: "Music",
  //     description: "Learn to play an instrument with Ms. Chen",
  //     teacher: "Lisa Chen",
  //     students: ["Uma", "Vivian", "William"],
  //   },
  //   {
  //     id: 5,
  //     title: "Computer Science",
  //     description: "Discover programming with Mr. Patel",
  //     teacher: "Amit Patel",
  //     students: ["Xander", "Yara", "Zoe"],
  //   },
  //   {
  //     id: 6,
  //     title: "Geography",
  //     description: "Explore the world with Mr. Davis",
  //     teacher: "Eric Davis",
  //     students: ["Aaron", "Bella", "Caleb"],
  //   },
  //   {
  //     id: 7,
  //     title: "Drama",
  //     description: "Act and perform with Mrs. Evans",
  //     teacher: "Megan Evans",
  //     students: ["Daniel", "Emma", "Fiona"],
  //   },
  //   {
  //     id: 8,
  //     title: "Foreign Language",
  //     description: "Learn a new language with Mr. Kim",
  //     teacher: "Jae Kim",
  //     students: ["Greta", "Hector", "Ivy"],
  //   },
  //   {
  //     id: 9,
  //     title: "Business",
  //     description: "Understand economics with Ms. Singh",
  //     teacher: "Priya Singh",
  //     students: ["Jacob", "Kaitlyn", "Liam"],
  //   },
  //   {
  //     id: 10,
  //     title: "Philosophy",
  //     description: "Question the world with Dr. Anderson",
  //     teacher: "Nora Anderson",
  //     students: ["Max", "Natalie", "Oscar"],
  //   },
  // ];

  return (
    <TeacherLayout>
      <TeacherCard />
      <div className="grid bg-white pt-10 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pb-8 border-b px-4 sm:px-6 lg:px-8">
        <FeaturesCard
          icon={<PeopleOutlineIcon />}
          title={"Studets "}
          number={300}
          dis={"Total Number of Students"}
          color={"blue"}
        />
        <FeaturesCard
          icon={<SchoolOutlinedIcon />}
          title={" Credits "}
          number={45}
          dis={"Total Number of Credit"}
          color={"red"}
        />
        <FeaturesCard
          icon={<AccountBalanceOutlinedIcon />}
          title={"Course "}
          color={"green"}
          dis={"Total Number of Course"}
          number={300}
        />
        <FeaturesCard
          icon={<PeopleOutlineIcon />}
          title={"Studets "}
          number={300}
        />
      </div>
      <TeacherClass classes={classes} />
    </TeacherLayout>
  );
};

export default index;

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

    await connectDb();

    console.log("this is user", session.user._id);
    const classes = await Class.find({ teacher: session.user._id })
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
