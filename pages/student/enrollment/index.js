import StudentLayout from "@/components/layout/StudentLayout";

import Course from "@/model/Course";
import AccessEnrollment from "@/model/AccessEnrollment";
import EnrollCourse from "@/model/EnrollCourse";
import { connectDb } from "@/utils/db";
import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { getSession } from "next-auth/react";
import useGetUser from "@/components/hook/GetUserInfo";

const Enrollment = ({ courses, accessEnrollment, enrollcourses, user }) => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const { userData, loading, error } = useGetUser(user._id);
  const subjects = [
    {
      id: 1,
      code: "PHY",
      fullName: "Physics",
      shortName: "Phy",
      year: "1st",
      description:
        "The study of matter, energy, and the interactions between them.",
    },
    {
      id: 2,
      code: "CHEM",
      fullName: "Chemistry",
      shortName: "Chem",
      year: "1st",
      description:
        "The study of the composition, properties, and behavior of substances.",
    },
    {
      id: 3,
      code: "BIO",
      fullName: "Biology",
      shortName: "Bio",
      year: "1st",
      description:
        "The study of living organisms and their interactions with the environment.",
    },
    {
      id: 4,
      code: "MATH",
      fullName: "Mathematics",
      shortName: "Math",
      year: "1st",
      description:
        "The study of numbers, quantities, structures, and patterns.",
    },
    {
      id: 5,
      code: "CS",
      fullName: "Computer Science",
      shortName: "CS",
      year: "1st",
      description: "The study of computers and computational systems.",
    },
    {
      id: 6,
      code: "ENG",
      fullName: "English",
      shortName: "Eng",
      year: "1st",
      description:
        "The study of the English language, literature, and communication skills.",
    },
    {
      id: 7,
      code: "BAN",
      fullName: "Bangla",
      shortName: "Ban",
      year: "1st",
      description: "The study of the Bengali language and literature.",
    },
    {
      id: 8,
      code: "SOC",
      fullName: "Social Science",
      shortName: "Soc",
      year: "1st",
      description: "The study of human society and social relationships.",
    },
    {
      id: 9,
      code: "GEN",
      fullName: "General Science",
      shortName: "Gen",
      year: "1st",
      description: "A broad overview of various scientific disciplines.",
    },
    {
      id: 10,
      code: "PE",
      fullName: "Physical Education",
      shortName: "PE",
      year: "1st",
      description: "The study of physical fitness, sports, and health.",
    },
    {
      id: 11,
      code: "STAT",
      fullName: "Statistics",
      shortName: "Stat",
      year: "1st",
      description: "The study of collecting, analyzing, and interpreting data.",
    },
    {
      id: 12,
      code: "GEO",
      fullName: "Geography",
      shortName: "Geo",
      year: "1st",
      description:
        "The study of the Earth, its features, and the distribution of life.",
    },
    {
      id: 13,
      code: "ENV",
      fullName: "Environmental Science",
      shortName: "Env",
      year: "2nd",
      description:
        "The study of the environment and its impact on living organisms.",
    },
    {
      id: 14,
      code: "ECO",
      fullName: "Economics",
      shortName: "Eco",
      year: "2nd",
      description:
        "The study of the production, distribution, and consumption of goods and services.",
    },
    {
      id: 15,
      code: "ACC",
      fullName: "Accounting",
      shortName: "Acc",
      year: "2nd",
      description: "The study of financial information and management.",
    },
    {
      id: 16,
      code: "BS",
      fullName: "Business Studies",
      shortName: "BS",
      year: "2nd",
      description:
        "The study of business principles, strategies, and operations.",
    },
    {
      id: 17,
      code: "PSY",
      fullName: "Psychology",
      shortName: "Psy",
      year: "2nd",
      description: "The study of the mind, behavior, and mental processes.",
    },
    {
      id: 18,
      code: "LOG",
      fullName: "Logic",
      shortName: "Log",
      year: "2nd",
      description: "The study of reasoning, argumentation, and inference.",
    },
    {
      id: 19,
      code: "HIS",
      fullName: "History",
      shortName: "His",
      year: "2nd",
      description: "The study of past events, societies, and civilizations.",
    },
    {
      id: 20,
      code: "CIV",
      fullName: "Civics",
      shortName: "Civ",
      year: "2nd",
      description:
        "The study of government, citizenship, and civic rights and responsibilities.",
    },
    {
      id: 21,
      code: "ISL",
      fullName: "Islamic Studies",
      shortName: "Isl",
      year: "2nd",
      description: "The study of Islamic beliefs, practices, and culture.",
    },
    {
      id: 22,
      code: "AGR",
      fullName: "Agriculture",
      shortName: "Agr",
      year: "2nd",
      description:
        "The study of agricultural principles, practices, and techniques.",
    },
    {
      id: 23,
      code: "HS",
      fullName: "Home Science",
      shortName: "HS",
      year: "2nd",
      description:
        "The study of managing and improving home life and family relationships.",
    },
    {
      id: 24,
      code: "ICT",
      fullName: "ICT",
      shortName: "ICT",
      year: "2nd",
      description: "The study of information and communication technologies.",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return <StudentLayout></StudentLayout>;
};

export default Enrollment;
export async function getServerSideProps(context) {
  connectDb();
  const session = await getSession(context);
  const user = session?.user;

  const courses = await Course.find({}).sort({ updatedAt: -1 }).lean();
  const accessEnrollment = await AccessEnrollment.find({})
    .sort({ updatedAt: -1 })
    .lean();
  const enrollcourses = await EnrollCourse.find({})
    .sort({ updatedAt: -1 })
    .lean();
  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
      accessEnrollment: JSON.parse(JSON.stringify(accessEnrollment)),
      enrollcourses: JSON.parse(JSON.stringify(enrollcourses)),
      user: user,
    },
  };
}
