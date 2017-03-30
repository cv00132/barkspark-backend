const Comment = require("../models").Comment;

module.exports = {

    addComment (req, res) {
        Comment.create({
            userId: req.params.id,
            photoId: req.body.photoId,
            body: req.body.body
        })
        .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
    }


}
