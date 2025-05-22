'use server'

import nodemailer from 'nodemailer'

export async function sendFormEmail(data: {
  name: string
  email: string
  message: string
}): Promise<boolean> {
  try {
    console.log('Preparing to send email with data:', data)

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.FORM_RECEIVER_EMAIL) {
      throw new Error('Missing required SMTP environment variables.')
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log('SMTP transporter created. Sending email...')

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.FORM_RECEIVER_EMAIL,
      subject: `New Contact Form Message`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    })

    console.log(' Email sent successfully.')
    return true
  } catch (err: any) {
    console.error('❌ Error sending email:', err.message)
    if (err.response) {
      console.error('SMTP Response:', err.response)
    }
    return false
  }
}
