const express = require('express');
const app = express();
const port = 3000;

// Serve a simple message at the root
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
