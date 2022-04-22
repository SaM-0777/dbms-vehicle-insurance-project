const home = (req, res) => {
    res.status(200).render('index')
};

const blog = (req, res) => {
    res.status(200).render('blog')
};




module.exports = {
    home,
    blog,
};

