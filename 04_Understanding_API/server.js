const express = require('express'); // here the package is imported from the node_modules

const server = express(); // here the server instance is created

server.use(express.json()) // this is a middleware as express is not that capable of understanding json on it own so a middleware is used to help it decode

const notes = [] // array to store the data received from the client

server.get('/',(req,res)=>{
    res.send(notes) // to display the received data
})

server.post('/',(req,res)=>{
    console.log(req.body) // here the data recived from the client is displayed 
    notes.push(req.body) // here the data is pushed to the array 
    res.send("recieved") // response for successful recieve 
})


server.listen(3000,()=>{
    console.log("The server is running on Port 3000"); // to display when the port is ready to use 
}) 