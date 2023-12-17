const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')


const del = async (req, res) => { // This function deletes a user in the application

    const id = parseInt(req.params.id)

    try {

        await prisma.user.delete({
            where: {
                id: id
            }
        })
        res.status(200)
        res.json({message: message.user.delete})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}


module.exports = {del}