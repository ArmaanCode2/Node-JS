const socket = io();
let username;
const textarea = document.querySelector('#textarea')
const messageArea = document.querySelector('.message__area');
do{
 username = prompt("Please enter Your name")
}while(!username)

textarea.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value);
    }
})

function sendMessage(message){
    let msg = {
        user: username,
        message: message.trim()
    }
    appendMessage(msg,'outgoing');

    //sending to server
    socket.emit('message',msg);
    textarea.value = '';
    scrollToBottom()
}

function appendMessage(msg,type){
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className,"message");

    let markup = `
        <h4>${msg.user} </h4>
        <p>${msg.message} </p>
    `;

    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

//recive messsage
socket.on('message',(msg)=>{
    appendMessage(msg,'incoming');
    scrollToBottom()
})


function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight;
}