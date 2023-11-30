var myRoutes = require('express').Router()
var{getAllItems,getitemsByBouk,nweBook}=require('./CRUD_FUNCTIONS/selectItems')



myRoutes.get('/TousLesLivres',getAllItems);
myRoutes.post('/ChercherUnLivre',getitemsByBouk);
myRoutes.post('/AjouterUnLivre',nweBook);

module.exports = myRoutes