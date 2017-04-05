// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port', port);
const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(port);

// server.on('upgrade', function () {
//     console.log('attempting to upgrade...')
// })

//Sockets.io chat setup
// io.listen(server);

io.on('connection', function (socket) {
    console.log("somebody connected! hello world!");
    //var socket = new io.Socket();

    socket.emit('chat', "Welcome to the chat!");

    io.on('chat', (data) => {
        console.log(`socket says: ${data.message}`)
        socket.emit('chat', 'got your message!');
    });

    io.on('disconnect', () => {
        console.log('user disconnected');
    })
})

//
// io.sockets.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('some event', function(data){
//         console.log(data);
//     // socket.emit('event', { some: "data"});
//     //     // socket.on('chat message', function(msg){
//     //     //     console.log('message: ' + msg);
//     })
// })

// Sending a private message to User using socketId
//  socket.to(<socketid>).emit('hey', 'I just met you');
