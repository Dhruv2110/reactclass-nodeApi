const express = require("express");
const bodyParser = require("body-parser");
const Routes = express.Router();
const Token = require('../models/token')
const User = require("../models/user");
var nodemailer = require('nodemailer');
const authenticate = require('../middleware/auth');
const jwt = require('jsonwebtoken');

Routes.get("/", (req, res, next) => {
    var obj = [
        {
            Name:"Aman",
            Age:21
        },
        {
            Name:"Rahul",
            Age:25
        }
    ]
    res.json(obj)
});

Routes.post("/signup",async (req, res, next) => {

    var data = req.body
    //console.log(data)
    const _data = User(data);
    const result = await _data.save();
    if(result)
    {
        return res.json({msg:"saved succesfully"})
    }
    return res.json({code:-1})
});

Routes.post("/signin",async (req, res, next) => {

    const { email, password } = req.body;
    console.log(email,password)
    let user = await User.findOne({ email: email })
    if (!user) {
        return res.status(403).send({ msg: "User does not exists!", status: 400, code: -1 })
    }

    // const isMatch = await bcrypt.compare(password, user.password)
    // if (!isMatch) {
    //     return res.status(403).send({ msg: "Incorrect password!", status: 400, code: -2 })
    // }

    const accessToken = jwt.sign({ user: user.email }, process.env.secretKey, { expiresIn: '7d' })
    const refreshToken = jwt.sign({ user: user.email }, process.env.secretKey)

    const newToken = new Token({
        refreshToken
    })
    await newToken.save()


    res.status(200).send({
        user: {
            email: user.email
        },
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiresIn: '10m',
        code: 1
    })
});



Routes.post("/add", authenticate,(req, res, next) => {
    res.json({msg:"Autheticated Sucessfully"})

    // var data = req.body
    // //console.log(data)
    // const _data = User(data);
    // const result = await _data.save();
    // if (result) {
    //     return res.json({ msg: "saved succesfully" })
    // }
    // return res.json({ code: -1 })
});



module.exports = Routes;