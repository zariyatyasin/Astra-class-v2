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
    const user = await User.findById(id);

    disconnectDb();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

handler.put(async (req, res) => {
  try {
    res.status(200).json({ message: "Attendance updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating attendance" });
  }
});

export default handler;
