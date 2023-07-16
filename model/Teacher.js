import mongoose from "mongoose";

const teacherSehema = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Please enter the teacherId",
      unique: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
    },

    classes: [
      {
        classId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
        },
      },
    ],

    totalClass: {
      type: Number,
    },

    defaultPaymentMethod: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

let Teacher;
try {
  Teacher = mongoose.model("Teacher");
} catch {
  Teacher = mongoose.model("Teacher", teacherSehema);
}
export default Teacher;
