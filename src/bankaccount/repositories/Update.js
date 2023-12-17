const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')


const update = async (req, res) => {

    const id = parseInt(req.params.id)

    var data = {agency, agency_digit, account, account_digit} = req.body

    var agency = data.data.agency
    var agency_digit = data.data.agency_digit
    var account = data.data.account
    var account_digit = data.data.account_digit

    try {

        const foundIdbank_account = await prisma.bank_account.findMany({
            where:{
                id_user: id
            },
            select:{
                id: true
            }
        })

        await prisma.bank_account.update({
            where:{
                id: foundIdbank_account[0].id
            },
            data:{
                agency,
                agency_digit,
                account,
                account_digit
            }
        })
        res.status(200)
        res.json({message: message.bankaccount.update})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}


module.exports = {update}