// import { NextRequest, NextResponse } from 'next/server'
// import { getPayload } from 'payload'
// import config from '@payload-config'
// import { createTransporter } from '@/utilities/emailComponents/transporter'

// export async function POST(req: NextRequest) {
//   try {
//     const { emails, subject, message } = await req.json()

//     if (!emails || !Array.isArray(emails) || emails.length === 0) {
//       return NextResponse.json({ success: false, message: 'No recipient emails provided.' }, { status: 400 })
//     }

//     const transporter = createTransporter()
//     let successCount = 0

//     for (const email of emails) {
//       if (!email) continue
//       try {
//         await transporter.sendMail({
//           from: `"Super Chennai" <${process.env.SMTP_USER}>`,
//           to: email,
//           subject: subject || 'Update regarding Super Chennai Golu Contest',
//           html: `<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//                   <h2>🪔 Super Chennai Golu Contest</h2>
//                   <p style="white-space: pre-line; line-height: 1.6;">${message}</p>
//                   <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
//                   <p style="font-size: 12px; color: #777;">Thank you for participating!</p>
//                 </div>`,
//         })
//         successCount++
//       } catch (err) {
//         console.error(`Failed to send email to ${email}:`, err)
//       }
//     }

//     return NextResponse.json({
//       success: true,
//       message: `Successfully sent emails to ${successCount} participants.`,
//     })
//   } catch (error: any) {
//     console.error('Bulk email error:', error)
//     return NextResponse.json(
//       { success: false, message: error?.message || 'Failed to send bulk emails' },
//       { status: 500 },
//     )
//   }
// }

import { NextRequest, NextResponse } from 'next/server'
import { createTransporter } from '@/utilities/emailComponents/transporter'

export async function POST(req: NextRequest) {
  try {
    const { emails, subject, message } = await req.json()

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json({ success: false, message: 'No recipient emails provided.' }, { status: 400 })
    }

    const transporter = createTransporter()
    let successCount = 0

    for (const email of emails) {
      if (!email) continue
      try {
        await transporter.sendMail({
          from: `"Super Chennai" <${process.env.SMTP_USER}>`,
          to: email,
          subject: subject || 'Update regarding Super Chennai Golu Contest',
          html: `<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                  <h2>🪔 Super Chennai Golu Contest</h2>
                  <p style="white-space: pre-line; line-height: 1.6;">${message}</p>
                  <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                  <p style="font-size: 12px; color: #777;">Thank you for participating!</p>
                </div>`,
        })
        successCount++
      } catch (err) {
        console.error(`Failed to send email to ${email}:`, err)
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully sent emails to ${successCount} participants.`,
    })
  } catch (error: any) {
    console.error('Bulk email error:', error)
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to send bulk emails' },
      { status: 500 },
    )
  }
}