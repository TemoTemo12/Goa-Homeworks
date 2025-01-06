const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  email: { type: String, required: true, unique: true }, // Email is required and must be unique
  password: { type: String, required: true }, // Password is required
  age: { type: Number }, // Age is optional
});

module.exports = mongoose.model("User", UserSchema);
