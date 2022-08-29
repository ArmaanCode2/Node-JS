const chatFrom = document.getElementById("chat-form");
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
//getting username and room from url
const {username,room} = Qs.parse(location.search,{
  ignoreQueryPrefix:true
})

const socket = io();

//join chatroom
socket.emit('joinRoom',{username,room})

//message sent from server
socket.on("message", (message) =>{
  console.log(message)
  outputMessage(message);

  //scroll to the bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//submiting messaging

chatFrom.addEventListener("submit", (e) =>{
  e.preventDefault();

  //getting msg text
  const msg = e.target.elements.msg.value;
  //emmiting msg to server
  socket.emit("chatMessage", msg);

  //clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

//creating a message
function outputMessage(message){
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
        <p class="text">
            ${message.text}
        </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}


socket.on("roomUsers",({room,users}) =>{
  outputRoomName(room);
  outputusers(users);
})

//add roomname to dom
function outputRoomName(room){
  roomName.innerText = room;
}

//add users to dom
function outputusers(users){
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}