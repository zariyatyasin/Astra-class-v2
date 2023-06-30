import { connectDb, disconnectDb } from "@/utils/db";
import bcrypt from "bcrypt";
import { getToken } from "next-auth/jwt";

import { validateEmail } from "@/utils/validation";
import nc from "next-connect";
import { createActivationToken } from "@/utils/tokens";
import User from "@/model/User";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await connectDb();
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exits" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      ...req.body,

      password: cryptedPassword,
    });

    const addedUser = await newUser.save();

    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
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
