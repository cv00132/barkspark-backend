const Match = require("../models").Match;
const User = require("../models").User;

module.exports = {

    requestMatch (req, res) {
        Match.create({
            senderId: req.user.id,
            recipientId: req.params.id,
            accepted: false,
            // include: {
            //     model: User,
            //     where: { id: req.user.id },
            //     attributes: [
            //         'username'
            //     ]
            // }
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error));
    },

    acceptMatch (req, res) {
        Match.update(req.body, {
            where: { recipientId: req.params.id },
            fields: ['accepted'],
            accepted: true,
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error))
    }


}
