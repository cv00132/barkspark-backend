const Chat = require("../models").Chat;
const Message = require("../models").Message;

module.exports = (io) => {
    io.on('connection', function(client){
        console.log('someone connected');
        console.log(client.id);

        io.clients(function(error, clients){
          if (error) throw error;
          console.log(clients);
        });

        client.on('message', (data) => {
            //console.log('got some data', data);
            client.emit('message', `got your message: ` + JSON.stringify(data));
        })

        client.on('disconnecting', function(socket){
            console.log(socket);
            console.log(`${client.id} left`);
        });
    });
}
