const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')
const bcrypt = require('bcryptjs')
const sendEmail = require('../../email/SendEmail')
const bodyEmail = require('../../email/EmailRedefinePassword')


const update = async (req, res) => {
    
    var data = {email} = req.body

    var email = data.data.email

    try {

        const foundEmail = await prisma.user.findMany({
            where: {
                email: email
            }
        })
        

        if (foundEmail != '') {


            const pass = Math.random().toString(36).substring(2)
            const body = bodyEmail.redefinePassword(pass)
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(pass, salt)
            

            await prisma.user.update({
                where:{
                    id: foundEmail[0].id
                },
                data:{
                    password: hash
                }
            })

            await sendEmail.sendEmail(foundEmail[0].email, body, 'Redefinir senha')

            res.json({emailTrue: true})

        } else {
            res.json({message: message.login.emailNotExists})
        }

    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}


module.exports = {update}