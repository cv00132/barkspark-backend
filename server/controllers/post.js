const Post = require("../models").Post;

module.exports = {

    addPost (req, res) {
        Post.create({
            userId: req.params.id,
            photoUrl: req.body.photoUrl,
            body: req.body.body
        })
        .then(post => res.status(201).send(post))
        .catch(error => res.status(400).send(error));
    },

    deletePost (req, res) {
        Post.destroy()
        .send(res.status(201))
        .catch(error => res.status(400).send(error));
    }


}
