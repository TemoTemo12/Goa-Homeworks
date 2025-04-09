import express from 'express';


const app = express();


app.get('/api/user', (req, res) => {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  res.json(user);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
