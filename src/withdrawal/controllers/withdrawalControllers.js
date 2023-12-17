const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesRead = require('../repositories/Read')

const router = express.Router()

router.post('/withdrawal', repositoriesCreate.create)
router.get('/withdrawal/:id?', repositoriesRead.read)


module.exports = router