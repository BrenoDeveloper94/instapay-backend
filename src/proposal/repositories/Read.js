const prisma = require('../../../prisma/PrismaClient')

const read = async (req, res) => {

    const id = parseInt(req.params.id)
    var { take, skip } = req.query

    var take = parseInt(take)
    var skip = parseInt(skip)


    if (id) {

        try {

            const count = await prisma.proposal.count({
                where:{
                    id_user: id
                }
            })
            const data = await prisma.proposal.findMany({
                where:{
                    id_user: id
                },
                take: take,
                skip: skip,
                orderBy:{
                    id: 'desc'
                },
                include:{
                    user: true,
                    categories: true
                }
            })
            res.json({
                data, count: count
            })
            
        } catch (error) {
            console.log(error)
        }
        
    } else {

        try {

            const count = await prisma.proposal.count()
            const data = await prisma.proposal.findMany({
                take: take,
                skip: skip,
                orderBy:{
                    id: 'desc'
                },
                include:{
                    user: true,
                    categories: true
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