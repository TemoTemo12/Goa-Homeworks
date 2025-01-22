const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, genre: "Action" },
];


app.get("/api/movies", (req, res) => res.json(movies));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
