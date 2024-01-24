const http = require('http')

const HOSTNAME ='127.0.0.1';

const port = 5000;

const server = http.createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Mubashar Nuru-Deen\n')
});

server.listen(port, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${port}/`);
});