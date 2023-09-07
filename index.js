const express = require('express');
const route = require("./src/route")
const app = express();


const port = 2000;
// connect to server
app.listen( port , ()=>{
    console.log("App connected to server on port 2000")
    
})

app.use("/", route)

