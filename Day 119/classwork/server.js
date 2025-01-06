const express = require('express');
const path = require('path');

const app = express();

// Public ფოლდერის კონფიგურაცია
app.use(express.static(path.join(__dirname, 'public')));

// მთავარი როუტი
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// სერვერის გაშვება
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
