import auth from "@/middleware/auth";
import AccessEnrollment from "@/model/AccessEnrollment";
import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";
const handler = nc();
// .use(auth)
handler.post(async (req, res) => {
  try {
    connectDb();
    const { name, description, faculty, endDate, enrollmentActive } = req.body;

    const SaveEnrollment = new AccessEnrollment({
      name,
      description,
      faculty,
      endDate,
      enrollmentActive,
    });

    await SaveEnrollment.save();
    disconnectDb();
    return res.json({
      message: `Enrollment${name} has been created successfully.`,
      AccessEnrollment: await AccessEnrollment.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    disconnectDb();
    return res.status(500).json({ message: error.message });
    // return res.status(500).json({ message: error.response.data.message });
  }
});
handler.put(async (req, res) => {
  let id = "64538e3d5fcba6c5c7f4d95b";
  try {
    connectDb();
    const { name, description, faculty, endDate, enrollmentActive } = req.body;

    const existingEnrollment = await AccessEnrollment.findOne({
      id,
    });
    if (existingEnrollment) {
      res
        .status(400)
        .json({ message: "Create A Enroll database or call the owner" });
      return;
    }

    const Enrollment = await AccessEnrollment.findByIdAndUpdate(
      id,
      {
        name,
        description,
        faculty,
        endDate,
        enrollmentActive,
      },
      { new: true }
    );

    if (!Enrollment) {
      res.status(404).json({ message: "Enrollmentnot found" });
      return;
    }
    disconnectDb();

    return res.json({ message: "Sucessfully Updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

handler.get(async (req, res) => {
  try {
    connectDb();

    disconnectDb();
    return res.json({
      AccessEnrollment: await AccessEnrollment.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
