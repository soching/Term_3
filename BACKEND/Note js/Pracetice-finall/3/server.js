const express = require('express');
const app =express();
const PORT = 3000;
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let data = JSON.parse(fs.readFileSync('database.json'));


//-------take values from thunderclient to file database.json
function save(){
    fs.writeFileSync('database.json',JSON.stringify(data));
}


app.listen(PORT,()=>{
    console.log('server is running ');
})

//-------only get values form database--------
app.get('/student',(req,res)=>{
})

//-------create--before create you must requre two such as app.use(express.json()) and app.use(express.urlencode({exteded: false})-----------
app.post('/creat/add',(req,res)=>{
    let listStudents = req.body;
    data.push(listStudents);
    save();
    res.json({status:200 ,message:'students add is success', data:data});
})

//-----delete
app.delete('/student/delete/:id',(req,res)=>{
    let id = req.params.id;
    if(data.length > id){
        data.splice(id,1);
        save();
        res.json({status:200 ,message:'students delete is success', data:data});
    }else{
        res.json({status:200 ,message:'mix kr delete min kert ', data:data});
    }
})

// update-----------
app.put('/student/upadet/:id',(req,res)=>{
    let id = req.params.id;
    let student = req.body;
    if(data.length > id){
        let studentName ={...student};
        data[id]=studentName;
        save();
        res.json({status:200 ,message:'update is success', data:data});
    }else{
        res.json({status:200 ,message:'update is nod success', data:data});
    }
})