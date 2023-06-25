import mongoose from "mongoose";

const EnrollCourseSchema = new mongoose.Schema(
  {
    student: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    semester: {
      type: Number,
    },
    enrolledCouses: [
      {
        courseId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        code: {
          type: String,
        },
        courseName: {
          type: String,
        },

        ammout: {
          type: Number,
        },
      },
    ],
    semesterCgpa: [
      {
        semester: {
          type: Number,
        },
        cgpa: {
          type: Number,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    totalBeforeDiscount: {
      type: Number,
    },
    couponApplied: {
      type: String,
    },
    taxPrice: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Completed",
      ],
    },
    paidAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const EnrollCourse =
  mongoose.models.EnrollCourse ||
  mongoose.model("EnrollCourse", EnrollCourseSchema);

export default EnrollCourse;
