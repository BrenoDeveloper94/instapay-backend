const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesRead = require('../repositories/Read')


const router = express.Router() //Instantiating routes

// Routes
router.post('/payments', repositoriesCreate.create)
router.get('/payments/:id?', repositoriesRead.read)


module.exports = router