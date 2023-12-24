const prisma = require('../../../prisma/PrismaClient')
const bcrypt = require('bcryptjs')
const message = require('../../constants')
const bodyEmail = require('../../email/EmailWelcome')
const sendEmail = require('../../email/SendEmail')
const lettersPhrase = require('../../Utils/lettersPhrase')
const checkEmail = require('../../Utils/checkEmail')


const create = async (req, res) => { // This function creates a new user in the application

    var data = {first_name, last_name, email, password, login_type, cpf, url_profile, id_categories} = req.body

    
    var first_name = lettersPhrase(data.data.first_name)
    var last_name = lettersPhrase(data.data.last_name)
    var email = checkEmail(data.data.email)
    var password = data.data.password
    var login_type = data.data.login_type
    var id_categories = parseInt(data.data.id_categories)
    var cpf = data.data.cpf
    var url_profile = data.data.url_profile
    var d = new Date()


    if (login_type == '1') {
        login_type = true
    } else {
        login_type = false
    }


    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt)


    const users = await prisma.user.findMany({
        select: {
            email: true,
            cpf: true
        }
    })

    const foundEmail = users.filter(user =>{
        return user.email == email
    })

    const foundCpf = users.filter(user =>{
        return user.cpf == cpf  
    })

    if (foundEmail == '' && foundCpf == '') {

        try {

            const dataUser = await prisma.user.create({
                data:{
                    first_name,
                    last_name,
                    full_name: '',
                    cpf,
                    email,
                    password: hash,
                    login: '',
                    last_acess: d,
                    login_type,
                    id_categories,
                    url_profile,
                    profile_image: ''
                }
            })
            await prisma.access.create({
                data:{
                    id_user: dataUser.id,
                    updaded_at: d
                }
            })
            await prisma.bank_Balance.create({
                data:{
                    id_user: dataUser.id,
                    balance: 0
                }
            })
            res.status(201)
            res.json({message: message.user.success})

            await sendEmail.sendEmail(email, bodyEmail, 'Bem vindo!')
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    }else {

        if (foundEmail != '' && foundCpf == '') {

            res.json({message: message.user.emailExists})

        }else{

            if (foundEmail == '' && foundCpf != '') {

                res.json({message: message.user.cpfExists})

            } else {

                res.json({message: message.user.existsEmailandCpf})

            }
            
        }

    }
    
}


module.exports = {create}