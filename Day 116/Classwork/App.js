const http = require('http'); 


const server = http.createServer((req, res) => {
   
    res.writeHead(200, { 'Content-Type': 'text/plain' });


    res.end('Hello, World! This is a simple server created using Node.js!');
});


server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
