const Comment = require("../models").Comment;

module.exports = {

    commentPhoto (req, res) {
        Comment.create({
            userId: req.user.id,
            photoId: req.params.id,
            body: req.body.body
        })
        .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
    },

    commentPost (req, res) {
        Comment.create({
            userId: req.user.id,
            postId: req.params.id,
            body: req.body.body
        })
        .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
    }


}
