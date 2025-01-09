const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
    res.json({ id: 1, name: 'John Doe', email: 'john@example.com' });
});

app.get('/filmData', (req, res) => {
    res.json({
        id: 101,
        title: 'Inception',
        genre: 'Sci-Fi',
        director: 'Christopher Nolan',
        releaseYear: 2010
    });
});

app.get('/currentUser', (req, res) => {
    res.json({ id: 42, username: 'current_user', role: 'admin' });
});

app.get('/groupData', (req, res) => {
    res.json({
        groupId: 5,
        groupName: 'Developers',
        members: ['Alice', 'Bob', 'Charlie']
    });
});

app.get('/familyData', (req, res) => {
    res.json({
        familyId: 10,
        familyName: 'Smith',
        members: [
            { name: 'John', age: 40, relation: 'Father' },
            { name: 'Jane', age: 38, relation: 'Mother' },
            { name: 'Jack', age: 12, relation: 'Son' }
        ]
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
