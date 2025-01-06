import express from "express"
import { connectDB } from "./db/connectdb.js"
import dotenv from "dotenv";
const app = express()
dotenv.config()

const PORT = 5000
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});