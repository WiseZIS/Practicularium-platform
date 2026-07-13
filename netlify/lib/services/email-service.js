const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

async function sendEmail({ to, subject, message }) {

    await transporter.sendMail({

        from: `"Practicularium" <${process.env.GMAIL_USER}>`,

        to,

        subject,

        text: message

    });

}

module.exports = {
    sendEmail
};