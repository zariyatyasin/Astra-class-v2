import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Please enter the username",
      unique: true,
    },

    name: {
      type: String,
      required: "Please enter the name",
    },

    password: {
      type: String,
      required: "Please enter the pssword",
    },
    email: {
      type: String,

      trim: true,
      unique: true,
    },
    role: {
      type: String,
      default: "",
      required: true,
    },
    faculty: {
      type: String,
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
    enrollments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EnrollCourse",
      },
    ],
    class: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
    courses: [
      {
        semesters: {
          type: Number,
        },
        courseeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },

        code: {
          type: String,
          required: true,
        },
        courseName: {
          type: String,
          required: true,
        },

        exam: [
          {
            examName: {
              type: String,
            },
            mark: {
              type: Number,
            },
          },
        ],
        grade: {
          type: String,
        },

        avgAttendance: [],
        credits: {
          type: Number,
        },
        activeCourse: {
          type: Boolean,
          default: false,
        },
        finished: {
          type: Boolean,
          default: false,
        },
      },
    ],
    attendance: {
      type: [
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
      default: [],
    },
    cgpa: {
      type: Number,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

let User;
try {
  User = mongoose.model("User");
} catch {
  User = mongoose.model("User", userSchema);
}
export default User;
