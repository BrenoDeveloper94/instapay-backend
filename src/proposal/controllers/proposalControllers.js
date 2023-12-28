const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesRead = require('../repositories/Read')


const router = express.Router() 

// Routes
router.post('/proposal', repositoriesCreate.create)
router.get('/proposal/:id?', repositoriesRead.read)


module.exports = router
