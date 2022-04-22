const query = require('../models/userModel.js');

const home = (req, res) => {
    res.status(200).render('index')
};

const blog = (req, res) => {
    res.status(200).render('blog')
};

const getCities = (req, res) => {
    res.status(200).json({ message: 'success' })
};




module.exports = {
    home,
    blog,
    getCities,
};

