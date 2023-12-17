const express = require('express')
const repositoriesCreate = require('../repositories/Create')
const repositoriesRead = require('../repositories/Read')
const repositoriesUpdate = require('../repositories/Update')
const repositoriesDelete = require('../repositories/Delete')

const router = express.Router()

router.post('/user', repositoriesCreate.create)
router.get('/user/:id?', repositoriesRead.read)
router.put('/user/:id', repositoriesUpdate.update)
router.delete('/user/:id', repositoriesDelete.del)


module.exports = router
