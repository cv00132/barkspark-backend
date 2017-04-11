const Message = require("../models").Message;

module.exports = {

    // route -> /user/:id/messages, returns all messages between currentUser and :id
    // listMessages (req, res) {
    //     // should be authenticated so have req.user
    //     // Messages. WHERE chatId LIKE `req.user.id:req.params.id`
    //
    // },

    sendMessage (req, res) {
        Message.create({
            msg: req.body.msg,
            senderId: req.user.id
        })
        .then(message => res.status(201).send(message))
        .catch(error => res.status(400).send(error));
    },

    deleteMessage (req, res) {
        Message.destroy({
            where: {

            }
        })
        .then(message => res.sendStatus(201).send(message))
        .catch(error => res.status(400).send(error));
    }


}
