// server.js
const http = require('http');

const server = http.createServer((req, res) => { // req : request object | res: response: object
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});