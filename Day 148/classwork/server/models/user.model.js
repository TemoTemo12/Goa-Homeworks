import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
})

export const User = mongoose.model("users", userSchema)