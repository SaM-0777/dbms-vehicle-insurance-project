const appRouter = require('express').Router();

const { home, blog, getCities } = require('../controllers/appController.js');


appRouter.get('/', home);
appRouter.get('/blog', blog);
appRouter.get('/cities', getCities);

module.exports = appRouter;

