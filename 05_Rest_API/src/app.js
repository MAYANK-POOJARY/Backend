// This file is used for acquiring the express package and using it in this file, creating a server instance and configuring the server.

const express = require('express'); // fetching the package files

const app = express(); // creating a server instance 

app.use(express.json()) // middleware used so that the express can understand json 

const notes = []; // an array to store the objects

// get method to get the data or resource 
app.get('/notes',(req,res)=>{
    res.send(notes)
})


// post method to post the data or resource 
app.post('/notes',(req,res) =>{
    notes.push(req.body) // push the data received to the array .
    res.send("The note is recieved .");
    console.log(notes)
})

// delete method to delete the data or resource
// params is used when the data is dynmaic and short unlike body where big data is given 
// putting : is mandatory before the dynamic elements 
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index];     // deleting the data base on the index 
    res.send(`The data at index ${req.params.index} is deleted successully .`)
})


// patch method to change a part of the data or resource 
app.patch('/notes/:index',(req,res)=>{
    console.log(req.body)
    notes[req.params.index].desc = req.body.desc; // changing the required data in the stored data or resource 
    res.send("The data is modified")
})


module.exports = app; // exporting the instance to another file 