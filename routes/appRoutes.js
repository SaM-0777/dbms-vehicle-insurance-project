const appRouter = require('express').Router();

const { home, blog } = require('../controllers/appController.js');


appRouter.get('/', home);
appRouter.get('/blog', blog);

module.exports = appRouter;
