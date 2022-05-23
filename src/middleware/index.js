const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../user/userModel");


exports.hashPass = async (req, res, next) => {
    try {
        // Salt round - 8 is a numerical value that affects how the hashing algorithm works
        req.body.password = await bcrypt.hash(req.body.password, 8);
        // Without the next() function, the funciton will never stop running, it won't send a response
        next();
    } catch (error) {
        console.log (error);
        res.status(500).send({error: error.message});
    }
};

exports.unHashPass = async (req, res, next) => {
    try {
        //creating new key in request object, finding a user
        //reminder - with object syntax if we want to create a new key(k:v pair) we don't need to use variable keyword
        req.user =await User.findOne({ username: req.body.username });
        if ( req.user && 
            //with bcrypt, compare requested pass in body of searched user with req user pass
            (await bcrypt.compare(req.body.password, req.user.password))
        ) {
            next(); 
        } else {
            //throw keyword is used to force error, so it doesn't move to next function
            throw new Error("Incorrect credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message })
    }
};

//was exports.decrypt
exports.tokenCheck = async (req, res, next) => {
    try {
        const token = req.header("Authorization")
        const decodedToken = await jwt.verify(token, process.env.SECRET);
        //req.user is creating user field in request object
        // req.user = await User.findOne({ _id: decodedToken._id });
        req.user = await User.findById(decodedToken._id);
        if (req.user) {
            next();
        } else {
            throw new Error("Invalid token");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
}