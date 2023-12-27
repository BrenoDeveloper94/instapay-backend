const prisma = require('../../../prisma/PrismaClient')

const read = async (req, res) => {

    const id = parseInt(req.params.id)
    var { take, skip } = req.query

    var take = parseInt(take)
    var skip = parseInt(skip)
    

    if (id) {

        try {

            const count = await prisma.withdrawal.count({
                where:{
                    bank_account:{
                        id_user: id
                    }
                }
            })
            const data = await prisma.withdrawal.findMany({
                take: take,
                skip: skip,
                orderBy:{
                    id: 'desc'
                },
                where:{
                    bank_account:{
                        id_user: id
                    }
                },
                include:{
                    bank_account:{
                        include:{
                            user: true
                        }
                    }
                },            
            })
            res.json({
                data, count: count
            })
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    } else {

        try {

            const count = await prisma.withdrawal.count()
            const data = await prisma.withdrawal.findMany({
                take: take,
                skip: skip,
                orderBy:{
                    id: 'desc'
                },
                include:{
                    bank_account:{
                        include:{
                            user: true
                        }
                    }
                }
            })
            res.json({
                data, count: count
            })
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    }
    
}

module.exports = {read}