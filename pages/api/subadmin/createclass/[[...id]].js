import Class from "@/model/Class";
import User from "@/model/User";
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

    if (!name || !code || !credits || !faculty || !section) {
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
    connectDb();

    const studentId = req.body.id;
    const classId = req.query.id;
    const studentName = req.body.studentName;
    const studentRoll = req.body.studentRoll;

    const existStudent = await User.findById(studentId);
    const existClass = await Class.findById(classId);

    if (existClass) {
      const studentIndex = existClass.students.findIndex(
        (student) => student.studentId.toString() === studentId.toString()
      );

      if (studentIndex === -1) {
        await existClass.updateOne({
          $push: {
            students: {
              studentId,
              studentName,
              studentRoll,
            },
          },
        });

        if (!existStudent.class.includes(classId)) {
          await existStudent.updateOne({
            $push: { class: classId },
          });
        }
      } else {
        await existClass.updateOne({
          $pull: {
            students: {
              studentId,
              studentName,
              studentRoll,
            },
          },
        });
        const classIdStr = classId.toString();
        const classIds = existStudent.class.map((id) => id.toString());
        console.log(classIds.includes(classIdStr));
        if (classIds.includes(classIdStr)) {
          await existStudent.updateOne({
            $pull: { class: classIdStr },
          });
        }
      }
    } else {
      return res.status(500).json({ message: "Class does not exist" });
    }

    disconnectDb();

    return res.json(existClass);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
