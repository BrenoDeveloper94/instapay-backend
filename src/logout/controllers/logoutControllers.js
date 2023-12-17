const express = require('express')
const repositoriesLogout = require('../repositories/Update')


const router = express.Router()

router.put('/logout/:id', repositoriesLogout.update)


module.exports = router