import { NextRequest, NextResponse } from 'next/server'
import { verifyStoredOTP } from '@/utilities/otpStore'
import { getPayload } from 'payload'
import config from '@payload-config'

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const mobile = body.mobile || body.mobileNumber
    const otp = body.otp

    if (!mobile || !otp) {
      return NextResponse.json(
        { success: false, message: 'Mobile and OTP are required' },
        { status: 400, headers: corsHeaders() },
      )
    }

    const isValid = verifyStoredOTP(mobile, otp)
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired OTP' },
        { status: 400, headers: corsHeaders() },
      )
    }

    const payload = await getPayload({ config })
    const existing = await payload.find({
      collection: 'golu-users',
      where: { mobileNumber: { equals: mobile } },
    })

    const isRegistered = existing.docs.length > 0
    const user = isRegistered ? existing.docs[0] : null

    return NextResponse.json(
      {
        success: true,
        isRegistered,
        user,
        message: 'OTP verified successfully',
      },
      { headers: corsHeaders() },
    )
  } catch (error) {
    console.error('Verify OTP error:', error)
    return NextResponse.json(
      { success: false, message: 'Verification failed' },
      { status: 500, headers: corsHeaders() },
    )
  }
}

// import { NextRequest, NextResponse } from 'next/server'
// import { verifyStoredOTP } from '@/utilities/otpStore'
// import { getPayload } from 'payload'
// import config from '@payload-config'

// export async function POST(req: NextRequest) {
//   try {
//     const { mobile, otp } = await req.json()

//     if (!mobile || !otp) {
//       return NextResponse.json(
//         { success: false, message: 'Mobile and OTP are required' },
//         { status: 400 },
//       )
//     }

//     const isValid = verifyStoredOTP(mobile, otp)
//     if (!isValid) {
//       return NextResponse.json(
//         { success: false, message: 'Invalid or expired OTP' },
//         { status: 400 },
//       )
//     }

//     const payload = await getPayload({ config })
//     const existing = await payload.find({
//       collection: 'golu-users',
//       where: { mobileNumber: { equals: mobile } },
//     })

//     const isRegistered = existing.docs.length > 0
//     const user = isRegistered ? existing.docs[0] : null

//     return NextResponse.json({
//       success: true,
//       isRegistered,
//       user,
//       message: 'OTP verified successfully',
//     })
//   } catch (error) {
//     console.error('Verify OTP error:', error)
//     return NextResponse.json({ success: false, message: 'Verification failed' }, { status: 500 })
//   }
// }
