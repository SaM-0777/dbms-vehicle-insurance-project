const authRouter = require('express').Router();

const { login, logout, signUp } = require('../controllers/authController.js');


authRouter.get('/login', login);
authRouter.get('/logout', logout);
authRouter.get('/signup', signUp);


module.exports = authRouter;

