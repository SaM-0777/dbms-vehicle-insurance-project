const login = (req, res) => {
    res.status(200).json({ message: 'Log in' })
};

const logout = (req, res) => {
    res.status(200).json({ message: 'Log out' })
};

const signUp = (req, res) => {
    res.status(200).json({ message: 'Sign Up' })
}


module.exports = {
    login,
    logout,
    signUp
}

