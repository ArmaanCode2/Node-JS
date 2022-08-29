const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrentUser,getRoomUsers,userLeave} = require('./utils/users');

const app =  express();
const server = http.createServer(app);
const io = socketio(server);

//setting a static folder
app.use(express.static(path.join(__dirname,'public')));

const botname = 'ChatCord bot';

// run when client connects
io.on('connection',socket =>{
    socket.on('joinRoom',({username,room}) =>{
    const user = userJoin(socket.id,username,room);
    socket.join(user.room);

        
    // wlcoming new user
    socket.emit('message' ,formatMessage(botname,`${username} welcome to the chat`));

    //broadcasting when a user connects the chat
    socket.broadcast.to(user.room).emit('message',formatMessage(botname,`${username} has joined the chat`));
    })

    //send users annd roo ifno
    io.to(user.room).emit('roomUsers',{
        room: user.room,
        users: getRoomUsers(user.room)
    })
    

    
    //listening for chat msg
    socket.on('chatMessage',(msg)=>{
        const user = getCurrentUser(socket.id);
        
        io.to(user.room).emit('message',formatMessage(user.username,msg));  
    });

    //when cleint dissconnects
    socket.on('disconnect',()=>{
        const user = userLeave(socket.id);

        if(user){
            io.to(user.room).emit('message',formatMessage(botname,`${user.username} left the chat`));
            io.to(user.room).emit('roomUsers',{
                room: user.room,
                users: getRoomUsers(user.room)
            })
        }
    });

})
const PORT = 3000 || process.env.PORT; 

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});