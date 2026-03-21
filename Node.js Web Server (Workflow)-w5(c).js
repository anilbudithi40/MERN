const http = require("http");

// create server
const server = http.createServer((req, res) => {
    res.write("Hello from Node.js Server");
    res.end();
});

// listen
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
