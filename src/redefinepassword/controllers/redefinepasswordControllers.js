const express = require('express')
const repositoriesUpdate = require('../repositories/Update')


const router = express.Router() //Instantiating routes

// Routes
router.put('/redefinepassword', repositoriesUpdate.update)


module.exports = router
