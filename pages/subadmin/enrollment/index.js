import EnrollmentSubadmin from "@/components/SubAdmin/enrollment/erollment";
import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import MUIenrollmentSetting from "@/components/mui/MUIenrollmentTab";
import BasicTabs from "@/components/mui/MUItabs";
import AccessEnrollment from "@/model/AccessEnrollment";
import Faculty from "@/model/Faculty";
import { connectDb } from "@/utils/db";
import React from "react";

const index = ({ faculties, accessEnrollment }) => {
  return (
    <AdminLayout>
      <div className="rounded-md pt-10 pb-12 px-4 lg:pb-16  bg-white">
        <div className="px-4 sm:px-6 md:px-0 mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
        </div>
        <MUIenrollmentSetting
          faculties={faculties}
          accessEnrollment={accessEnrollment}
        />
      </div>
    </AdminLayout>
  );
};

export default index;
export async function getServerSideProps(context) {
  connectDb();
  const faculties = await Faculty.find({}).sort({ updatedAt: -1 }).lean();
  const accessEnrollment = await AccessEnrollment.find({})
    .sort({ updatedAt: -1 })
    .lean();
  return {
    props: {
      faculties: JSON.parse(JSON.stringify(faculties)),
      accessEnrollment: JSON.parse(JSON.stringify(accessEnrollment)),
    },
  };
}
