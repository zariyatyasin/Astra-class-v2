import mongoose from "mongoose";

// Define the BatchSchema
const BatchSchema = new mongoose.Schema(
  {
    batchName: {
      type: String,
      required: true,
      unique: true,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the Batch model
const Batch = mongoose.models.Batch || mongoose.model("Batch", BatchSchema);

module.exports = Batch;
