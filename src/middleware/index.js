const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
    try {
        // Salt round - 8 is a numerical value that affects how the hashing algorithm works
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        // Without the next() function, the funciton will never stop running, it won't send a response
        next();
    } catch (error) {
        console.log (error);
        res.status(500).send({error: error.message});
    }
};