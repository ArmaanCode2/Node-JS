const http =  require('http');

const server = http.createServer((req,res) =>{
    res.write("HELLO");
    res.end();
    res.write(req.path)
})

server.listen(3000,()=>{
    console.log("server started");
});