const express =  require('express');
const app = express();
const http =  require('http').createServer(app);
const path = require('path');

const PORT =  process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

http.listen(PORT, ()=>{
    console.log("Server Running on port ", PORT);
});

c


const io =  require('socket.io')(http);

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    });
})