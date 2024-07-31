const express = require('express');
const app = express();
const PORT = 3000;
const fs =require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let data = JSON.parse(fs.readFileSync('database.json'));

function save(){
    fs.writeFileSync('database.json',JSON.stringify(data));
}

app.listen(PORT,()=>{
    console.log('server is running');
})
//get valuse
app.get('/student',(req,res)=>{
    res.json({status:200 ,message:'server is successfully',data:data});
})

//create---------
app.post('/create/add',(req,res)=>{
    let listStudent = req.body;
    data.push(listStudent);
    save();
    res.json({status:200,message:'create is success',data:data});
})

//delete-----------
