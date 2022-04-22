const express = require('express');
const path = require('path');

const logger = require('./middleware/logMiddleware.js');
const appRoutes = require('./routes/appRoutes.js');
const { error } = require('console');


const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(logger);

// routes
app.use(appRoutes);

// set the view engine to ejs
app.set('view engine', 'ejs');

// static folders
// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

