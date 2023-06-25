import TeacherProfileCard from "@/components/SubAdmin/students/profile/TeacherProfileCard";
import StudentLayout from "@/components/layout/StudentLayout";
import React from "react";

const Professor = () => {
  return (
    <StudentLayout>
      <div className="grid md:grid-cols-3 gap-4">
        {[...Array(12).keys()].map((i) => (
          <TeacherProfileCard />
        ))}
      </div>
    </StudentLayout>
  );
};

export default Professor;
