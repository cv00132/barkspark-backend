const Tag = require("../models").Tag;

module.exports = {

    addTag (req, res) {
        Tag.create({
            tag: req.body.tag,
            userId: req.user.id
        })
        .then(tag => res.status(201).send(tag))
        .catch(error => res.status(400).send(error));
    }
}
