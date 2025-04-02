import express from "express";
import Music from "../models/Music.js";

const router = express.Router();

// GET all music
router.get("/music-data", async (req, res) => {
  const music = await Music.find();
  res.json(music);
});

// POST create music
router.post("/music-create", async (req, res) => {
  const { title, artist, genre } = req.body;
  const newMusic = new Music({ title, artist, genre });
  await newMusic.save();
  res.json(newMusic);
});

// PUT update music
router.put("/music-update/:id", async (req, res) => {
  const { title, artist, genre } = req.body;
  const updatedMusic = await Music.findByIdAndUpdate(req.params.id, { title, artist, genre }, { new: true });
  res.json(updatedMusic);
});

// DELETE music
router.delete("/music-delete/:id", async (req, res) => {
  await Music.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
