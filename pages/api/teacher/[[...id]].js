import auth from "@/middleware/auth";

import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";

import User from "@/model/User";
const handler = nc();
// .use(auth);
handler.get(async (req, res) => {
  try {
    connectDb();
    const { id } = req.query;
    const teacher = await User.findById(id);

    disconnectDb();
    return res.json(teacher);
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // return res.status(500).json({ message: error.response.data.message });
  }
});

export default handler;
