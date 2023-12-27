const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesRead = require('../repositories/Read')
const repositoriesReadSingle = require('../repositories/ReadSingle')


const router = express.Router() 

// Routes
router.post('/proposal', repositoriesCreate.create)
router.get('/proposal/:id?', repositoriesRead.read)
router.get('/my/proposal/:id', repositoriesReadSingle.readSigle)


module.exports = router
