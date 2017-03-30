const Newsfeed = require("../models").Newsfeed;

module.exports = {

    createNewsfeed (req, res) {
        Newsfeed.create({
            userId: req.user.id,
        })
        .then(newsfeed => res.status(201).send(newsfeed))
        .catch(error => res.status(400).send(error));
    }

}
