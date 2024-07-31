const express = require('express');
const app = express();
const fs = require('fs');

const cors = require("cors");
// const { stringify } = require('querystring');

const PORT = 3000;

app.use(express.static("public"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded());
app.use(express.json());
function save(){
    fs.writeFileSync("database.json" , JSON.stringify(data));

}
let data = JSON.parse(fs.readFileSync("database.json"));

console.log(data);
app.listen(PORT, (e) => {
    console.log('running app')
})

app.get("/students", (req, res) => {
    res.json({ status: 200, message: "Resquest successfully", data: data });
})

app.post("/student/create", (req, res) => {
    let student = req.body;
    data.push(student);
    save();
    res.json({status: 200, message: "student crated", student: student });
})
app.delete("/student/delete/:id",(req,res)=>{
    let id=req.params.id;
    if(data.length>id){
        data.splice(id,1);
        save();
        res.json({status:200,massage:"Student delete succesfully"})
    }

})