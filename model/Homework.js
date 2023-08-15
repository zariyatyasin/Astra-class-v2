import mongoose from "mongoose";

const homeworkSchema = new mongoose.Schema(
  {
    classId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
    homework: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "normal", "high"],
      default: "normal",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    studentStatus: [
      {
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        done: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

let Homework;
try {
  Homework = mongoose.model("Homework");
} catch {
  Homework = mongoose.model("Homework", homeworkSchema);
}
export default Homework;
