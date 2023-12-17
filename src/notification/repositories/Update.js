const prisma = require('../../../prisma/PrismaClient')


const update = async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        
        const foundNotification = await prisma.notification.findMany({
            where:{
                id_recipient: id,
                status_view: false
            }
        })

        for (var i = 0; i < foundNotification.length; i++) {
            await prisma.notification.update({
                where:{
                    id: foundNotification[i].id
                },
                data:{
                    status_view: true
                }
            })
        }

        const amount = await prisma.notification.findMany({
            where:{
                id_recipient: id,
                status_view: false
            }
        })
        res.json({
            amountNotification: amount.length
        })


    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}


module.exports = {update}