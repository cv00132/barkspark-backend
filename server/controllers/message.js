const Message = require("../models").Message;

module.exports = {

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
