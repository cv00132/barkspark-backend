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
//io.listen(3000);

var home = io.of('/');

console.log(home);

home.on('connection', function(socket){
  console.log('someone connected');

  socket.on('disconnecting', function(socket){
      console.log('someone left');
  });
});

home.on("connection", function (socket) {
    var tweet = {user: "nodesource", text: "Hello, world!"};

    // to make things interesting, have it send every second
    socket.emit("tweet", tweet);

    socket.on("disconnect", function () {
        socket.emit('bye',"Goodbye!")
    });
});






// io.sockets.on('connection', function (socket) {
//     console.log("somebody connected! hello world!");
//     console.log(socket.id);
//
//     socket.emit('chat', "Welcome to the chat!");
//
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     })
//
//     socket.on('chat message', function(msg){
//             console.log('message: ' + msg);
//         })
//
// });


//
// io.sockets.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('some event', function(data){
//         console.log(data);
//         socket.emit('event', { some: "data"});
//     })
//     socket.on('chat message', function(msg){
//             console.log('message: ' + msg);
//     })
// })

// Sending a private message to User using socketId
//  socket.to(<socketid>).emit('hey', 'I just met you');
