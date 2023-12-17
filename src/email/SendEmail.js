const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'brenodeveloper94@gmail.com',
        pass: 'ihfmenxqdkhvdamc'
    },
    tls:{
        rejectUnauthorized: false
    }
})

const sendEmail = async (recipient, body, subject) =>{

    try {

        await transporter.sendMail({
            from: 'InstaPay <brenodeveloper94@gmail.com>',
            to: recipient,
            subject: subject,
            html: body
        })
        
    } catch (error) {
        console.log(error)
        res.json({message: 'Algo deu errado'})
    }

}

module.exports = {sendEmail}

