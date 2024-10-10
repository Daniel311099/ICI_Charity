import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use any email service provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address (e.g., Gmail)
      pass: process.env.EMAIL_PASSWORD, // App-specific password
    },
  });

export const sendContactEmail = async (name: string, phone: string, email: string, message: string, volunteer: boolean) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.CONTACT_EMAIL, // list of receivers
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong> ${message}</p>
               <p><strong>Volunteer:</strong> ${volunteer}</p>`,
    };

    return transporter.sendMail(mailOptions);
};
