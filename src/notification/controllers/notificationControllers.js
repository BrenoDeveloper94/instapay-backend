const express = require('express')
const repositoriesRead = require('../repositories/Read')
const repositoriesUpdate = require('../repositories/Update')


const router = express.Router() //Instantiating routes

// Routes
router.get('/notification/:id?', repositoriesRead.read)
router.put('/notification/:id?', repositoriesUpdate.update)


module.exports = router