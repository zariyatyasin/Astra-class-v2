import Course from "@/model/Course";
import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";

const handler = nc();
//////////////////////////////////////////////////////////CRATE COURSSE
handler.post(async (req, res) => {
  try {
    connectDb();
    const { name, code, amount, description, credits, faculty, prerequisites } =
      req.body;
    const upperCode = code?.toUpperCase();

    if (!name || !code || !faculty) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }

    const existingCourse = await Course.findOne({ code: upperCode });
    if (existingCourse) {
      res.status(400).json({ message: "This Course is Already There" });
      return;
    }
    const SaveCourse = new Course({
      name,
      code: upperCode,
      description,
      prerequisites,
      amount,
      credits,
      faculty,
    });

    await SaveCourse.save();
    disconnectDb();
    return res.json({
      message: "faculty has been create successfuly",
      courses: await Course.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // return res.status(500).json({ message: error.response.data.message });
  }
});

//////////////////////////////////////////////////////////GET ALL CORSEç
handler.get(async (req, res) => {
  try {
    connectDb();
    const { faculty } = req.body;
    let courses;

    if (faculty) {
      courses = await Course.find({ faculty: faculty.toUpperCase() });
    } else {
      courses = await Course.find();
    }
    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: `No courses found for faculty: ${faculty}` });
    }
    disconnectDb();
    return res.json({
      message: "Course has been deleted successfuly",
      courses: await Course.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
////////////////////////////////////////////////////////////////////////DELETE COURSE
handler.delete(async (req, res) => {
  try {
    connectDb();

    const { courseId } = req.body;

    if (!courseId) {
      res.status(400).json({ message: "Please provide a valid course ID" });
      return;
    }
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    disconnectDb();

    return res.json({
      message: "Course has been created successfuly",
      courses: await Course.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
///////////////////////////////////////////////////////////////// Update course
handler.put(async (req, res) => {
  try {
    connectDb();
    const { id, name, code, amount, description, credits, faculty } = req.body;
    const upperCode = code ? code.toUpperCase() : undefined;
    const existingCourse = await Course.findOne({ id });
    if (existingCourse) {
      res.status(400).json({ message: "This Course Code is Already Taken" });
      return;
    }
    const course = await Course.findByIdAndUpdate(
      id,
      {
        name,
        amount,
        code: upperCode,
        description,
        credits,
        faculty,
      },
      { new: true }
    );

    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    disconnectDb();

    return res.json({
      message: "Course has been updated successfuly",
      courses: await Course.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
// handler.get(async (req, res) => {
//   try {
//     connectDb();
//     const courseId = req.query.id;
//     console.log(courseId);
//     const course = await Course.findById(courseId);
//     disconnectDb();

//     return res.json(course);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: error.message });
//   }
// });

export default handler;
