const Match = require("../models").Match;
const User = require("../models").User;
const Chat = require("../models").Chat;

module.exports = {

    requestMatch (req, res) {
        Match.create({
            senderId: req.user.id,
            recipientId: req.params.id,
            accepted: false
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error));
    },

    acceptMatch (req, res) {
        // Model.update(Object, options) // object is key value pairs
        Match.update({
            accepted: true
        }, {
            where: { id: req.params.id }
        })
        .then(match => {
            Chat.create({
                receiverId: Match.recipientId,
                senderId: Match.senderId
            })
            .then(chat => res.status(201).send(chat))
        })
        .catch(error => res.status(400).send(error))
    },

    deleteMatch (req, res) {
        Match.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(match => res.sendStatus(201).send(match))
        .catch(error => res.status(400).send(error))
    }


}
