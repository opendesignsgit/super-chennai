'use server'

import nodemailer from 'nodemailer'

export async function sendFormEmail(data: {
  name: string
  email: string
  message: string
  phoneNumber: string
  context: string
}): Promise<boolean> {
  try {
    console.log('Preparing to send email with data:', data)

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.FORM_RECEIVER_EMAIL
    ) {
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

    const messageBodyHTML = `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
    <h2 style="color: #ff6600; text-align: center;">🌟 Super Chennai – Contact Form Submission</h2>
    <p style="text-align: center; color: #777; margin-top: -10px;">You received a new message from your website</p>

    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;" />

    <table style="width: 100%; font-size: 16px;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">👤 Name:</td>
        <td>${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">📧 Email:</td>
        <td>${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">📞 Phone:</td>
        <td>${data.phoneNumber}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">📝 Context:</td>
        <td>${data.context}</td>
      </tr>
    </table>

    <div style="margin-top: 20px;">
      <h3 style="color: #444;">🗨️ Message:</h3>
      <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff6600; border-radius: 4px; line-height: 1.6;">
        ${data.message.replace(/\n/g, '<br />')}
      </p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px dashed #ccc;" />

    <footer style="text-align: center; font-size: 13px; color: #aaa;">
      &copy; ${new Date().getFullYear()} Super Chennai • www.superchennai.com
    </footer>
  </div>
`

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.FORM_RECEIVER_EMAIL,
      subject: `New Contact Form Message from ${data.name}`,
      text: messageBodyHTML.replace(/<[^>]+>/g, ''),
      html: messageBodyHTML,
    })

    console.log(' Email sent successfully.')
    return true
  } catch (err: any) {
    console.error(' Error sending email:', err.message)
    if (err.response) {
      console.error('SMTP Response:', err.response)
    }
    return false
  }
}
