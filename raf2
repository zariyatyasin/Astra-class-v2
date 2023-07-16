import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Class from "../../../model/Class";
import ClassRoomHeader from "@/components/Teacher/classRooms/ClassRoomHeader";
import Box from "@mui/material/Box";
import TeacherLayout from "@/components/layout/TeacherLayout";
import { connectDb, disconnectDb } from "@/utils/db";
import { ObjectId } from "mongodb";
import ClassStudentTable from "@/components/SubAdmin/createClass/ClassStudentTable";
import User from "@/model/User";
import Table from "@/components/Teacher/classRooms/TableStudent";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Attendance from "@/components/Teacher/attendance/Attendance";
import EnrollCourse from "@/model/EnrollCourse";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//main index
const index = ({
  classObj,
  courseStudents,
  addStudentInClass,
  enrollcourses,
}) => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("enrollment", classObj.course[0]);

  const [students, setStudents] = useState(courseStudents);
  const [loading, setLoading] = useState(false);
  const [addedStudents, setAddedStudents] = useState(addStudentInClass);

  const handleRemoveStudent = async (studentToRemove) => {
    setAddedStudents((prevAddedStudents) =>
      prevAddedStudents.filter((student) => student._id !== studentToRemove._id)
    );
    setLoading(true); // set loading to true here

    try {
      const res = await axios.put(`/api/subadmin/createclass/${id}`, {
        id: studentToRemove._id,
        studentName: studentToRemove.name,
        studentRoll: studentToRemove.rollNumber,
      });
      setLoading(false); // set loading to false here
    } catch (error) {
      setLoading(false); // set loading to false here as well
      console.error(error);
    }
  };

  const notAddedStudents = students?.filter((student) => {
    return !addedStudents.find(
      (addedStudent) => addedStudent._id === student._id
    );
  });

  const [modelOpen, setModelOpen] = useState(false);
  return (
    <TeacherLayout>
      {loading && <div>Loading...</div>}
      <ClassRoomHeader
        setAddedStudents={setAddedStudents}
        setModelOpen={setModelOpen}
        modelOpen={modelOpen}
        classObj={classObj}
        students={students}
        onRemoveStudent={handleRemoveStudent}
        notAddedStudents={notAddedStudents}
      />
      <div>
        <Box
          sx={{ width: "100%" }}
          className="   h-screen px-4 sm:px-6 lg:px-8 "
        >
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="bg-white rounded-t-lg shadow "
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Students" {...a11yProps(0)} />
              <Tab label="Attendance" {...a11yProps(1)} />
              <Tab label="Exam" {...a11yProps(2)} />
              <Tab label="Post" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* <ClassStudentTable
              studentList={classObj.students}
              itemsPerPage={10}
            /> */}
            <Table
              students={addedStudents}
              onRemoveStudent={handleRemoveStudent}
            />{" "}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Attendance
              addedStudents={addedStudents}
              courseId={classObj.course[0]}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Exam
          </TabPanel>
          <TabPanel value={value} index={3}>
            Post
          </TabPanel>
        </Box>
      </div>
    </TeacherLayout>
  );
};

export default index;
export async function getServerSideProps(context) {
  try {
    await connectDb();

    const classId = context.query.id;
    const classObjId = new ObjectId(classId);

    const classObj = await Class.findOne({
      _id: classObjId,
    }).lean();

    const courseStudents = await User.find({
      courses: {
        $elemMatch: {
          courseeId: classObj.course,
        },
      },
    }).lean();

    const addStudentInClass = await User.find({
      class: classObjId,
    }).lean();
    const enrollcourses = await EnrollCourse.find({})
      .sort({ updatedAt: -1 })
      .lean();
    await disconnectDb();

    return {
      props: {
        classObj: JSON.parse(JSON.stringify(classObj)),
        courseStudents: JSON.parse(JSON.stringify(courseStudents)),
        addStudentInClass: JSON.parse(JSON.stringify(addStudentInClass)),
        enrollcourses: JSON.parse(JSON.stringify(enrollcourses)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        classObj: null,
      },
    };
  }
}
