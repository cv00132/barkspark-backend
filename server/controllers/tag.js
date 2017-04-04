const Tag = require("../models").Tag;

module.exports = {

    addTag (req, res) {
        Tag.create({ tag: req.body.tag })
            .then(Tag.findOrCreate({
                    where: {
                        text: Tag.tag
                    }
                })
                .spread(function(tags, created) {
                    tags.get({
                        plain: true
                    })
                })
            )
            .then(created => res.status(201).send(created))
            .catch(error => res.status(400).send(error));
        }

    // createTag (req, res) {
    //
    // Tags.create({ text: req.body.text })
    //     .then(Tags.findOrCreate({
    //             where: {
    //                 text: Tags.text
    //             }
    //         })
    //         .spread(function(tags, created) {
    //             tags.get({
    //                 plain: true
    //             })
    //         })
    //     )
    //     .then(created => res.status(201).send(created))
    //     .catch(error => res.status(400).send(error));
    // },
}
