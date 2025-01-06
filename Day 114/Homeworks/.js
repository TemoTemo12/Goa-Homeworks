// საჭირო მოდულების ჩატვირთვა
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// 20 ფაილის შექმნა და შემთხვევითი ტექსტის ჩაწერა
const randomTexts = ["გამარჯობა", "სალამი", "როგორ ხარ?", "მშვენიერია", "კარგად!", "შეხვედრამდე", "ნახვამდის", "გთხოვ", "მადლობა", "გაიხარე", "სასიამოვნოა", "დროებით", "შენთან არის?", "შენთან შეხვედრა", "მშვიდობით", "ბედნიერება", "ოცნება", "მეგობარი", "სიყვარული", "ჯანმრთელობა"];

for (let i = 1; i <= 20; i++) {
  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const content = randomTexts[randomIndex];
  fs.writeFileSync(path.join(__dirname, `file${i}.txt`), content);
}

// /about როუტი
app.get('/about', (req, res) => {
  res.send('ეს არის ინფორმაცია ჩემ შესახებ');
});

// /homepage როუტი
app.get('/homepage', (req, res) => {
  res.end(`
    <html>
      <body>
        <h1>მთავარი გვერდი</h1>
        <a href="/about">გადადით About გვერდზე</a><br>
        <a href="/dashboard">გადადით Dashboard გვერდზე</a><br>
        <a href="/contact">გადადით Contact გვერდზე</a>
      </body>
    </html>
  `);
});

// სერვერის გაშვება
app.listen(PORT, () => {
  console.log(`სერვერი გაშვებულია და მუშაობს პორტზე ${PORT}`);
});
