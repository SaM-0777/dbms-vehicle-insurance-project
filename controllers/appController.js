// const Query = require('../models/userModel.js');

const { query } = require("express");

const home = (req, res) => {
    res.status(200).render('index')
};

const getProfile = (req, res) => {
    res.status(200).json({ profile: req.oidc.user })
};

const blog = (req, res) => {
    res.status(200).render('blog')
};

const getCities = (req, res) => {
    res.status(200).json(query)
};




module.exports = {
    home,
    getProfile,
    blog,
    getCities,
};

