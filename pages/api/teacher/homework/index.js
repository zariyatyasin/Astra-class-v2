import auth from "@/middleware/auth";

import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";

import Homework from "@/model/Homework";
const handler = nc();
// .use(auth);
handler.post(async (req, res) => {
  try {
    const { classId, homework, deadline, priority, studentStatus } = req.body;

    if (!homework || !deadline) {
      return res
        .status(400)
        .json({ message: "Homework and deadline are required" });
    }

    const newHomework = new Homework({
      classId,
      homework,
      deadline,
      priority: priority || "normal",
      studentStatus,
    });

    const savedHomework = await newHomework.save();
    return res.json({
      message: "Homework created successfully",
      homework: savedHomework,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
