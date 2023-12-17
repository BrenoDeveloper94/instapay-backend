const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')

const create = async (req, res) => {

    var data = {id_influenser, id_proposal} = req.body

    var id_influenser = parseInt(data.data.id_influenser)
    var id_proposal = parseInt(data.data.id_proposal)

    try {

        await prisma.accepted.create({
            data:{
                id_influenser,
                id_proposal
            }
        })
        res.status(201)
        res.json({message: message.accepted.success})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}

module.exports = {create}