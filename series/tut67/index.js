const http = require('http');
const fs = require('fs');
const port = 3000;
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url == '/'){
    res.end(home);
    }else if(url == '/about'){
        res.end(about);
    }else if(url == '/services'){
        res.end(services);
    }else if(url == '/contact'){
        res.end(contact);
    res.statusCode = 200;
    }else{
    res.statusCode = 404;
    res.end("not found");
    }
});

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})