import { connectDb, disconnectDb } from "@/utils/db";
import bcrypt from "bcrypt";
import { validateEmail } from "@/utils/validation";
import nc from "next-connect";
import { createActivationToken } from "@/utils/tokens";
import User from "@/model/User";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await connectDb();
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invaild email",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exits" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Passsword atlest 6" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      ...req.body,

      password: cryptedPassword,
    });

    const addedUser = await newUser.save();
    console.log(addedUser._id.toString());
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
    await disconnectDb();
    res.status(200).json({ message: "Register success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
