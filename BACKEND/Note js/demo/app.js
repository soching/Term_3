const cors = require("cors");
const express = require("express");
const app = express();
//catch values from function
const fs = require("fs");
const PORT = 2000;
// conect backend with frontend
app.use(express.static("public"));
app.use(cors({ origin: "*" }));
//get values from databases
app.use(express.urlencoded());
app.use(express.json());
let data = JSON.parse(fs.readFileSync("database.json"));
app.listen(PORT, (e) => {
    console.log("server is running")
})
function save(){
    res.json({ status: 200, message: "student created", student: student });
}

console.log(data);
app.get("/student", (req, res) => {
    res.json({ status: 200, message: "Request successfully", data: data });
})
// back-end
app.post("/student/create", (req, res) => {
    let student = req.body;
    data.push(student);
    fs.writeFileSync("database.json", JSON.stringify(data));
    res.json({ status: 200, message: "student created", student: student });
})

app.delete("student/delete/:id",(req,res)=>{
    let id = req.params.id;
    if(data.length > id){
        data.spslice(id,1);
        save();
        res.json({ status: 200, message: "student delete successfully"});
    }else{
        res.json({ status: 200, message: "student delete not found"});

    }
});