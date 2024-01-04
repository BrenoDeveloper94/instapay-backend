const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')
const bcrypt = require('bcryptjs')


const update = async (req, res) => { 

    const id = parseInt(req.params.id)
    var data = {first_name, last_name, full_name, email, login, password, login_type, cpf, id_categories} = req.body

    var first_name = data.data.first_name
    var last_name = data.data.last_name
    var full_name = data.data.full_name
    var email = data.data.email
    var login = data.data.login
    var password = data.data.password
    var login_type = data.data.login_type
    var cpf = data.data.cpf
    var id_categories = parseInt(data.data.id_categories)

    if (!id_categories) {
        id_categories = 1
    }

    if (login_type == '1') {
        login_type = true
    } else {
        login_type = false
    }

    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt)

    try {

        await prisma.user.update({
            where: {
                id: id
            },
            data:{
                first_name,
                last_name,
                full_name,
                email,
                login,
                password: hash,
                login_type,
                cpf,
                id_categories
            }
        })
        res.status(200)
        res.json({message: message.user.update})

    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}


module.exports = {update}