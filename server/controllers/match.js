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
        Match.update(req.body, {
            where: { id: Match.id },
            fields: ['accepted'],
            accepted: true
        })
        .then(match => {
            Chat.create({
                receiverId: match.recipientId,
                senderId: match.senderId
            })
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error))
    },

    deleteMatch (req, res) {
        Match.destroy({
            where: {
                recipientId : req.params.id,
                //id: req.params.id
            }
        })
        .then(match => res.sendStatus(201).send(match))
        .catch(error => res.status(400).send(error))
    }


}
