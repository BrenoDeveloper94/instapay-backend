const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')
const lettersName = require('../../Utils/lettersName')


const create = async (req, res) => {

    var data = {id_user, id_categories, title_proposal, description, proposal_value, arrayRecept} = req.body


    var id_user = parseInt(data.data.id_user)
    var id_categories = parseInt(data.data.id_categories)
    var title_proposal = lettersName(data.data.title_proposal)
    var description = lettersName(data.data.description)
    var status_proposal = false
    var status_accepted = false
    var proposal_value = parseFloat(data.data.proposal_value)
    const d = new Date()


    const proposal = await prisma.proposal.findMany({
        select: {
            title_proposal: true
        }
    })

    const foundTitle = proposal.filter(proposal =>{
        return proposal.title_proposal == title_proposal
    })


    if (foundTitle == '') {

        try {

            const proposal = await prisma.proposal.create({
                data:{
                    id_user,
                    id_categories,
                    title_proposal,
                    description,
                    proposal_value,
                    status_proposal,
                    status_accepted,
                    created_at: d
                }
            })

            for (var i = 0; i < arrayRecept.length; i++) {
                await prisma.notification.create({
                    data:{
                        id_proposal: proposal.id,
                        id_recipient: arrayRecept[i]
                    }
                })
            }
            res.status(201)
            res.json({message: message.proposal.success})
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    }else {

        res.json({message: message.proposal.titleExists})

    }
    
    
}


module.exports = {create}