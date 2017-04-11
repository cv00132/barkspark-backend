// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app).listen(port);

// Now we'll wire up our Websocket server with socket.io
const io = require('socket.io');
var socketServer = io.listen(server).of('/');
const chatController = require("../server/controllers/chat");
chatController(socketServer);
