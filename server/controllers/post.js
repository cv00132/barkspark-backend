const Post = require("../models").Post;

module.exports = {

    addPost (req, res) {
        Post.create({
            userId: req.user.id,
            body: req.body.body
        })
        .then(post => res.status(201).send(post))
        .catch(error => res.status(400).send(error));
    }


}
