require('dotenv').config();  // ეს უნდა დააყენო პირველად, რომ .env ფაილში მონაცემები დაემატოს

const express = require('express');
const mongoose = require('mongoose');
const musicRoutes = require('./routes/musicRoutes');
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/music-data', musicRoutes);

// Server running
app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000');
});
