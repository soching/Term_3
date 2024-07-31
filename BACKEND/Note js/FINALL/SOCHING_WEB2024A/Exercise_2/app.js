const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
const fs = require('fs');

app.get('/', (req, res) => {
   // TODO
   res.json({status:200, message:"api is working",endpoint:"api/posts"});
})
/**
 * Description: CRUD posts
 * Endpoint: /api/posts
 */
let data = JSON.parse(readFileSync('Exercise_2/database/posts.json'));

function save(){
    fs.writeFileSync('Exercise_2/database/posts.json',JSON.stringify(data));
}
// Get posts
app.get('/api/posts', (req, res) => {
   // TODO
   res.json({message:"get all posts",data:data});
});

// Get post
app.get('/api/posts/:id', (req, res) => {
    // TODO
    res.json({message:"get a post",data:data[post]})
});

// Create a new post
app.post('/api/posts', (req, res) => {
    // TODO
    let posts = req.body;
    data.push(posts);
    save();
    res.json({message:"create a new post"})
});

// Delete post
app.delete('/api/posts/:id', (req, res) => {
    // TODO
    let id = req.params.id;
    if(data.length > id){
        data.splice(id,1);
        save();
        res.json({message:'Delete post from database'})
    }
})

// Update a post
app.put('/api/posts/:id', (req, res) => {
    // TODO
    let id = req.params.id;
    let post = req.body;
    if(data.length > id){
        let listpost = {...post};
        data[id]=listpost;
        save();
    }
});