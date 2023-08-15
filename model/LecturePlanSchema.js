import mongoose from "mongoose";

const lecturePlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

let LecturePlan;
try {
  LecturePlan = mongoose.model("LecturePlan");
} catch {
  LecturePlan = mongoose.model("LecturePlan", lecturePlanSchema);
}
export default LecturePlan;
