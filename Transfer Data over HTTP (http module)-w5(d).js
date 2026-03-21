const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/data") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const data = {
            name: "Alice",
            age: 22
        };

        res.end(JSON.stringify(data));
    } else {
        res.write("Home Page");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
