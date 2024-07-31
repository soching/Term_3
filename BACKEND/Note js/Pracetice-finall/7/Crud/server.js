const express = require('express');
const app = express();
const {v4: uuidv4} = require("uuid");
const {readFileSync, writeFileSync} = require("fs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.listen(process.env.PORT || 3000, ()=>{
    console.log("SERVER IS RUNNING ... !")
})
let items = JSON.parse(readFileSync("database.json"));
app.get("/student", (req, res)=>{
    res.json({status: 200, message: "request successfully", data: items});
})

function save(data){
    writeFileSync("database.json", JSON.stringify(data));
}
app.post("/add", (req, res)=>{
    let newItem = {
        id: uuidv4(),
        title: req.body.title,
        price: req.body.price
    };
    items.push(newItem);
    res.json({status: 200, data: items})
})
app.delete("/delete/:id", (req, res) =>{
    let id = req.params.id;
    items.splice(id, 1);
    save(items);
    res.send({status: 200, message: "Delete successfully"})
})