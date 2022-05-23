const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET);
        res.status(200).send({ user: newUser.username, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({ users })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message })
    }
};

exports.login = async (req, res) => {
    try {
        const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
        //only want to send back username back and not email and or password for security reasons!
        res.status(200).send({ user: req.user.username, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
}