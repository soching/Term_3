const express=require("express");
const app=express();

app.listen(4000,()=>{
    console.log("JING Chang");
})

app.get("/ching",(req,res)=>{
    res.send("Hi all nb")
})


// how to get values from user request
const teacherScore={
    ronan :45,
    rady :40,
    him :48
}
app.get("/results",(req,res)=>{
    let name = req.query.name;
    let score = teacherScore[name];
    res.send("score for teacher " +  name +  "is " + score)
});