const express = require('express');
const app = express();
const port = 3000;

// Static ფაილების მომსახურება
app.use(express.static('public'));

// მთავარი გვერდი
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// About გვერდი
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

// Contact გვერდი
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.listen(port, () => {
    console.log(`სერვერი მუშაობს: http://localhost:${port}`);
});
