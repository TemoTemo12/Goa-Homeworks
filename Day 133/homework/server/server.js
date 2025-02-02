const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const movies = [
  { id: 1, title: 'Movie 1', description: 'A great movie!' },
  { id: 2, title: 'Movie 2', description: 'Another great movie!' },
];

const music = [
  { id: 1, title: 'Song 1', artist: 'Artist 1' },
  { id: 2, title: 'Song 2', artist: 'Artist 2' },
];

const quotes = [
  { quote: 'The only way to do great work is to love what you do.' },
];

const user = {
  name: 'John Doe',
  status: 'Feeling great!',
};

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/music', (req, res) => {
  res.json(music);
});

app.get('/api/quotes', (req, res) => {
  res.json(quotes[0]);
});

app.get('/api/user', (req, res) => {
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
