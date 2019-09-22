const express = require('express');
const router = express.Router();
const appServices = require('../applicationServices/bookApplicationServices');




 router.post('/add',appServices.addBook);
 router.get('/',appServices.getBooks);
 router.get('/byId/:id?',appServices.getBookById);
 router.put('/update/:id?',appServices.updateBook);
 router.delete('/delete/:id?',appServices.deleteBook);


module.exports = router;