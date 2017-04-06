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
            fields: ['accepted'],
            accepted: true,
            include: [
                { model: User, as: 'Sender',
                    attributes: [
                        'username',
                        'profilePic'
                    ]
                },
                { model: User, as: 'Recipient',
                    attributes: [
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
