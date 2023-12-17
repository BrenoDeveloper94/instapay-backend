const prisma = require('../../../prisma/PrismaClient')


const read = async (req, res) => {

    const id = parseInt(req.params.id)

    try {

        const data = await prisma.bank_Balance.findMany({
            where:{
                id_user: id
            },
            select:{
                balance: true
            }
        })
        res.json({
            data: data[0].balance
        })
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}


module.exports = {read}