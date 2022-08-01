const http = require("http");
const fs = require("fs");

const fileContent = fs.readFileSync('tut63.js');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end(fileContent);
});

server.listen(3000,()=>{
    console.log("Server Strated")
})