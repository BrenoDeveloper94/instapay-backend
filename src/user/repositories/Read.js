const prisma = require('../../../prisma/PrismaClient')


const read = async (req, res) => {

    const id = parseInt(req.params.id)
    const { search } = req.query
    var { take, skip } = req.query

    var take = parseInt(take)
    var skip = parseInt(skip)


    if (id) {

        try {
    
            const data = await prisma.user.findUnique({
                where:{
                    id: id
                }
            })
            res.json({
                data
            })
            
        } catch (error) {
            console.log(error)
        }
        
    } else {

        try {
            const count = await prisma.user.count()
            const data = await prisma.user.findMany({
                take: take,
                skip: skip,
                where: {
                    first_name:{
                        contains: search
                    }
                },
                include:{
                    category:{
                        select:{
                            text_categories: true
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