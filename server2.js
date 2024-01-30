const http = require( 'http' )
const HOSTNAME = '127.0.0.1'
const PORT = 3000;

const server = http.createServer( ( req, res ) => {
    res.write = 200,{"content-Type" : "text/html"};
    res.end('<h1>Hello World</h1>');
});

server.listen(PORT,() => {
    console.log('Server running at http://${HOSTNAME}:${PORT}/'
    );
})
    