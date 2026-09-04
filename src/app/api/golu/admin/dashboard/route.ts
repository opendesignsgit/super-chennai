import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(req: NextRequest) {
  try {
    const payload = await getPayload({ config })

    const totalUsers = await payload.count({ collection: 'golu-users' })
    const totalSubmissions = await payload.count({ collection: 'golu-submissions' })

    const pending = await payload.count({
      collection: 'golu-submissions',
      where: { status: { equals: 'pendingReview' } },
    })
    const approved = await payload.count({
      collection: 'golu-submissions',
      where: { status: { equals: 'approved' } },
    })
    const shortlisted = await payload.count({
      collection: 'golu-submissions',
      where: { status: { equals: 'shortlisted' } },
    })
    const rejected = await payload.count({
      collection: 'golu-submissions',
      where: { status: { equals: 'rejected' } },
    })

    return NextResponse.json({
      success: true,
      stats: {
        totalRegistered: totalUsers.totalDocs,
        totalSubmissions: totalSubmissions.totalDocs,
        pendingReview: pending.totalDocs,
        approved: approved.totalDocs,
        shortlisted: shortlisted.totalDocs,
        rejected: rejected.totalDocs,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch dashboard metrics' },
      { status: 500 },
    )
  }
}
