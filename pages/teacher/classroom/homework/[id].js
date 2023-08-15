import HomeworkDetails from "@/components/Teacher/homework/HomeworkDetails";
import TeacherLayout from "@/components/layout/TeacherLayout";
import React from "react";

const index = () => {
  const homeworkData = {
    _id: "1", // Some unique identifier for the homework
    homework: "Math Assignment",
    deadline: "2023-07-31", // The deadline date (in string format for simplicity)
    studentStatus: [
      {
        studentId: 101,
        done: false,
      },
      {
        studentId: 102,
        done: true,
      },
      {
        studentId: 103,
        done: false,
      },
      // Add more students as needed
    ],
  };
  return (
    <TeacherLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <HomeworkDetails homework={homeworkData} />
      </div>
    </TeacherLayout>
  );
};

export default index;
