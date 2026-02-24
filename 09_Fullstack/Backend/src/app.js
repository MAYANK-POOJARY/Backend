// server instance creation and configuration is done here

const express = require("express");
const noteModel = require("./models/notes.model");
const cors = require('cors')
const app = express(); // creates and server instance

const path = require('path')
app.use(express.static('./public'))

app.use(express.json());
app.use(cors())

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "The note is created successfully",
  });
});

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes recieved successfully",
    notes,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(204).json();
});

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    'message' : "Updated successfully"
  })
});

// this is a wildcard that is used to display pages if the api is not created 
app.use('*name',(req , res)=>{
  res.sendFile(path.join(__dirname, ".." , "/public/index.html"))
})

module.exports = app;
