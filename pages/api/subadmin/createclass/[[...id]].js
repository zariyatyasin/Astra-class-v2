import Class from "@/model/Class";
import User from "@/model/User";
import Student from "@/model/Student";
import Teacher from "@/model/Teacher";

import { connectDb, disconnectDb } from "@/utils/db";
import mongoose from "mongoose";
import nc from "next-connect";

const handler = nc();
//////////////////////////////////////////////////////////CRATE class
handler.post(async (req, res) => {
  try {
    connectDb();
    const {
      name,
      code,

      credits,
      section,

      faculty,
    } = req.body;
    const upperCode = code?.toUpperCase();

    if (!name || !code || !faculty || !section) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }

    const existingClass = await Class.findOne({ code: upperCode });
    if (existingClass) {
      res.status(400).json({ message: "This Claass is Already There" });
      return;
    }
    const SaveClass = new Class({
      name,
      code: upperCode,
      credits,
      section,

      faculty,
      ...req.body,
    });

    await SaveClass.save();
    const teacherId = req.body.teacher.teacherId;
    // const existingTeacherClass = teacherDocument.classes.find(
    //   (cls) => cls.classId.toString() === SaveClass._id.toString()
    // );

    // if (existingTeacherClass) {
    //   res.status(400).json({ message: "Teacher is already taking this class" });
    //   return;
    // }

    const teacherDocument = await Teacher.findOne({ teacherId });

    if (!teacherDocument) {
      res.status(404).json({ message: "Teacher not found" });
      return;
    }

    teacherDocument.classes.push({ classId: SaveClass._id });
    await teacherDocument.save();
    disconnectDb();
    return res.json({
      message: "Class has been create successfuly",
      class: await Class.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // return res.status(500).json({ message: error.response.data.message });
  }
});

handler.get(async (req, res) => {
  try {
    connectDb();

    const findClassId = req.query.id || req.body.id;

    if (!req.query.id && !req.body.id) {
      const AllClasses = await Class.find();
      return res.json(AllClasses);
    } else {
      const findClass = await Class.findById(findClassId);
      if (!findClass) {
        res.status(404).json({ message: "Class not found" });
      } else {
        res.json(findClass);
      }
    }

    disconnectDb();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
handler.put(async (req, res) => {
  try {
    const { studentId, classId } = req.body;

    const existStudent = await Student.findOne({ studentId: studentId });

    const existClass = await Class.findById(classId);

    if (existClass && existStudent) {
      const studentIndex = existClass.students.findIndex(
        (student) => student.studentId.toString() === studentId.toString()
      );

      if (studentIndex === -1) {
        existClass.students.push({ studentId });
        await existClass.save();

        if (!existStudent.joinedClasses.includes(classId)) {
          existStudent.joinedClasses.push({ classId });
          await existStudent.save();
        }
      } else {
        existClass.students.splice(studentIndex, 1);
        await existClass.save();

        const classIdStr = classId.toString();
        const classIds = existStudent.joinedClasses.map((cls) =>
          cls.classId.toString()
        );

        if (classIds.includes(classIdStr)) {
          existStudent.joinedClasses = existStudent.joinedClasses.filter(
            (cls) => cls.classId.toString() !== classIdStr
          );
          await existStudent.save();
        }
      }
    } else {
      return res.status(500).json({ message: "Class does not exist" });
    }

    return res.json(existClass);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
