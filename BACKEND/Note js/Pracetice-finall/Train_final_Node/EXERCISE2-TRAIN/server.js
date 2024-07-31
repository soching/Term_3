const express = require('express');
const app =express();
const PORT =3000;
const fs = require('fs');
app.use(express.json());
// app.use(express.urlencoded({extended:false}));
let data = JSON.parse(fs.readFileSync('database/database.json'));

function save(){
    fs.writeFileSync('database/database.json',JSON.stringify(data));
}

app.listen(PORT,()=>{
    console.log('server is working');
})

//get------
app.get('/books',(req,res)=>{
    res.json({status:200 ,message:'you are getting',data:data})
})
//create-------
app.post('/create/books',(req,res)=>{
    let listBooks = req.body;
    data.push(listBooks);
    save();
    res.json({status:200 ,message:'you are creating',data:data})
})
//delete------
app.delete('/delete/books/:id',(req,res)=>{
    let id = req.params.id;
    if(data.length > id){
        data.splice(id,1);
        save();
        res.json({status:200 ,message:'you are deleting',data:data})
    }
})
//updat-------
app.put('/updat/books/:id',(req,res)=>{
    let id = req.params.id;
    let listBook = req.body;
    if(data.length > id){
        let Allbooks = {...listBook};
        data[id]=Allbooks;
        save();
        res.json({status:200 ,message:'you are updating',data:data})
    }
})