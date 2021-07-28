const express = require("express");
const fns = require("../models/fancynumbers");
const categoriesSch = require("../models/categories");
const bodyParser = require("body-parser");
const Routes = express.Router();
const User = require("../models/user");
var nodemailer = require('nodemailer');

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
    res.status(404).json(obj)
});

Routes.post("/add", (req, res, next) => {

    var data = req.body
    console.log(data)
    res.json({data:data})
});

Routes.post("/add/:id", (req, res, next) => {

    var data = req.params
    res.json({id:data})
});



module.exports = Routes;