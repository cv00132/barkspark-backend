const User = require('../models').User;
const Dog = require('../models').Dog;
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Match = require('../models').Match;
const Tag = require('../models').Tag;
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
                    { model: Dog,
                       attributes: [
                           'id',
                           'name',
                           'picture',
                           'age',
                           'breed',
                           'description'
                       ]
                   },
                   { model: Tag },
                   { model: Post },
                   { model: Match, as: 'Received',
                        include: [
                            { model: User, as: 'Sender',
                                attributes: [
                                    'id',
                                    'username',
                                    'profilePic'
                                ]
                            }]
                    },
                    { model: Match, as: 'Sent',
                        include: [
                            { model: User, as: 'Recipient',
                                attributes: [
                                    'id',
                                    'username',
                                    'profilePic'
                                ]
                            }
                        ]
                    }
                ],
               attributes: [
                   'id',
                   'username',
                   'location',
                   'description',
                   'profilePic'
               ]
           })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
       },

       getUsers (req, res) {
           User.findAll({
               include: [{
                   model: Dog,
                   attributes: [
                       'name',
                       'picture'
                   ]
               }],
               attributes: [
                   'id',
                   'username',
                   'profilePic',
                   'location'
               ]
           })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
       },

       updateUser (req, res) {
           User.update(req.body, {
               where: { id: req.params.id },
               fields: ['description', 'location', 'profilePic']
           })
           .then(user => res.status(201).send(user))
           .catch(error => res.status(400).send(error))
       }
}
