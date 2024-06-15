require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
    send_email: function (mail_to,subject,text){
        const msg = {
            to: mail_to,
            from: process.env.Mailer_service,
            subject: subject,
            text: text
        }

        sgMail.send(msg).then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        }).catch((error) => {
            console.log(error)
        })
    }
}
