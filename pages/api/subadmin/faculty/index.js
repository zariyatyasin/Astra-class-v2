import auth from "@/middleware/auth";
import Faculty from "@/model/Faculty";
import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";

const handler = nc();
// .use(auth);
//////////////////////////////////////////////////////////CRATE COURSSE
handler.post(async (req, res) => {
  try {
    connectDb();
    const { name, faculty, students } = req.body;
    const upperCode = faculty?.toUpperCase();
    console.log(upperCode);
    if (!name || !faculty) {
      res.status(400).json({ message: "Please fill in all fields" });
      return;
    }

    const existingFaculty = await Faculty.findOne({ faculty: upperCode });
    console.log(existingFaculty);
    if (existingFaculty) {
      res.status(400).json({ message: "This Faculty is Already There" });
      return;
    }
    const SaveFaculty = new Faculty({
      name,

      faculty,
      students,
    });

    await SaveFaculty.save();
    disconnectDb();
    return res.json({
      message: `Faculty ${name} has been created successfully.`,
      faculties: await Faculty.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    disconnectDb();
    return res.status(500).json({ message: error.message });
    // return res.status(500).json({ message: error.response.data.message });
  }
});

// //////////////////////////////////////////////////////////GET ALL CORSE
handler.get(async (req, res) => {
  try {
    connectDb();
    const { type } = req.body;
    let Facultys;

    if (type) {
      Facultys = await Faculty.find({ type: type.toUpperCase() });
    } else {
      Facultys = await Faculty.find();
    }
    if (Facultys.length === 0) {
      return res
        .status(404)
        .json({ message: `No Facultys found for type: ${type}` });
    }
    disconnectDb();
    return res.status(200).json({ Facultys });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
// ////////////////////////////////////////////////////////////////////////DELETE Faculty
handler.delete(async (req, res) => {
  try {
    connectDb();

    const FacultyId = req.body.id;

    if (!FacultyId) {
      res.status(400).json({ message: "Please provide a valid Faculty ID" });
      return;
    }
    const Faculties = await Faculty.findByIdAndDelete(FacultyId);
    if (!Faculties) {
      res.status(404).json({ message: "Faculty not found" });
      return;
    }
    disconnectDb();

    return res.json({
      message: "faculty has been deleted successfuly",
      faculties: await Faculty.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
// ///////////////////////////////////////////////////////////////// Update Faculty
// handler.put(async (req, res) => {
//   try {
//     connectDb();
//     const { id, name, code, description, credits, type } = req.body;
//     const upperCode = code ? code.toUpperCase() : undefined;
//     const existingFaculty = await Faculty.findOne({ id });
//     if (existingFaculty) {
//       res.status(400).json({ message: "This Faculty Code is Already Taken" });
//       return;
//     }
//     const Faculty = await Faculty.findByIdAndUpdate(
//       id,
//       {
//         name,
//         code: upperCode,
//         description,
//         credits,
//         type,
//       },
//       { new: true }
//     );

//     if (!Faculty) {
//       res.status(404).json({ message: "Faculty not found" });
//       return;
//     }
//     disconnectDb();

//     return res.json(Faculty);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: error.message });
//   }
// });
// handler.get(async (req, res) => {
//   try {
//     connectDb();
//     const FacultyId = req.query.id;
//     console.log(FacultyId);
//     const Faculty = await Faculty.findById(FacultyId);
//     disconnectDb();

//     return res.json(Faculty);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: error.message });
//   }
// });

export default handler;
