const express = require("express");
const router = express.Router();
const item = require('../model/item_model');
const { getData } = require("../units/functions");

const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../model/item_model');

// get all
router.get('/', (req, res) => {
    res.json(getItems());
});

// get one item
router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(getItem(id));
});

// create
router.post('/', (req, res) => {
    const { title, description, price } = req.body;
    // let name = req.body.name;
    // let price = req.body.price;
    // let category = req.body.category;
    createItem(title, description, price);
    res.json({
        message: "Item created successfully"
    })

})

// update item
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let item = req.body;
    updateItem(id, item);
    res.json({
        message: "Item updated successfully"
    })
})

// delete item
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    deleteItem(id);
    res.json({
        message: "Item deleted successfully"
    })
});


module.exports = router;