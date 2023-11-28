var myRoutes = require('express').Router()
var{getAllItems}=require('./CRUD_FUNCTIONS/selectItems')



myRoutes.get('/allBooks',getAllItems);

module.exports = myRoutes