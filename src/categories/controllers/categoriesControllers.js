const express = require('express')
const repositoriesRead = require('../repositories/Read')


const router = express.Router() //Instantiating routes

// Routes
//router.post('/proposal', repositoriesCreate.create)
router.get('/categories', repositoriesRead.read)


module.exports = router