import { connectDb, disconnectDb } from "@/utils/db";
import bcrypt from "bcrypt";
import { getToken } from "next-auth/jwt";

import { validateEmail } from "@/utils/validation";
import nc from "next-connect";
import { createActivationToken } from "@/utils/tokens";
import User from "@/model/User";
import Student from "@/model/Student";
import Teacher from "@/model/Teacher";
import auth from "@/middleware/auth";

const handler = nc().use(auth);

handler.post(async (req, res) => {
  try {
    await connectDb();
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      ...req.body,
      password: cryptedPassword,
    });

    let addedUser;
    if (role === "Student") {
      const newStudent = new Student({ ...req.body, studentId: newUser._id });
      addedUser = await Promise.all([newUser.save(), newStudent.save()]);
    } else if (role === "Teacher") {
      const newTeacher = new Teacher({ ...req.body, teacherId: newUser._id });
      addedUser = await Promise.all([newUser.save(), newTeacher.save()]);
    } else {
      addedUser = await newUser.save();
    }

    const activation_token = createActivationToken({
      id: newUser._id.toString(),
    });
    await disconnectDb();
    res.status(200).json({ message: "Register success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

handler.delete(async (req, res) => {
  try {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    await connectDb();
    const { userId } = req.body;

    if (!userId) {
      res.status(400).json({ message: "Please provide a userId" });
      return;
    }
    if (userId === session.sub) {
      console.log(userId, session.sub);
      return res.status(400).json({ message: "You cannot delete yourself" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Perform delete operation
    await User.findByIdAndDelete(userId);

    await disconnectDb();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
