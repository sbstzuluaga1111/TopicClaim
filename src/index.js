
// Iniciar Servidor a secas// 
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), () => {
    console.log('El servidor se inició en el puerto ',app.get('port'));
});
// Iniciar Servidor a secas//



const http = require('http');
const path = require('path');

const socketio = require('socket.io');


const server = http.createServer(app);
const io = socketio(server);



require('./sockets')(io);


app.use(express.static(path.join(__dirname, 'public')));



