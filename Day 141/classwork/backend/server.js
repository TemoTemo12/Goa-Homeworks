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

app.post('/api/users', async (req, res) => {

})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is mogging  http://localhost:${PORT}`);
});

