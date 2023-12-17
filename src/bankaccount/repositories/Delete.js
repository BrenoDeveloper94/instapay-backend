const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')


const del = async (req, res) => {

    const data = req.body

    try {

        await prisma.bank_account.delete({
            where:{
                id: data.id
            }
        })
        res.status(200)
        res.json({message: message.bankaccount.delete})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}


module.exports = {del}