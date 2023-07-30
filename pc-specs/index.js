const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { escape } = require("querystring");
const dotenv = require("dotenv").config();
const port = process.env.port;

//getting os specs
const html = `
              <h1>Username: ${os.userInfo().username}</h1>
              <h1>Bit: ${os.arch().replace("x","")}</h1>
              <h1>Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)}</h1>
              <h1>Free Memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(1)}</h1>
`;

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(path.join(__dirname,"index.html"), "utf-8");
    const indexFile = data.replace("<p></p>", html);
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(indexFile);
})


server.listen(port,() => console.log("Server running"));