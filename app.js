const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./server/routes');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add our routes to the app.
routes(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));


/*Sockets.io chat setup
const server = require('http').Server(app)
const io = require('socket.io')(http);
app.get('/', function (req, res) {
    res.sendFile(bark-spark + '/index.html');
});
http.listen(3000, () => {
    console.log('listening on *:3000')
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

// Sending a private message to User using socketId
  socket.to(<socketid>).emit('hey', 'I just met you');
*/


module.exports = app;
