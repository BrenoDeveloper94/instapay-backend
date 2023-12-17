const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesUpdate = require('../repositories/Update')
const repositoriesDelete = require('../repositories/Delete')
const repositoriesRead = require('../repositories/Read')


const router = express.Router() //Instantiating routes

// Routes
router.post('/bankaccount', repositoriesCreate.create)
router.put('/bankaccount/:id?', repositoriesUpdate.update)
router.delete('/bankaccount', repositoriesDelete.del)
router.get('/bankaccount/:id?', repositoriesRead.read)


module.exports = router