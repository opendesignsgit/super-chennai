import { NextRequest, NextResponse } from 'next/server'
import payload from 'payload'
import configPromise from '@payload-config'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export async function POST(req: NextRequest) {
  try {
    const { participantId } = await req.json()

    if (!participantId) {
      return NextResponse.json(
        { success: false, message: 'Participant ID is required' },
        { status: 400, headers: corsHeaders },
      )
    }

    const payloadClient = await payload.init({
      config: configPromise,
    })

    const submissions = await payloadClient.find({
      collection: 'golu-submissions',
      where: {
        participant: {
          equals: participantId,
        },
      },
      limit: 1,
      depth: 0,
    })

    return NextResponse.json(
      {
        success: true,
        alreadySubmitted: submissions.docs.length > 0,
      },
      { headers: corsHeaders },
    )
  } catch (error) {
    console.error('Check Golu submission error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to check submission',
      },
      { status: 500, headers: corsHeaders },
    )
  }
}
