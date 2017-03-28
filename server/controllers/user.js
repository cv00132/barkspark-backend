const User = require('../models').User;
const Dog = require('../models').Dog;
const Post = require('../models').Post;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require('../config/secrets');

module.exports = {

    createUser (req, res) {
      let salt = bcrypt.genSaltSync(10);
      let hashedPass = bcrypt.hashSync(req.body.password, salt);
      User.create({
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
          salt: salt,
          DOB: req.body.birthday,
          description: req.body.description,
          location: req.body.location,
          profilePic: req.body.profilePic
     })
     .then(user => res.status(201).send(user))
     .catch(error => res.status(400).send(error));
    },

    login (req, res) {
        User.findOne({
          where: {
            email: req.body.email
          }
        })
          .then(user => {
            if (!user) {
              return res.status(401).send({ message: "No such email or wrong password." })
            }

            var input = bcrypt.hashSync(req.body.password, user.salt);
            if (input === user.password) {
              var token = jwt.encode({ id: user.id, name: user.username }, appSecrets.jwtSecret);
              var json = {
                 user: user,
                 token: token
               };
               return res.status(200).send(json);
            } else {
              return res.status(401).send({ message: "No such email or wrong password." })
            }
          })
           .catch(error => res.status(400).send(error));
       },

       getInfo (req, res) {
           User.findOne({
               where: {
                   id: req.params.id
               },
               include: [
                  { model: Dog },
                  { model: Post }
              ]
           })
           .then(user => res.status(201).send(user))
           .catch(error => res.status(400).send(error))
       },

       getUsers (req, res) {
           User.findAll()
               .then(user => res.status(201).send(user))
               .catch(error => res.status(400).send(error))
       }
}
