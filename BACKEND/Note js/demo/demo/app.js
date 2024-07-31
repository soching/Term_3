const cors = require("cors");
const express = require("express");
const app = express();
//catch values from function
const fs = require("fs");
const PORT =3000;
// conect backend with frontend
app.use(express.static("public"));
app.use(cors({origin:"*"}));
let data = JSON.parse(fs.readFileSync("database.json"));
// console.log(data);
app.listen(PORT,(e)=>{
    console.log("server is running")
})

app.get("/students",(req,res)=>{
    res.json({status:200,message:"Request successfully", data:data});
})