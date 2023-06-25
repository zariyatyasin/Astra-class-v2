import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    faculty: {
      type: String,
      required: true,
      unique: true,
    },

    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  { timestamps: true }
);

let Faculty;
try {
  Faculty = mongoose.model("Faculty");
} catch {
  Faculty = mongoose.model("Faculty", facultySchema);
}

export default Faculty;
