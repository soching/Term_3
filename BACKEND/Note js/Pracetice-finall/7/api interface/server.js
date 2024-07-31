const express = require('express');
const app = express();
const port = 3300;

app.listen(port)
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));



// item route 

const itemRoutes = require('./routes/item_route');
app.use('/api/items',itemRoutes);