import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!, 10),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendContactEmail = async (name: string, email: string, message: string) => {
    const mailOptions = {
        from: `"${name}" <${email}>`, // sender address
        to: process.env.CONTACT_EMAIL, // list of receivers
        subject: 'New Contact Form Submission',
        text: message,
        html: `<p>You have a new contact form submission from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
    };

    return transporter.sendMail(mailOptions);
};
