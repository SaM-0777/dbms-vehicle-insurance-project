const appRouter = require('express').Router();

const { auth, requiresAuth } = require('express-openid-connect');
const { home, getProfile, blog, getCities } = require('../controllers/appController.js');


appRouter.get('/', home);
appRouter.get('/profile', requiresAuth(), getProfile);
appRouter.get('/blog', blog);
appRouter.get('/cities', getCities);

module.exports = appRouter;

