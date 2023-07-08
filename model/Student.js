import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Please enter the studentId",
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
    rollNumber: {
      type: String,
    },
    currentSemester: {
      type: Number,
    },

    joinedClasses: [
      {
        classId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
        },
      },
    ],

    cgpa: {
      type: Number,
    },

    defaultPaymentMethod: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

let Student;
try {
  Student = mongoose.model("Student");
} catch {
  Student = mongoose.model("Student", studentSchema);
}
export default Student;
