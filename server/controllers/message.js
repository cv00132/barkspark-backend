const Message = require("../models").Message;
const Chat = require("../models").Chat;
const User = require("../models").User;

module.exports = {

    //route -> /user/:id/messages, returns all messages between currentUser and :id
    // initChat (req, res) {
    //     Chat.create({
    //         senderId: req.user.id,
    //         receiverId:
    //     })
    //     .then(chat => res.status(201).send(chat))
    //     .catch(error => res.status(400).send(error));
    // },

    getChats (req, res) {
        Chat.findAll({
            where: {
                $or: [
                    { senderId: req.user.id },
                    { receiverId: req.user.id }
                ],
            }
            include: [
                // Probably include users here to see the users.
                // Maybe include the _Incoming_ messages so we can see the last message?
                // { model: Message, as: 'Outgoing' },
                { model: Message, as: 'Incoming' },
                { model: User }
            ]
        })
        .then(chat => res.status(201).send(chat))
        .catch(error => {
            console.log(error);
            res.status(400).send(JSON.stringify(error));
        });
        //WHERE chatId LIKE `req.user.id:req.params.id`
    },

    listMessages (req, res) {
        // should be authenticated so have req.user
        Message.findAll({
            where: {
                chatId: req.params.id
            }
        })
        .then(message => res.status(201).send(message))
        .catch(error => res.status(400).send(error));
        //WHERE chatId LIKE `req.user.id:req.params.id`
    },
    //
    // sendMessage (req, res) {
    //     Message.create({
    //         msg: req.body.msg,
    //         senderId: req.user.id,
    //         recipientId: req.params.id,
    //         chatId: req.params.chatId
    //     })
    //     .then(message => res.status(201).send(message))
    //     .catch(error => res.status(400).send(error));
    // },

    deleteMessage (req, res) {
        Message.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(message => res.sendStatus(201).send(message))
        .catch(error => res.status(400).send(error));
    }


}
