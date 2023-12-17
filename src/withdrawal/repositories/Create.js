const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')

const create = async (req, res) => {

    var data = {id_bank_account, available_value, withdrawals_amount} = req.body

    var id_bank_account = parseInt(data.data.id_bank_account)
    var available_value = parseFloat(data.data.available_value)
    var withdrawals_amount = parseFloat(data.data.withdrawals_amount)

    const d = new Date()

    if (withdrawals_amount <= available_value) {

        try {

            await prisma.withdrawal.create({
                data:{
                    id_bank_account,
                    withdrawals_amount,
                    created_at: d
                }
            })
            const foundBalance = await prisma.bank_Balance.findMany({
                where:{
                    id: id_bank_account
                },
                select:{
                    balance: true
                }
            })
            await prisma.bank_Balance.update({
                where:{
                    id: id_bank_account
                },
                data:{
                    balance: foundBalance[0].balance - withdrawals_amount
                }
            })

            res.status(201)
            res.json({message: message.withdrawal.success})
            
        } catch (error) {
            console.log(error)
            res.json({message: 'Algo deu errado'})
        }
        
    } else {
        res.json({message: message.withdrawal.warning})
    }
    
}

module.exports = {create}