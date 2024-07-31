const express = require("express");
const app = express();

app.listen(3000,() =>{
    console.log("listening onport 3000");
});

app.get("/bobo",(req,res) =>{
    res.send("Hello it's ronan")
});