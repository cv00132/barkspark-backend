const Chat = require("../models").Chat;

module.exports = {

    addChat (req, res) {
        Chat.create({

        })
        .then(chat => res.status(201).send(chat))
        .catch(error => res.status(400).send(error));
    },

    deleteChat (req, res) {
        Chat.destroy({
            where: {

            }
        })
        .then(chat => res.sendStatus(201).send(chat))
        .catch(error => res.status(400).send(error));
    }


}
