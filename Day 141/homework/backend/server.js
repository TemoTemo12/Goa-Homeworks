require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Dictionary API
app.get("/api/dictionary/:word", async (req, res) => {
  try {
    const { word } = req.params;
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    res.json(response.data[0]?.meanings[0]?.definitions[0]?.definition || "Not found");
  } catch (error) {
    res.status(500).json({ error: "Error fetching definition" });
  }
});

// Weather API
app.get("/api/weather/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    res.json({ temp: response.data?.main?.temp || "Not found" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather" });
  }
});

// Movie API
app.get("/api/movie/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const apiKey = process.env.MOVIE_API_KEY;
    const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    res.json({ title: response.data.Title, year: response.data.Year });
  } catch (error) {
    res.status(500).json({ error: "Error fetching movie" });
  }
});

// Currency Converter API
app.get("/api/currency/:from", async (req, res) => {
  try {
    const { from } = req.params;
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching conversion rate" });
  }
});

// Random Quote API
app.get("/api/quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching quote" });
  }
});

// Random Joke API
app.get("/api/joke", async (req, res) => {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching joke" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
