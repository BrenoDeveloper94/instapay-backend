const express = require('express')
const repositoriesRead = require('../repositories/Read')


const router = express.Router() //Instantiating routes

// Routes
router.get('/bankbalance/:id?', repositoriesRead.read)


module.exports = router