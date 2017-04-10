const Dog = require("../models").Dog;

module.exports = {

    createDog (req, res) {
        Dog.create({
            name: req.body.name,
            age: req.body.age,
            breed: req.body.breed,
            description: req.body.description,
            picture: req.body.picture,
            userId: req.params.id
        })
        .then(dog => res.status(201).send(dog))
        .catch(error => res.status(400).send(error));
    },

    updateDog (req, res) {
        Dog.update(req.body, {
            where: { userId: req.params.id },
            fields: ['name', 'age', 'breed', 'description', 'picture']
        })
        .then(dog => res.status(201).send(dog))
        .catch(error => res.status(400).send(error))
    },

    removeDog (req, res) {
        Dog.destroy()
        .then(dog => res.sendStatus(201).send(dog))
        .catch(error => res.status(400).send(error))
    }




}
