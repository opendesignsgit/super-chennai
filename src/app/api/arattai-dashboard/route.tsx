import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {

  const payload = await getPayload({ config })

  const registrations = await payload.find({
    collection: 'arattai-registrations',
    limit: 100,
  })

  return NextResponse.json(registrations)
}