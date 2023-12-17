const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')
const lettersPhrase = require('../../Utils/lettersPhrase')
const removeSpaces = require('../../Utils/removeSpaces')

const create = async (req, res) =>{

    var data = {id_accepted, id_accepted_receiver, payment_value, id_user, full_name, cpf, card_number, security_code, month, year} = req.body

    var id_accepted = parseInt(data.data.id_accepted)
    var id_accepted_receiver = parseInt(data.data.id_accepted_receiver)
    var payment_value = parseFloat(data.data.payment_value)
    var id_user = parseInt(data.data.id_user)
    var full_name = lettersPhrase(data.data.full_name)
    var cpf = data.data.cpf
    var card_number = removeSpaces(data.data.card_number)
    var security_code = data.data.security_code
    var month = data.data.month
    var year = data.data.year

    const d = new Date()
    
    try {

        await prisma.credit_Card.create({
            data:{
                id_user,
                full_name,
                cpf,
                card_number,
                security_code,
                month,
                year
            }
        })

        const idAccepted = await prisma.payment.create({
            data:{
                id_accepted,
                payment_value,
                created_at: d
            }
        })

        const idProposal = await prisma.accepted.findUnique({
            where:{
                id: idAccepted.id_accepted
            }
        })

        await prisma.proposal.update({
            where:{
                id: idProposal.id_proposal
            },
            data:{
                status_proposal: true
            }
        })

        const foundPaymentValue = await prisma.payment.findMany({
            where:{
                accepted:{
                    advertiser:{
                        id: id_accepted_receiver
                    }
                }
            },
            select:{
                payment_value: true
            }
        })

        var sumPayments = 0
        for(var i = 0; i < foundPaymentValue.length; i++){ 
            sumPayments += foundPaymentValue[i].payment_value
        }

        await prisma.bank_Balance.update({
            where:{
                id: id_accepted_receiver
            },
            data:{
                balance: sumPayments
            }
        })

        res.status(201)
        res.json({
            id_accepted: id_accepted,
            message: message.payment.success
        })
        
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}

module.exports = {create}