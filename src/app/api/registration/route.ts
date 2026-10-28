import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const payload = await getPayload({ config: configPromise })

    const eventId = String(formData.get('eventId') || '')
    const eventSlug = String(formData.get('slug') || '')
    const registrationSettingsId = String(formData.get('registrationSettingsId') || '')
    const eventName = String(formData.get('eventName') || 'Event')

    const valuesString = formData.get('values')

    if (!registrationSettingsId) {
      return NextResponse.json(
        { success: false, message: 'Registration settings are required.' },
        { status: 400 },
      )
    }

    if (typeof valuesString !== 'string' || !valuesString) {
      return NextResponse.json(
        { success: false, message: 'Registration values are required.' },
        { status: 400 },
      )
    }

    let parsedValues: Record<string, unknown>

    try {
      parsedValues = JSON.parse(valuesString)

      if (!parsedValues || typeof parsedValues !== 'object' || Array.isArray(parsedValues)) {
        throw new Error('Invalid registration values.')
      }
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid registration form data.' },
        { status: 400 },
      )
    }

    // 1. Fetch registration settings
    const settingsId: string | number = /^\d+$/.test(registrationSettingsId)
      ? Number(registrationSettingsId)
      : registrationSettingsId

    let settings

    try {
      settings = await payload.findByID({
        collection: 'registration-settings',
        id: settingsId,
        depth: 0,
      })
    } catch {
      return NextResponse.json(
        { success: false, message: 'Registration settings not found.' },
        { status: 404 },
      )
    }

    // 2. Check whether registration is open
    if (!settings.isRegistrationOpen) {
      return NextResponse.json(
        { success: false, message: 'Registration is currently closed.' },
        { status: 403 },
      )
    }

    // 3. Check maximum registration count
    if (typeof settings.maxRegistrations === 'number' && settings.maxRegistrations > 0) {
      const existingRegistrations = await payload.find({
        collection: 'registration-submissions',
        where: {
          registrationSettings: {
            equals: settings.id,
          },
        },
        limit: 1,
        depth: 0,
        overrideAccess: true,
      })

      if (existingRegistrations.totalDocs >= settings.maxRegistrations) {
        return NextResponse.json(
          {
            success: false,
            message: 'Maximum registrations have been reached.',
          },
          { status: 409 },
        )
      }
    }

    // 4. Upload files to Payload Media
    // const uploadedAttachments: {
    //   file: string | number
    //   fieldName: string
    // }[] = []

    const uploadedAttachments: {
      file: number
      fieldName: string
    }[] = []

    for (const [key, value] of formData.entries()) {
      if (!(value instanceof File)) continue

      // Ignore empty file inputs
      if (!value.name || value.size === 0) continue

      const fileBuffer = Buffer.from(await value.arrayBuffer())

      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: `Event registration attachment - ${key}`,
        },
        file: {
          data: fileBuffer,
          name: value.name,
          mimetype: value.type || 'application/octet-stream',
          size: value.size,
        },
        overrideAccess: true,
      })

      uploadedAttachments.push({
        file: mediaDoc.id,
        fieldName: key,
      })
    }

    // 5. Save registration submission
    const newSubmission = await payload.create({
      collection: 'registration-submissions',
      data: {
        title: `${eventName} Registration`,
        eventName,
        eventId,
        eventSlug,
        registrationSettings: settings.id,
        values: parsedValues,
        attachments: uploadedAttachments,
        status: 'pending',
      },
      overrideAccess: true,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Registration submitted successfully.',
        data: newSubmission,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Event Registration Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit registration.',
      },
      { status: 500 },
    )
  }
}
