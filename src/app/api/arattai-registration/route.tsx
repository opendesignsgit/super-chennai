import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { createTransporter } from '@/utilities/emailComponents/transporter'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const payload = await getPayload({
      config,
    })

    const registration = await payload.create({
      collection: 'arattai-registrations',

      data: {
        arattai: body.arattaiId,

        name: body.values?.name || '',

        email: body.values?.email || '',

        phone: body.values?.phone || body.values?.mobile || body.values?.phoneNumber || '',

        values: body.values,
      },
    })

    const transporter = createTransporter()

    if (registration?.email) {


 

      await transporter.sendMail({
        from: `"Super Chennai" <${process.env.SMTP_USER}>`,

        to: registration.email,

        subject: 'Registration Confirmed',

        html: body.emailTemplate,
      })


    }

    return NextResponse.json({
      success: true,
    })
  } catch (error: any) {
    console.log(error)

    return NextResponse.json(
      {
        success: false,
        message: error?.message,
      },
      {
        status: 500,
      },
    )
  }
}
