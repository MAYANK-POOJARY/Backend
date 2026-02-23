// here the server is created and the configurations are done 

const express = require('express');
const noteModel = require("./models/notes.model")
const app = express();

app.use(express.json())

app.post('/api/notes', async (req,res)=>{
    const {title , description } = req.body;
    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        "message" : "The Data is received",
        note
    })
})

app.get('/api/notes', async (req,res)=>{
    const note = await noteModel.find();

    res.status(200).json({
        "message" : "Notes fetched successfully",
        note
    })
})

app.delete("/api/notes/:id", async (req,res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);

    res.status(204).json()
})

app.patch("/api/notes/:id", async (req,res)=>{
    const description = req.body.description;
    const id = req.params.id;
    await noteModel.findByIdAndUpdate(id,{description});

    res.status(200).json({
        "message" : "Updated successfully"
    })
})



module.exports = app;