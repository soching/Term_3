const express=require("express");
const app=express();
const port =3000;

app.listen(port,()=>{
    console.log("http://localhost:" + port);
})

app.use(express.static("fron-end"));

const BOOKS = [
    {id:1 ,name:'Rady dreams in 2019'},
    {id:2 ,name:'How to dream of code ?'},
    {id:3 ,name:'How to kill covid ?'},
]

app.get('/book',(req,res)=>{
    let id = req.query.id;
    res.send('book name : ' + BOOKS[id].name);
})



