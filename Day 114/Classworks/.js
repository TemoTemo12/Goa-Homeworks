// ჯერ Express ჩატვირთე
const express = require('express');
const app = express();

// სერვერის პორტი
const PORT = 3000;

// /about როუტი
app.get('/about', (req, res) => {
  res.send('ეს არის ინფორმაცია ჩემ შესახებ');
});

// /dashboard როუტი
app.get('/dashboard', (req, res) => {
  res.send('ეს არის პატარა დეშბორდი');
});

// სერვერის გაშვება
app.listen(PORT, () => {
  console.log(`სერვერი გაშვებულია და მუშაობს პორტზე ${PORT}`);
});
