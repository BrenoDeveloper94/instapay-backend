const prisma = require('../../../prisma/PrismaClient')
const message = require('../../constants')


const create = async (req, res) => {

    var data = {id_user, id_bank, agency, agency_digit, account, account_digit} = req.body

    var id_user = parseInt(data.data.id_user)
    var id_bank = parseInt(data.data.id_bank)
    var agency = data.data.agency
    var agency_digit = data.data.agency_digit
    var account = data.data.account
    var account_digit = data.data.account_digit
    

    try {

        await prisma.bank_account.create({
            data:{
                id_user,
                id_bank,
                agency,
                agency_digit,
                account,
                account_digit
            }
        })
        res.status(201)
        res.json({message: message.bankaccount.success})
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }
    
}


module.exports = {create}