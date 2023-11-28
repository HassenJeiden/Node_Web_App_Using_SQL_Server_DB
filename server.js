var express = require('express');
var app = express();
var dotenv= require('dotenv').config()
var conectDB=require('./conectMSSQL')
var port = process.env.PORT


conectDB()
app.listen(port,console.log('Server is running on ',port));
app.use(express.json(),express.text())
app.use('/api',require('./routes'))