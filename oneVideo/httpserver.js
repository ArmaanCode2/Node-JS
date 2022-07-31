const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1> this is armaan</h1>');
});

server.listen(port,()=>{
console.log(`server is listening on port ${port}`)
})