const prisma = require('../../../prisma/PrismaClient')


const read = async (req, res) => {

    const id = parseInt(req.params.id)


    if (id) {

        try {

            const data = await prisma.bank_account.findMany({
                where:{
                    id_user: id
                }
            })
            res.json({
                data: data[0]
            })
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    } else {

        try {

            const data = await prisma.bank_account.findMany()
            res.json({data})
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    }
    
}


module.exports = {read}