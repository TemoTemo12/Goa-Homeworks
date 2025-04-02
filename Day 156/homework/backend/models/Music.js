import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
});

export default mongoose.model("Music", musicSchema);
