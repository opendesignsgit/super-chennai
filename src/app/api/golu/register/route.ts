
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// CORS Preflight Handler
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    },
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, mobileNumber, email, localityArea, instagramHandle, termsAccepted } = body

    if (!fullName || !mobileNumber || !email || !localityArea || !termsAccepted) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        {
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*' },
        },
      )
    }

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'golu-users',
      where: { mobileNumber: { equals: mobileNumber } },
    })

    if (existing.docs.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Mobile number already registered' },
        {
          status: 409,
          headers: { 'Access-Control-Allow-Origin': '*' },
        },
      )
    }

    const user = await payload.create({
      collection: 'golu-users',
      data: {
        fullName,
        mobileNumber,
        email,
        localityArea,
        instagramHandle: instagramHandle || '',
        termsAccepted: true,
        termsAcceptedAt: new Date().toISOString(),
        registrationDate: new Date().toISOString(),
        isVerified: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        user,
        message: 'Registration successful',
      },
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    )
  } catch (error) {
    console.error('Registration Error:', error)
    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      {
        status: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    )
  }
}



// import { NextRequest, NextResponse } from 'next/server'
// import { getPayload } from 'payload'
// import config from '@payload-config'

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()
//     const { fullName, mobileNumber, email, localityArea, instagramHandle, termsAccepted } = body

//     if (!fullName || !mobileNumber || !email || !localityArea || !termsAccepted) {
//       return NextResponse.json(
//         { success: false, message: 'All required fields must be filled' },
//         { status: 400 }
//       )
//     }

//     const payload = await getPayload({ config })

//     const existing = await payload.find({
//       collection: 'golu-users',
//       where: { mobileNumber: { equals: mobileNumber } },
//     })

//     if (existing.docs.length > 0) {
//       return NextResponse.json(
//         { success: false, message: 'Mobile number already registered' },
//         { status: 409 }
//       )
//     }

//     const user = await payload.create({
//       collection: 'golu-users',
//       data: {
//         fullName,
//         mobileNumber,
//         email,
//         localityArea,
//         instagramHandle: instagramHandle || '',
//         termsAccepted: true,
//         termsAcceptedAt: new Date().toISOString(),
//         registrationDate: new Date().toISOString(),
//         isVerified: true,
//       },
//     })

//     return NextResponse.json({
//       success: true,
//       user,
//       message: 'Registration successful',
//     })
//   } catch (error) {
//     console.error('Registration Error:', error)
//     return NextResponse.json(
//       { success: false, message: 'Registration failed' },
//       { status: 500 }
//     )
//   }
// }