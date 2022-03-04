const nodemailer=require("nodemailer")

function sendEmail(mailOpts){
const transporter=nodemailer.createTransport({
    host:"smtp.sendgrid.net",
    port:25,
    auth:{
        user:"apikey",
        pass:"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"
    }
})

const emailOpt={
    from:"007rohanms@gmail.com",
    to:mailOpts.toMail,
    subject:"This is a test mail please ignore",
    text:mailOpts.body
}
return transporter.sendMail(emailOpt)
}


module.exports=sendEmail