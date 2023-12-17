const prisma = require('../../../prisma/PrismaClient')

const read = async (req, res) => {

    try {

        const data = await prisma.category.findMany()
        res.json({data})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}

module.exports = {read}