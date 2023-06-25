import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Please enter the username",
      unique: true,
    },

    name: {
      type: String,
      required: "Please enter the name",
    },

    password: {
      type: String,
      required: "Please enter the pssword",
    },
    email: {
      type: String,
      required: "Please enter the email",
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["teacher", "student", "admin", "subadmin"],
      required: true,
    },

    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let User;
try {
  User = mongoose.model("User");
} catch {
  User = mongoose.model("User", userSchema);
}
export default User;
