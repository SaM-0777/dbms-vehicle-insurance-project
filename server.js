const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { auth } = require('express-openid-connect');

const logger = require('./middleware/logMiddleware.js');
const appRoutes = require('./routes/appRoutes.js');
const authRoutes = require('./routes/authRoutes.js');


require('dotenv').config({ path: './config/.env' });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// auth configuration
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};
app.use(auth(config));

// middlewares
app.use(logger);

// routes
app.use(appRoutes);
app.use('/auth', authRoutes);

// set the view engine to ejs
app.set('view engine', 'ejs');

// static folders
// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
