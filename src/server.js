require('dotenv').config()
const express = require('express')

const port = process.env.PORT

const app = express()

app.listen(port,(error) =>{
    if (error) {
        console.log(error)
    } else {
        console.log(`servidor rodando na porta:${port}`)
    }
})

module.exports = app