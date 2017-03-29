// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require('../controllers/user');
const DogController = require('../controllers/dog');
const PhotoController = require('../controllers/photo');
const PostController = require('../controllers/post');
const CommentController = require('../controllers/comment');


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

    //DELETE BEFORE PRODUCTION
    app.get('/getusers', UserController.getUsersDev);

    app.get('/users', UserController.getUsers);
    app.get('/user/:id', UserController.getInfo);
    app.put('/user/:id', middleware.authenticate, UserController.updateUser);


    app.post('/addDog', middleware.authenticate, DogController.createDog);

    app.post('/photo', middleware.authenticate, PhotoController.uploadPhoto);

    app.post('/post', middleware.authenticate, PostController.addPost);

    app.post('/photo/:id/comment', middleware.authenticate, CommentController.commentPhoto);
    app.post('/post/:id/comment', middleware.authenticate, CommentController.commentPost);



};
