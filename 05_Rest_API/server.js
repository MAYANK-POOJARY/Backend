// This file is used for starting the server instance

const app = require("./src/app.js"); // fetching the server instance from another file 

app.listen(3000, ()=>{
    console.log('The server is running on port 3000.');
})