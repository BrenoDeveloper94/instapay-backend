const express = require('express')
const repositoriesLogin = require('../repositories/Login')


const router = express.Router()

router.post('/login', repositoriesLogin.login)


module.exports = router
