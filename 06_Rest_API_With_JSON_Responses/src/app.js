const express = require('express');
const app = express();

app.use(express.json()) // middleware so that the express use to create the server understands the data 

const notes = [];

app.get('/notes',(req,res)=>{
    // 200 is for succesfull response
    res.status(200).json({
        "notes" : notes
    })
})

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    //201 is for successfull creation of resource
    res.status(201).json({
        "message" : "The note is recieved"
    })
})

app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index];
    // 204 is for successfull deletion of resource 
    res.status(204).json()
})

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].desc = req.body.desc
    // 200 for succesfull changes in the data
    res.status(200).json({
        "message" : "Data modified succesfully"
    })
})

module.exports = app ;