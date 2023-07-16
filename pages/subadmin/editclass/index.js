import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import CreateBatchForm from "@/components/forms/CreateBatchForm";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import User from "@/model/User";
import Class from "@/model/Class";
import Student from "@/model/Student";

import BatchTable from "@/components/Table/BatchTable";
import ReuableTable from "@/components/Table/ReuableTable";
import { connectDb } from "@/utils/db";
import AddStudentTableClass from "@/components/Table/AddStudentTableClass";
import ClassRoomStudentListTable from "@/components/Table/ClassRoomStudentListTable";

const Index = ({ students, classes, users }) => {
  const [open, setOpen] = useState(false);
  const [user, setStudents] = useState(users);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalClose = () => {
    handleClose();
  };

  return (
    <div>
      <AdminLayout>
        <Button variant="contained" onClick={handleOpen}>
          Add Students
        </Button>
        <Modal open={open} onClose={handleModalClose}>
          <div
            className="flex items-center justify-center h-full"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <AddStudentTableClass
                students={students}
                classes={classes}
                setStudents={setStudents}
              />
            </div>
          </div>
        </Modal>
        <ClassRoomStudentListTable
          students={user}
          classes={classes}
          setStudents={setStudents}
        />
      </AdminLayout>
    </div>
  );
};

export default Index;
export async function getServerSideProps(context) {
  connectDb();

  const students = await User.find({ role: "Student" })
    .sort({ updatedAt: -1 })
    .lean();

  const { id } = context.query;

  const classes = await Class.find({ _id: id }).sort({ updatedAt: -1 }).lean();
  const studentIds = classes[0]?.students.map((student) => student.studentId);

  const fetchedUsers = await User.find({ _id: { $in: studentIds } }).lean();

  return {
    props: {
      students: JSON.parse(JSON.stringify(students)),
      classes: JSON.parse(JSON.stringify(classes)),
      users: JSON.parse(JSON.stringify(fetchedUsers)),
    },
  };
}
