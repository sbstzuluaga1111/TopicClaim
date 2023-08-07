$(function () {
  const socket = io();
  const $messageForm = $('#message-form');
  const $messageBox = $('#message');
  const $chat = $('#chat');
  const $usernames = $('#usernames'); 
  const $emailField = $('#email_field'); 
  const $passwordField = $('#password_field'); 
  const $formatoUser = $('#formatoUser');
  const $userEmail = $('#user-email');

  $formatoUser.submit(e => {
    e.preventDefault();
    const email = $emailField.val().trim();
    const password = $passwordField.val(); 
    if (email !== '' && password !== '') {
      socket.emit('user login', { email, password });
    }
  });

  $messageForm.submit(function (e) {
    e.preventDefault();
    const message = $messageBox.val().trim();
    if (message !== '') {
      socket.emit('send message', { message });
      $messageBox.val('');
    }
  });

  socket.on('new message', function (data) {
    const messageElement = $('<li>').addClass('list-group-item').text(data.message); 
    $chat.append(messageElement);
  });

  socket.on('update usernames', function (data) {
    $usernames.empty();
    for (let username of data.usernames) {
      const userElement = $('<li>').text(username);
      $usernames.append(userElement);
    }
  });
  
  socket.on('login success', function (data) {
    $userEmail.text(data.email); 
  });

  socket.on('login failure', function () {
   
  });
});

socket.on('user login', (data) => {
  
  socket.emit('user login', data);
});

socket.on('empresa login', (data) => {

  socket.emit('empresa login', data);
});

// Manejar el envío de mensajes desde el cliente
document.querySelector('#chat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.querySelector('#message').value;
  const userEmail = 'correo-del-usuario-o-empresa'; // Reemplaza con el correo real
  const data = {
      message,
      userEmail
  };
  socket.emit('send message', data); // Enviar el mensaje y correo al servidor
  document.querySelector('#message').value = ''; // Limpiar el campo de mensaje
});

socket.on('new message', (data) => {
    
   
  const messageContainer = document.querySelector('#messages');
      
     
  const newMessage = document.createElement('div');
      newMessage.innerHTML = `<strong>${data.userEmail}:</strong> ${data.message}`;
      messageContainer.
      message
  
     
  appendChild(newMessage);
  });