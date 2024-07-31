const express = require('express');
const app = express();
const PORT = 3000;
const fs =require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))

let data = JSON.parse(fs.readFileSync('database.json'));

function save(){
    fs.writeFileSync('database.json',JSON.stringify(data));
}

app.listen(PORT,()=>{
    console.log('server is working');
})
  
app.get('/student',(req,res)=>{
    res.json({status:200, message:"getting is success", data:data});
})
//create--------------
app.post('/create/student',(req,res)=>{
    let studentName = req.body;
    data.push(studentName);
    save();
    res.json({status:200, message:"you created ", data:data});
})
//delete--------------
app.delete('/delete/student/:id',(req,res)=>{
    let id = req.params.id;
    if(data.length > id){
        data.splice(id,1);
        save();
        res.json({status:200, message:"delete is success", data:data});
    }else{
        res.json({status:200, message:"delete isn't success", data:data});
    }
})
//update--------------
app.put('/update/student/:id',(req,res)=>{
    let listName = req.params.id;
    let name = req.body;
    if(data.length > listName){
        let students = {...name};
        data[listName]=students;
        save();
        res.json({status:200, message:"update is success", data:data});
    }else{
        res.json({status:200, message:"update isn't success", data:data});
    }
})