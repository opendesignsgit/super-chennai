import { NextRequest, NextResponse } from 'next/server'
import { sendOtp } from '@/utilities/sms/sendOtp'
import { setStoredOTP } from '@/utilities/otpStore'
import payload from 'payload'
import configPromise from '@payload-config'

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
    const { mobile, mode } = body

    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        { success: false, message: 'Valid 10-digit Indian mobile number required' },
        { status: 400, headers: corsHeaders() },
      )
    }

    const payloadClient = await payload.init({ config: configPromise })
    const existingUsers = await payloadClient.find({
      collection: 'golu-users',
      where: { mobileNumber: { equals: mobile } },
      limit: 1,
    })

    const userExists = existingUsers.docs.length > 0

    // case 1: Register செய்ய வரும்போது ஏற்கனவே எண்ணை பதிவு செய்திருந்தால்
    if (mode === 'register' && userExists) {
      return NextResponse.json(
        {
          success: true,
          isAlreadyRegistered: true,
        },
        { status: 200, headers: corsHeaders() },
      )
    }

    // case 2: Login செய்ய வரும்போது எண் பதிவில் இல்லை என்றால்
    if (mode === 'login' && !userExists) {
      return NextResponse.json(
        {
          success: false,
          message: 'This mobile number is not registered yet. Please register first.',
        },
        { status: 400, headers: corsHeaders() },
      )
    }

    // புது பதிவிற்கும் (Register), Login செய்வதற்கும் OTP அனுப்பப்படும்
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await sendOtp({ mobile, otp })
    setStoredOTP(mobile, otp)

    return NextResponse.json(
      { success: true, isAlreadyRegistered: false },
      { status: 200, headers: corsHeaders() },
    )
  } catch (error) {
    console.error('Send OTP Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send OTP' },
      { status: 500, headers: corsHeaders() },
    )
  }
}

// import { NextRequest, NextResponse } from 'next/server'
// import { sendOtp } from '@/utilities/sms/sendOtp'
// import { setStoredOTP } from '@/utilities/otpStore'

// function corsHeaders() {
//   return {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//   }
// }

// export async function OPTIONS() {
//   return NextResponse.json({}, { headers: corsHeaders() })
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()
//     const { mobile } = body

//     if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
//       return NextResponse.json(
//         { success: false, message: 'Valid 10-digit Indian mobile number required' },
//         { status: 400, headers: corsHeaders() },
//       )
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString()
//     await sendOtp({ mobile, otp })
//     setStoredOTP(mobile, otp)

//     return NextResponse.json(
//       {
//         success: true,
//         message: 'OTP Sent Successfully',
//       },
//       { headers: corsHeaders() },
//     )
//   } catch (error) {
//     console.error('Send OTP Error:', error)
//     return NextResponse.json(
//       { success: false, message: 'Failed to send OTP. Please try again.' },
//       { status: 500, headers: corsHeaders() },
//     )
//   }
// }

// import { NextRequest, NextResponse } from 'next/server'
// import { sendOtp } from '@/utilities/sms/sendOtp'
// import { setStoredOTP } from '@/utilities/otpStore'
// import payload from 'payload'
// import configPromise from '@payload-config'

// function corsHeaders() {
//   return {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//   }
// }

// export async function OPTIONS() {
//   return NextResponse.json({}, { headers: corsHeaders() })
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()
//     const { mobile, mode } = body // Frontend-லிருந்து 'mode' பெறப்படுகிறது

//     if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
//       return NextResponse.json(
//         { success: false, message: 'Valid 10-digit Indian mobile number required' },
//         { status: 400, headers: corsHeaders() },
//       )
//     }

//     const payloadClient = await payload.init({ config: configPromise })
//     const existingUsers = await payloadClient.find({
//       collection: 'golu-users',
//       where: { mobileNumber: { equals: mobile } },
//       limit: 1,
//     })

//     const userExists = existingUsers.docs.length > 0
//     const user = userExists ? existingUsers.docs[0] : null

//     // case 1: Register செய்ய வரும்போது ஏற்கனவே எண்ணை பதிவு செய்திருந்தால்
//     if (mode === 'register' && userExists) {
//       return NextResponse.json(
//         {
//           success: true,
//           isAlreadyRegistered: true,
//           user: {
//             fullName: user.fullName,
//             email: user.email,
//           },
//         },
//         { status: 200, headers: corsHeaders() },
//       )
//     }

//     // case 2: Login செய்ய வரும்போது எண் பதிவில் இல்லை என்றால்
//     if (mode === 'login' && !userExists) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'This mobile number is not registered yet. Please register first.',
//         },
//         { status: 400, headers: corsHeaders() },
//       )
//     }

//     // புது பதிவிற்கும் (Register), Login செய்வதற்கும் OTP அனுப்பப்படும்
//     const otp = Math.floor(100000 + Math.random() * 900000).toString()
//     await sendOtp({ mobile, otp })
//     setStoredOTP(mobile, otp)

//     return NextResponse.json(
//       { success: true, isAlreadyRegistered: false },
//       { status: 200, headers: corsHeaders() },
//     )
//   } catch (error) {
//     console.error('Send OTP Error:', error)
//     return NextResponse.json(
//       { success: false, message: 'Failed to send OTP' },
//       { status: 500, headers: corsHeaders() },
//     )
//   }
// }
