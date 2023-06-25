import mongoose from "mongoose";

const AccessEnrollmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    endDate: {
      type: Date,
    },

    faculty: [
      {
        type: String,
      },
    ],
    enrollmentActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let AccessEnrollment;
try {
  AccessEnrollment = mongoose.model("AccessEnrollment");
} catch {
  AccessEnrollment = mongoose.model("AccessEnrollment", AccessEnrollmentSchema);
}

export default AccessEnrollment;
