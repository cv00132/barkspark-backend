// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require('../controllers/user');
const DogController = require('../controllers/dog');
const PostController = require('../controllers/post');
const CommentController = require('../controllers/comment');
const MatchController = require('../controllers/match');
const TagController = require('../controllers/tag');
const MessageController = require('../controllers/message');


module.exports = (app) => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
        next();;
    });

  // Add your routes here
    app.post('/signUp', UserController.createUser);
    app.post('/login', UserController.login);

    app.get('/users', UserController.getUsers);
    app.get('/user/:id', UserController.getInfo);
    app.put('/user/:id', middleware.authenticate, UserController.updateUser);


    app.post('/:id/addDog', middleware.authenticate, DogController.createDog);
    app.put('/:id/editDog', middleware.authenticate, DogController.updateDog);
    app.delete('/:id/removeDog', middleware.authenticate, DogController.removeDog);

    app.post('/:id/post', middleware.authenticate, PostController.addPost);
    app.delete('/:id/post', middleware.authenticate, PostController.deletePost)

    app.post('/post/:id/comment', middleware.authenticate, CommentController.addComment);

    app.post('/user/:id/match', middleware.authenticate, MatchController.requestMatch);
    app.put('/user/:id/match', middleware.authenticate, MatchController.acceptMatch);
    app.delete('/user/:id/match', middleware.authenticate, MatchController.deleteMatch);

    app.post('/tag', middleware.authenticate, TagController.addTag);

    app.post('/chat', middleware.authenticate, MessageController.sendMessage);
};
