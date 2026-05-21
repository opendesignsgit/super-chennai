import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const payload = await getPayload({
      config,
    })

    const registration = await payload.findByID({
      collection: 'arattai-registrations',
      id: body.id,
    })

    if (!registration.email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email not found',
        },
        {
          status: 400,
        },
      )
    }

    await payload.sendEmail({
      to: registration.email,
      from: 'noreply@superchennai.com',

      subject: 'Your Registration is Confirmed',

      html: `
        <div style="font-family:sans-serif;padding:30px;">
          <h2>Registration Confirmed 🎉</h2>

          <p>
            Thank you ${registration.name}.
          </p>

          <p>
            Your registration has been confirmed successfully.
          </p>

          <p>
            We look forward to seeing you at the event.
          </p>
        </div>
      `,
    })

    await payload.update({
      collection: 'arattai-registrations',
      id: body.id,

      data: {
        thankYouMailSent: true,
        status: 'confirmed',
        confirmedAt: new Date().toISOString(),
      },
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    )
  }
}
