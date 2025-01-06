// // 1

// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, Express Server!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



// // 2

// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Public ფაილების დაკავშირება
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Welcome to the public folder server!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// // 3

// const express = require('express');
// const app = express();
// const PORT = 3000;

// const items = [
//     { id: 1, name: 'Item 1', description: 'Description of Item 1' },
//     { id: 2, name: 'Item 2', description: 'Description of Item 2' },
//     { id: 3, name: 'Item 3', description: 'Description of Item 3' },
// ];

// app.get('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const item = items.find(item => item.id === id);
//     if (item) {
//         res.json(item);
//     } else {
//         res.status(404).send('Item not found');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// // 4 react app soo i have in react file

// // 5

// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// // Public ფოლდერის დაკავშირება
// app.use(express.static(path.join(__dirname, 'public')));

// // API Endpoint
// app.get('/api/message', (req, res) => {
//     res.json({ message: 'ეს არის API endpoint!' });
// });

// // Default HTML გვერდი
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
