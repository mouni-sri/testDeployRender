const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end("Deploying NODEJS APP IN RENDER!");
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log("Server is running on the port 3000");
});