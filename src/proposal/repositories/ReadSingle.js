const prisma = require('../../../prisma/PrismaClient')

const readSigle = async (req, res) => {

    const id = parseInt(req.params.id)

    try {

        const data = await prisma.proposal.findMany({
            where:{
                id: id
            },
            include:{
                user: true
            }
        })
        res.json(data)
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {readSigle}