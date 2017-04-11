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
            Message.create({
                msg: data.msg,
                senderId: data.senderId,
                recipientId: data.recipientId,
                chatId: data.chatId
            })
            .then(message => client.emit('message', `got your message: ` + JSON.stringify(data)));
            // Message.create with chatId, senderId, recipientId, content
            // in the Then, emit back the finished message
        });

        client.on('disconnecting', function(socket){
            console.log(socket);
            console.log(`${client.id} left`);
        });
    });
}
