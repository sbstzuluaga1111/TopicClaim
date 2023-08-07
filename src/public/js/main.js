$(function () {
  const socket = io();
  const $messageForm = $('#message-form');
  const $messageBox = $('#message');
  const $chat = $('#chat');
  const $usernames = $('#usernames'); 
  const $email_field = $('#email-field');
  const $formatoUser = $('#formatoUser');
  const $userEmail = $('#user-email');



  $formatoUser.submit(e=>{
    e.preventDefault();
    soket.emit('email', $email_field.val(), data => {
      
    });
  });
  
  $email_field.submit(function (e) {
      e.preventDefault();
      const email = $formatoUser.val().trim();
      if (email !== '') {
          socket.emit('user login', { email });
          $userEmail.text(email); 
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
      const messageElement = $('<li>').text(data.message);
      $chat.append(messageElement);
  });

 
  socket.on('update usernames', function (data) {
      $usernames.empty();
      for (let username of data.usernames) {
          const userElement = $('<li>').text(username);
          $usernames.append(userElement);
      }
  });
});

