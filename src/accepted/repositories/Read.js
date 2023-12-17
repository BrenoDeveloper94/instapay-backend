const prisma = require('../../../prisma/PrismaClient')

const read = async (req, res) => {

    const id = parseInt(req.params.id)

    if (id) {

        try {

            const data = await prisma.accepted.findMany({
                where:{
                    id_influenser: id
                },
                include:{
                    advertiser: true,
                    proposal:{
                        include:{
                            user: true
                        }
                    }
                }
            })
            res.json({data})
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    } else {

        try {

            const data = await prisma.accepted.findMany({
                include:{
                    advertiser: true,
                    proposal: {
                        include:{
                            user: true
                        }
                    }
                }
            })
            res.json({data})
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    }
    
}


module.exports = {read}