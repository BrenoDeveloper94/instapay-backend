const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesRead = require('../repositories/Read')


const router = express.Router() //Instantiating routes

// Routes
router.post('/accepted', repositoriesCreate.create)
router.get('/accepted/:id?', repositoriesRead.read)


module.exports = router