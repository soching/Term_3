const express = require('express');
const app =express();
const PORT = 8000;
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let data = JSON.parse(fs.readFileSync('database.json'));

function save(){
    fs.writeFileSync('database.json',JSON.stringify(data));
}


app.listen(PORT,()=>{
    console.log('server is running');
})

app.use(express.static("public"));

app.get('/student',(req,res)=>{
    res.json(data);
})
//create-------
app.post('/create/student',(req,res)=>{
    let studentName = req.body;
    data.push(studentName);
    save();
    res.json({status:200,message:"successfully",data:data})
});                 