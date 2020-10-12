var nodemailer = require("nodemailer");

var mailService = () => {
    var sendEmail = async (data) => {
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'craftzyapp@gmail.com',
                pass: '100%A10dence'
            }
        });
        var mailOptions = {
            from: 'craftzyapp@gmail.com',
            to: data.email,
            subject: 'Test',
            html: '<h1>Hi </h1><p>Get your <b>craft today!</b></p>'
        };
        let result = await new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, function (err, info) {
                if (err) reject({ "errorcode": 1000, "error": 'Failure ' + err })
                resolve({ "errorcode": 0, error: 'Email sent succesfully to ' + data.email })
            })
        })
        return result;
    }
    return {
        sendEmail: sendEmail
    }
}

module.exports = mailService();