var express = require('express');
var app = express();
const dotenv= require('dotenv').config()
var getAllItems =require('./CRUD_FUNCTIONS/selectItems')



app.use(express.json())
getAllItems()
var server = app.listen(5000, function () {
    console.log('Server is running..');
});