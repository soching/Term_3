const express = require('express');
const { readFileSync } = require('fs');
const app = express();
const PORT =3000;
const fs = require('fs');
//before created you must write this syntax
app.use(express.json());

let data = JSON.parse(readFileSync('databases.json'));

function save(){
    fs.writeFileSync('databases.json',JSON.stringify(data));
}

app.listen(PORT,()=>{
    console.log('server is running');
})

app.get('/users',(req,res)=>{
    res.json({status:200, message:"getting is succussfully",data:data});
})
//create===============
app.post('/create/user',(req,res)=>{
    let username = req.body;
    data.push(username);
    save();
    res.json({status:200, message:"create is succussfully",data:data});
})
//delete==============
app.delete('/delete/user/:id',(req,res)=>{
    let id = req.params.id;
    if(data.length > id){
        data.splice(id,1);
        save();
        res.json({status:200, message:"delete is succussfully",data:data});
    }
})
//updat===============
app.put('/updat/user/:id',(req,res)=>{
    let id = req.params.id;
    let names = req.body;
    if(data.length > id){
        let Allusers = {...names};
        data[id]=Allusers;
        save();
        res.json({status:200, message:"updat is succussfully",data:data});
    }
})