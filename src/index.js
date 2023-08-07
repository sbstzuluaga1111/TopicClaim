const http = require('http');
const app = require('./server');
const socketio = require('socket.io');
const dotenv = require('dotenv').config();

const server = http.createServer(app);
const io = socketio(server);

require('./sockets')(io);
require('./database');

server.listen(app.get('port'), () => {
    console.log('El servidor se inició en el puerto ', app.get('port'));
});

