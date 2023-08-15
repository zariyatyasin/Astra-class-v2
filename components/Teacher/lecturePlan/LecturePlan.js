import React from "react";
import LecturePlanForm from "./LecturePlanForm";
import LecturePlanTimeline from "./LecturePlanTimeline";

const LecturePlan = () => {
  const lecturePlans = [
    {
      id: 1,
      lectureTitle: "Introduction to React",
      lectureDate: "2023-07-22",
      lectureTime: "10:00",
      lectureTopic: "React Basics",
    },
    {
      id: 2,
      lectureTitle: "React Components",
      lectureDate: "2023-07-25",
      lectureTime: "13:30",
      lectureTopic: "Component Lifecycle",
    },
    // Add more lecture plans as needed
  ];
  return <div></div>;
};

export default LecturePlan;
