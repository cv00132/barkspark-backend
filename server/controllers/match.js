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
            where: {
                id: req.params.id,
                //recipientId: req.user.id
             },
             returning: true
        })
        .spread((count, match) => {
            // if (count === 1) {
            //     // create a chat and send it
            // } else {
            // res.status(403).send({ message: '})
            //     // something has gone wrong or not your user or something
            // }
            console.log("match is ", match[0]);
            console.log(match[0].senderId);
            console.log(match[0].get('senderId'));
            Chat.create({
                receiverId: match[0].recipientId,
                senderId: match[0].senderId
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
