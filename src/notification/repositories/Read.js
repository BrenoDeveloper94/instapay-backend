const prisma = require('../../../prisma/PrismaClient')

const read = async (req, res) => {

    const id = parseInt(req.params.id)

    if (id) {

        try {

            const data = await prisma.notification.findMany({
                where:{
                    id_recipient: id
                },
                orderBy:{
                    id: 'desc'
                },
                include:{
                    proposal:{
                        include:{
                            user:{
                                select:{
                                    first_name: true,
                                    last_name: true,
                                    profile_image: true
                                }
                            }
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

            const data = await prisma.notification.findMany({
                orderBy:{
                    id: 'desc'
                },
                include:{
                    proposal:{
                        include:{
                            user:{
                                select:{
                                    first_name: true,
                                    last_name: true,
                                    profile_image: true
                                }
                            }
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