const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')


const update = async (req, res) => {

    const id = parseInt(req.params.id)
    const d = new Date()

    try {

        await prisma.access.update({
            where:{
                id_user: id
            },
            data:{
                status_access: false,
                updaded_at: d
            }
        })
        await prisma.user.update({
            where:{
                id: id
            },
            data:{
                logged: false,
                last_acess: d
            }
        })
        res.status(200)
        res.json({message: message.logged.logout})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}

module.exports = {update}