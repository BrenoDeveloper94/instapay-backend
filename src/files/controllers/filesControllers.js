const express = require('express')
const multer = require('multer')
const repositoriesUpload = require('../repositories/Upload')
const storage = require('../../../multerConfig')


const router = express.Router()

const upload = multer({storage: storage})

router.put('/upload/:id?', upload.single('file'), repositoriesUpload.upload)


module.exports = router