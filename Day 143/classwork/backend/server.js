import express from "express"
import { connectDB } from "./db/connectdb.js"
import dotenv from "dotenv";
import cors from "cors"
import { User } from "./models/user.model.js";



const app = express()
dotenv.config()
app.use(cors())
const PORT = 3000

app.get('/api/users', async (req, res) => {
  try{
    const users = await User.find();
    res.status(200).json(users);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
})


app.post("/api/users", async (req, res) => {
  const body = req.body;
  try {
   const user = await User.create(body)
   console.log(body)
   app.use(express.json())
   res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})




app.listen(PORT, () => {
  connectDB();
  console.log(`Server is mogging  http://localhost:${PORT}`);
});

