$(function () {
    const socket = io();

const $messageForm = $('#message-form');
const $messageBox = $('#message');
const $chat = $('#chat');

const $ingresoC = $('#ingresoC');
const $email_field = $('#email_field');
const $password_field = $('#password_field');
const $usernames = $('#usernames');

$ingresoC.submit(e => {
  e.preventDefault(); // Evita el comportamiento predeterminado del envío del formulario
  console.log('enviando..');
});


const $errorLogin = $('#errorLogin');


$messageForm.submit( e =>{

e.preventDefault();

socket.emit('send message', $messageBox.val());
$messageBox.val('');

});

socket.on('new message', function (data) {
    $chat.append(data + '<br/>');
});

})
