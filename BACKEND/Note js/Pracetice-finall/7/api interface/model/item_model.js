const { json } = require('express');
const {saveData,getData} = require('../units/functions');
const {v4: uuidv4}= require('uuid');

let items = getData('database/item.json');

function getItems() {
    return items
    
}

function getItem(id) {
    let item = items.findIndex(item => item.id === id);
    if (item !== undefined) {
        return item;
    }
    else{
        return "item not found successfully";
    }
}

function createItem(title, description, price) {
    let newItem ={
        id: uuidv4(),
        title: title,
        description:description,
        price:price,
    } 
    items.push(newItem)
    saveData('database/item.json', items);
}

function updateItem(id, item) {
    let indext = items.findIndex(item => item.id === id);
    if (indext!== -1) {
        items[indext] = item;
        
        saveData('database/item.json', items);
        return {message:'Updated successfully'};
    }else{
        return {message:'Item not found'};
    }
    
}
function deleteItem(id, item) {
    let indext = items.findIndex(item => item.id === id);
    if (indext === -1) {
        items.splice(indext, 1);
        saveData('database/item.json', items);
        return {message:'Deleted successfully'};
    }
    else{
        return {message:' delete Item not successfully'};
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}