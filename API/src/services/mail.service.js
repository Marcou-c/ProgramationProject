const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER, // pon tu correo
    pass: process.env.MAIL_PASS  // y una contraseña de aplicación (no la tuya personal)
  }
});

const sendVerificationCode = async (email, code) => {
  const mailOptions = {
    from: `"Verificación P4" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'Tu código de verificación',
    text: `Tu código de verificación es: ${code}`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationCode };
