const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors({origin:"*"}));

//Start server
app.listen(PORT,()=>{
    console.log("http://localhost:" + PORT);
});

// app.use(express.static("fron-end"));

//+++++++++++++++TODO+++++++++++++++++++++++

// Example of REQUEST using QUERRY PARAMETERS
// localhost:3000/book?id=100
app.get("/book", (req, res) => {
    let id = req.query.id
    res.send("id is :" + id)

});

// Example of REQUEST using ROUTE PARAMETERS
// localhost:3000/book/200
app.get("/book/:id", (req, res) => {
    let id = req.params.id
    res.send('hello' + id)
});
