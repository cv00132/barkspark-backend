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
    app.get('/users', UserController.getUsers);
    app.get('/user/:id', UserController.getInfo);

    app.post('/:id/addDog', DogController.createDog);

    app.post('/photo', PhotoController.uploadPhoto);

    app.post('/post', PostController.addPost);

    app.post('/photo/:id/comment', CommentController.commentPhoto);
    app.post('/post/:id/comment', CommentController.commentPost);



};
