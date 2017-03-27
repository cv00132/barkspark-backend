// Require your controllers here
const UserController = require('../controllers/user');
const DogController = require('../controllers/dog');


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

    app.post('/:id/addDog', DogController.createDog);


};
