const socket = io('http://localhost:80');

const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const append = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);

    messageContainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`${message} :You`,'right');
    socket.emit('send',message);
    messageInput.value = "";
})

// const username = prompt("Enter Name To join");
socket.emit('new-user-joined',username)

socket.on('user-joined',name =>{
    append(`${name} joined the chat`,'right');
})

socket.on('receive',data =>{
    append(`${data.name}: ${data.message}`,'left');
})
socket.on('left',name =>{
    append(`${name} left the chat`,'right');
})