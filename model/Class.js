import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    course: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    credits: {
      type: Number,
    },
    section: {
      type: String,
    },
    teacher: {
      teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
        unique: true,
      },
      teacherName: String,
    },
    students: [
      {
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        studentName: String,
        studentRoll: String,
      },
    ],
    batch: {
      batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch",
        required: true,
        unique: true,
      },
      batchName: String,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },
    faculty: {
      type: String,
      required: true,
    },
    maxCapacity: {
      type: Number,
    },
    schedule: [
      {
        dayOfWeek: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        startTime: {
          type: String,
        },
        endTime: {
          type: String,
        },
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.models.Class || mongoose.model("Class", ClassSchema);

module.exports = Class;
