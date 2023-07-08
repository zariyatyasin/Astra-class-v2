import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Please enter the studentId",
      unique: true,
    },

    attendance: [
      {
        date: {
          type: Date,
          required: true,
        },
        present: {
          type: Boolean,
          default: false,
        },
        absent: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

let Attendance;
try {
  Attendance = mongoose.model("Attendance");
} catch {
  Attendance = mongoose.model("Attendance", attendanceSchema);
}
export default Attendance;
