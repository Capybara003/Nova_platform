import nodemailer from 'nodemailer'

const MAILING_EMAIL = process.env.MAILING_EMAIL

const config = {
  // service: appConfig.MAILING_SERVICE,
  host: process.env.MAILING_HOST || '',
  port: parseInt(process.env.MAILING_PORT || ''),
  secure: process.env.MAILING_SECURE === 'true',
  auth: {
    user: process.env.MAILING_EMAIL || '',
    pass: process.env.MAILING_PASSWORD || '',
  },
}

const transporter = nodemailer.createTransport(config)

export default async function sendMail(email: string, message: string, subject: string) {
  await transporter.sendMail({
    to: email,
    from: MAILING_EMAIL,
    subject: subject,
    text: message,
  })
}
