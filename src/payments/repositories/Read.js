const prisma = require('../../../prisma/PrismaClient')

const read = async (req, res) => {

    const id = parseInt(req.params.id)
    var { take, skip } = req.query

    var take = parseInt(take)
    var skip = parseInt(skip)

    if (id) {

        try {
            
            const count = await prisma.payment.count({
                where:{
                    OR:[
                        {
                            accepted:{
                                id_influenser: id
                            }
                        },
                        {
                            accepted:{
                                proposal:{
                                    id_user: id
                                }
                            }
                        }
                    ]
                }
            })
            const data = await prisma.payment.findMany({
                where:{
                    OR:[
                        {
                            accepted:{
                                id_influenser: id
                            }
                        },
                        {
                            accepted:{
                                proposal:{
                                    id_user: id
                                }
                            }
                        }
                    ]
                },
                take: take,
                skip: skip,
                orderBy:{
                    id: 'desc'
                },
                include:{
                    accepted:{
                        include:{
                            proposal: true,
                            advertiser: true
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
        
    } else {

        try {

            const count = await prisma.payment.count()
            const data = await prisma.payment.findMany({
                take: take,
                skip: skip,
                orderBy:{
                    id: 'desc'
                },
                include:{
                    accepted:{
                        include:{
                            proposal: true,
                            advertiser: true
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