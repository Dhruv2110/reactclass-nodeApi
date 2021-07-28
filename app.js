const express = require("express");
const app = require('express')();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes")
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userRoutes);

//console.log(session);
mongoose.connect(uri, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).
  then(result => {
    console.log("DB Connected!");
    app.listen(PORT, () => {
      console.log("App Is Running On 8000.");
    })
  }).
  catch(err => {
    console.log(err);
  });


