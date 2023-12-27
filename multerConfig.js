const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    filename: (req, file, callback) =>{
        const time = new Date().getTime()
        callback(null, `${time}_${file.originalname}`)
    }
})

module.exports = storage