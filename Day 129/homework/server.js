const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./UserSchema"); 

const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user from request body
    const savedUser = await newUser.save(); // Save to database
    res.status(201).json(savedUser); // Respond with saved user
  } catch (err) {
    res.status(400).json({ error: err.message }); // Handle errors
  }
});


app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); 
    res.json(users); 
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
