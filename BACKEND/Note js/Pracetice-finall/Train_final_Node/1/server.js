const express = require('express');
const { readFileSync } = require('fs');
const app = express();
const PORT = 3000;
const fs = require('fs');
app.use(express.json());

let data = JSON.parse(readFileSync('database.json'));

function save(){
    fs.writeFileSync('database.json',JSON.stringify(data));
}
app.listen(PORT,()=>{
    console.log('my server is running');
})

app.get('/students',(req,res)=>{
    res.json({status:200,message:"you are get all students",data:data});
})
//create=========
app.post('/create/student',(req,res)=>{
    let studentName = req.body;
    data.push(studentName);
    save();
    res.json({status:200,message:"you are create all students",data:data});
})
//delete=========
app.delete('/delete/student/:id',(req,res)=>{
    let id = req.params.id;
    if(data.length > id){
        data.splice(id,1);
        save();
        res.json({status:200,message:"you are delete all students",data:data});
    }else{
        res.json({status:200,message:"you are not delete all students",data:data});
    }
})
//updata==========
app.put('/update/student/:id',(req,res)=>{
    let id = req.params.id;
    let studentList = req.body;
    if(data.length > id){
        let allStudent = {...studentList};
        data[id]=allStudent;
        save();
        res.json({status:200,message:"you are upadate all students",data:data});
    }else{
        res.json({status:200,message:"you are not upadate all students",data:data});
    }
})