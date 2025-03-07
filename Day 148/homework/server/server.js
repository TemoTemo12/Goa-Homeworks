const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connect');

const footballRoutes = require('./routes/football.routes');
const moviesRoutes = require('./routes/movies.routes');
const usersRoutes = require('./routes/users.routes');
const messagesRoutes = require('./routes/messages.routes');
const postsRoutes = require('./routes/posts.routes');

const app = express();


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/football', footballRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/posts', postsRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Server is running!");
});


const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });
});
