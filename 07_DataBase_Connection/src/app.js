const express = require('express');

const app = express();

const mongoose = require('mongoose') // requiring mongoose 

// function to connect with the database
// mongoose is a package that is used to connect our server to the database 
function connectToDB(){
    mongoose.connect(/* enter your mongo uri here */)
    .then(()=>{
        console.log("Connected to Database successfully")
    })
}
connectToDB()

module.exports = app;