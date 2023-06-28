import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phone: {
      type: String,
    },

    address: {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      addressLine1: {
        type: String,
      },
      zipCode: {
        type: String,
      },
    },
    email: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    nationality: {
      type: String,
    },
    emergencyContact: {
      name: {
        type: String,
      },
      relationship: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    previousInstitution: [
      {
        schoolName: {
          type: String,
        },
        department: {
          type: String,
        },
        address: {
          type: String,
        },
        admissionYear: {
          type: Number,
        },
        degree: {
          type: String,
        },
        year: {
          type: Number,
        },
        rollNumber: {
          type: String,
        },
      },
    ],
    previousInstitution: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      degree: {
        type: String,
      },
      year: {
        type: Number,
      },
    },
    academicDetails: [
      {
        examName: {
          type: String,
        },
        department: {
          type: String,
        },

        examYear: {
          type: Number,
        },
        rollNumber: {
          type: String,
        },
      },
    ],
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    fatherOccupation: {
      type: String,
    },
    motherOccupation: {
      type: String,
    },
    guardianName: {
      type: String,
    },
    guardianPhone: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
  },
  { timestamps: true }
);

let personalInfo;
try {
  personalInfo = mongoose.model("personalInfo");
} catch {
  personalInfo = mongoose.model("personalInfo", personalInfoSchema);
}
export default personalInfo;
