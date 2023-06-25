import auth from "@/middleware/auth";
import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";
import User from "@/model/User";
import EnrollCourse from "@/model/EnrollCourse";

const handler = nc().use(auth);

handler.post(async (req, res) => {
  try {
    connectDb();
    const { enrolledCouses, total, totalBeforeDiscount, couponApplied } =
      req.body;

    if (!enrolledCouses || !total) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }

    const user = await User.findById(req.user);

    if (!user) {
      res.status(400).json({ message: "User Does not exsit" });
      return;
    }

    const newEnrollCourse = new EnrollCourse({
      student: [user._id],
      enrolledCouses: enrolledCouses.map((course) => {
        return {
          courseId: course.courseId,
          code: course.code,
          courseName: course.courseName,
        };
      }),
      total: total,
      totalBeforeDiscount: totalBeforeDiscount,
      couponApplied: couponApplied,
    });

    await newEnrollCourse.save();

    for (const course of enrolledCouses) {
      const courseId = course.courseId;

      const existingCourse = user.courses.find(
        (c) => String(c.courseeId) === courseId
      );

      if (existingCourse) {
        res
          .status(400)
          .json({ message: `${existingCourse.courseName} already taken` });
        return;
      }

      user.courses.push({
        courseeId: courseId,
        code: course.code,
        courseName: course.courseName,
      });
    }
    user.enrollments.push(newEnrollCourse._id);
    await user.save();

    disconnectDb();

    return res.json({
      message: "Courses added successfully",
      enroll_id: newEnrollCourse._id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
