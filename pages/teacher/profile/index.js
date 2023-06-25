import ProfilePageCard from "@/components/cards/ProfilePageCard";
import ProfileForm from "@/components/forms/ProfileForm";
import TeacherLayout from "@/components/layout/TeacherLayout";
import React from "react";

const index = () => {
  return (
    <TeacherLayout>
      <ProfilePageCard />
      <ProfileForm />
    </TeacherLayout>
  );
};

export default index;
