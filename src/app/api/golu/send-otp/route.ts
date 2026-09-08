import { NextRequest, NextResponse } from 'next/server'
import { sendOtp } from '@/utilities/sms/sendOtp'
import { setStoredOTP } from '@/utilities/otpStore'

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
    const { mobile } = body

    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        { success: false, message: 'Valid 10-digit Indian mobile number required' },
        { status: 400, headers: corsHeaders() },
      )
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await sendOtp({ mobile, otp })
    setStoredOTP(mobile, otp)

    return NextResponse.json(
      {
        success: true,
        message: 'OTP Sent Successfully',
      },
      { headers: corsHeaders() },
    )
  } catch (error) {
    console.error('Send OTP Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send OTP. Please try again.' },
      { status: 500, headers: corsHeaders() },
    )
  }
}

// import { NextRequest, NextResponse } from 'next/server'
// import { sendOtp } from '@/utilities/sms/sendOtp'
// import { setStoredOTP } from '@/utilities/otpStore'
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()
//     const { mobile } = body
//     if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
//       return NextResponse.json(
//         { success: false, message: 'Valid 10-digit Indian mobile number required' },
//         { status: 400 }
//       )
//     }
//     const otp = Math.floor(100000 + Math.random() * 900000).toString()
//     await sendOtp({ mobile, otp })
//     setStoredOTP(mobile, otp)
//     return NextResponse.json({
//       success: true,
//       message: 'OTP Sent Successfully',
//     })
//   } catch (error) {
//     console.error('Send OTP Error:', error)
//     return NextResponse.json(
//       { success: false, message: 'Failed to send OTP. Please try again.' },
//       { status: 500 }
//     )
//   }
// }
