const Match = require("../models").Match;

module.exports = {

    requestMatch (req, res) {
        Match.create({
            senderId: req.body.senderId,
            recipientId: req.params.id,
            accepted: false
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error));
    },

    acceptMatch (req, res) {
        Match.update(req.body, {
            where: { recipientId: req.params.id },
            fields: ['accepted']
        })
        .then(match => res.status(201).send(match))
        .catch(error => res.status(400).send(error))
    }


}
