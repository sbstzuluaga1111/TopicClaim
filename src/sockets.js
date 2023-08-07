module.exports = function (io){

    io.on('connection', socket => {
        console.log('Usuario conectado');

        socket.on('send message', function (data){
            io.sockets.emit('new message', data);
        });

    });
}

