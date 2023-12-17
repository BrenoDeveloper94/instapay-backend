const prisma = require('../../../prisma/PrismaClient')
const bcrypt = require('bcryptjs')
const message = require('../../constants')


const login = async (req, res) => {

    var data = {email, password} = req.body

    var email = data.data.email
    var password = data.data.password
    const d = new Date()
    
    
    try {

        const data = await prisma.user.findMany({
            where:{
                email: email
            }
        })

        if (data != '') {

            const foundPassword = await prisma.user.findMany({
                where:{
                    email: data[0].email
                }
            })


            var correct = bcrypt.compareSync(password, foundPassword[0].password)
    

            if (correct == true) {

                try {

                    const data = await prisma.user.findMany({
                        where:{
                            email: email
                        },
                        select:{
                            id: true
                        }
                    })
                    const foundId = data.map(user =>{
                        return user.id
                    })

                    const userLogged = await prisma.access.update({
                        where:{
                            id_user: parseInt(foundId)
                        },
                        data:{
                            status_access: true, 
                            updaded_at: d
                        }
                    })
                    await prisma.user.update({
                        where:{
                            id: parseInt(foundId)
                        },
                        data:{
                            logged: true
                        }
                    })
                    res.status(200)
                    res.json({
                        userLogged,
                        message: message.login.success
                    })
                    
                } catch (error) {
                    console.log(error)
                    res.json({message: 'Algo deu errado'})
                }
                
            } else {

                res.json({message: message.login.incorrectPassword})
                
            }
            
        } else {
            res.json({message: message.login.emailNotExists})
        }
        
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}


module.exports = {login}