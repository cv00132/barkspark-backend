const Dog = require("../models").Dog;

module.exports = {

    createDog (req, res) {
        Dog.create({
            name: req.body.name,
            age: req.body.age,
            breed: req.body.breed,
            description: req.body.description,
            picture: req.body.picture,
            userId: req.body.id
        })
        .then(dog => res.status(201).send(dog))
        .catch(error => res.status(400).send(error));
    }


}
