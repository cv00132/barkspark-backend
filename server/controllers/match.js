const Match = require("../models").Match;
const User = require("../models").User;

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
        Match.update({
            accepted: req.body.accepted,
            //senderId: Sender.id,
            recipientId: req.user.id,
            include: [
                { model: User, as: 'Sender',
                    attributes: [
                        'id',
                        'username',
                        'profilePic'
                    ]
                },
                { model: User, as: 'Recipient',
                    attributes: [
                        'id',
                        'username',
                        'profilePic'
                    ]
                }
            ]
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error))
    }


}
