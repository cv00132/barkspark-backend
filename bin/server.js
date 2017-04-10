// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port', port);
const server = http.createServer(app).listen(port);
const io = require('socket.io');

// io.use(function(socket, next){
//   if (socket.request.headers.cookie) return next();
//   next(new Error('Authentication error'));
// });

var chat = io.listen(server).of('/');


//console.log(chat);

//var users = [];

chat.on('connection', function(client){
    console.log('someone connected');
    console.log(client.id);

    chat.clients(function(error, clients){
      if (error) throw error;
      console.log(clients);
    });

    client.on('message', (data) => {
        console.log('got some data', data);
        client.to(client.id).emit('message', `got your message: ` + data);
    })

    client.on('disconnecting', function(socket){
        console.log(socket);
        console.log(`${client.id} left`);
    });
});

// Sending a private message to User using socketId
//  socket.to(<socketid>).emit('hey', 'I just met you');
