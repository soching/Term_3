const express = require('express');

let router = express.Router();

let books = [
    { id: 1, title: "The Lord of the Rings", author: "Tolkien" },
    { id: 2, title: "Hamlet", author: "Shakespeare" },
    { id: 3, title: "Harry Potter", author: "Rowling" },
    { id: 4, title: "Romeo and Juliet", author: "Shakespeare" },
    { id: 5, title: "The Odyssey", author: "Homer" }
];

// TODO: DEFINE THE 4 ROUTES HERE

// Get all the books
router.get('/', (req, res)=>{
    res.json(books)
})

// Create a new book
router.post('/', (req, res)=>{
    books.push(req.body);
    res.json(books)
})

// Update one book by id
router.put('/:id', (req, res)=>{
    let book = books.filter(book=> book.id == req.params.id)
    res.json(book)
})

// Delete books by author
router.delete('/:id', (req, res)=>{
    let book = books.filter(book=> book.id == req.params.id)
    res.status(200).json(book)
})

module.exports = router;