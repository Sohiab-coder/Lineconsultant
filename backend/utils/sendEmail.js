const { createTransport } = require("nodemailer");

const sendEmail = async (option) => {
  const transporter = createTransport({
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    to: option.email,
    subject: option.subject,
    text: option.message,
  });
};

module.exports = sendEmail;
