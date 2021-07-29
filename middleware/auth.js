const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateJWT = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (authHeader) {
        console.log(typeof(authHeade))
        const token = authHeader.split(' ')[1];
        console.log(token)
        jwt.verify(token, process.env.secretKey, async (err, user) => {

            if (err) {
                console.log(err)
                return res.status(403).send({msg: 'forbidden'});
            }
            await User.findOne({ email: user.user })
                .then(userresult => {
                    req.user = userresult;
                    console.log(req.user);

                })
                .catch(err => {
                    console.log(err);
                })
            next();
        });
    } else {
        res.status(401).send({msg: 'unauthorized'});
    }
};

module.exports = authenticateJWT;