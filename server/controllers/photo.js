const Photo = require("../models").Photo;

module.exports = {

    uploadPhoto (req, res) {
        Photo.create({
            userId: req.user.id,
            photoUrl: req.body.photoUrl,
            caption: req.body.caption
        })
        .then(photo => res.status(201).send(photo))
        .catch(error => res.status(400).send(error));
    }


}
