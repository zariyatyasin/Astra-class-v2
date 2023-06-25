import { connectDb, disconnectDb } from "@/utils/db";

export default function handler(req, res) {
  connectDb();
  disconnectDb();
  console.log(process.env.MONGODB_URL);
  res.status(200).json({ name: "John Doe" });
}
