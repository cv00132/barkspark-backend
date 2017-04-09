const Message = require("../models").Message;

module.exports = {

    addMessage (req, res) {
        Message.create({

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
