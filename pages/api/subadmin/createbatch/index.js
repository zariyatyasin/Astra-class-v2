import Batch from "@/model/Batch";
import { connectDb, disconnectDb } from "@/utils/db";
import nc from "next-connect";

const handler = nc();
//////////////////////////////////////////////////////////CRATE COURSSE
handler.post(async (req, res) => {
  try {
    connectDb();
    const { batchName, endDate, startDate } = req.body;
    const upperCode = batchName?.toUpperCase();

    if (!batchName) {
      res.status(400).json({ message: "Batch name is required" });
      return;
    }

    const existingBatch = await Batch.findOne({ batchName: upperCode });
    if (existingBatch) {
      res.status(400).json({ message: "This Batch is Already There" });
      return;
    }
    const SaveBatch = new Batch({
      batchName: upperCode,

      endDate,
      startDate,
    });

    await SaveBatch.save();
    disconnectDb();
    return res.json({
      message: "faculty has been create successfuly",
      batch: await Batch.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    // return res.status(500).json({ message: error.response.data.message });
  }
});

handler.delete(async (req, res) => {
  try {
    connectDb();

    const { batchId } = req.body;

    if (!batchId) {
      res.status(400).json({ message: "Please provide a valid Batch ID" });
      return;
    }
    const batch = await Batch.findByIdAndDelete(batchId);
    if (!batch) {
      res.status(404).json({ message: "Batch not found" });
      return;
    }
    disconnectDb();

    return res.json({
      message: "Batch has been created successfuly",
      batch: await Batch.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

handler.put(async (req, res) => {
  try {
    connectDb();
    const { id, batchName, endDate, startDate } = req.body;
    const upperCode = batchName ? batchName.toUpperCase() : undefined;
    const existingBatch = await Batch.findOne({ id });
    if (existingBatch) {
      res.status(400).json({ message: "This Batch Code is Already Taken" });
      return;
    }
    const batch = await Batch.findByIdAndUpdate(
      id,
      {
        batchName: upperCode,

        endDate,
        startDate,
      },
      { new: true }
    );

    if (!batch) {
      res.status(404).json({ message: "batch not found" });
      return;
    }
    disconnectDb();

    return res.json({
      message: "Batch has been updated successfuly",
      batch: await Batch.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
export default handler;
