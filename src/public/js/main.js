$(function() {
    const socket = io();

const $messageForm = $('#message-form');
const $messageBox = $('#message');
const $chat = $('#chat');



const $registroForm = $('#Regis');
const $error = $('#errorRegis');

const $nameUser = $('#name_field');
const $emailUser = $('#email_field');
const $password = $('#password_field');

const $listado = $('#userName')



$registroForm.submit(e => {
socket.emit('newUser', $nameUser.val(), data => {

    }); 
});





$messageForm.submit( e =>{

e.preventDefault();

socket.emit('send message', $messageBox.val());
$messageBox.val('');

});

socket.on('new message', function (data) {
    $chat.append(data + '<br/>');
});

})
