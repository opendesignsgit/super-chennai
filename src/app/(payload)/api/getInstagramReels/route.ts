
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config' // Update this path to match your payload config layout

export async function GET() {
  try {
    // Initialize Payload Local API
    const payload = await getPayload({ config })

    // Fetch the settings global data
    const settings = await payload.findGlobal({
      slug: 'settings',
    })

    const PAGE_ID = settings?.facebookPageId
    const ACCESS_TOKEN = settings?.instagramAccessToken

    if (!PAGE_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Instagram API credentials are not configured in Payload Admin Panel.' },
        { status: 500 }
      )
    }

    // STEP 1: Get Instagram Business Account ID linked to the Page
    const igAccountRes = await fetch(
      `https://graph.facebook.com/v19.0/${PAGE_ID}?fields=instagram_business_account&access_token=${ACCESS_TOKEN}`,
    )
    const igAccountData = await igAccountRes.json()
    console.log('IG Account:', igAccountData)

    if (!igAccountData.instagram_business_account?.id) {
      return NextResponse.json(
        { error: 'No connected Instagram Business Account found' },
        { status: 404 },
      )
    }

    const instagramBusinessAccountId = igAccountData.instagram_business_account.id

    // STEP 2: Fetch media from the Instagram Business Account
    const mediaRes = await fetch(
      `https://graph.facebook.com/v19.0/${instagramBusinessAccountId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`,
    )
    const mediaData = await mediaRes.json()
    console.log('Media:', mediaData)
    
    if (!mediaData?.data || mediaData.data.length === 0) {
      return NextResponse.json({ error: 'No media found' }, { status: 404 })
    }

    return NextResponse.json(mediaData)
  } catch (error: any) {
    console.error('Instagram API Error:', error)
    return NextResponse.json({ error: 'Failed to fetch Instagram media' }, { status: 500 })
  }
}

// import { NextResponse } from 'next/server'

// const PAGE_ID = process.env.FACEBOOK_PAGE_ID
// const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN

// export async function GET() {
//   try {
//     // STEP 1: Get Instagram Business Account ID linked to the Page
//     const igAccountRes = await fetch(
//       `https://graph.facebook.com/v19.0/${PAGE_ID}?fields=instagram_business_account&access_token=${ACCESS_TOKEN}`,
//     )
//     const igAccountData = await igAccountRes.json()
//     console.log('IG Account:', igAccountData)

//     if (!igAccountData.instagram_business_account?.id) {
//       return NextResponse.json(
//         { error: 'No connected Instagram Business Account found' },
//         { status: 404 },
//       )
//     }

//     const instagramBusinessAccountId = igAccountData.instagram_business_account.id

//     // STEP 2: Fetch media from the Instagram Business Account
//     const mediaRes = await fetch(
//       `https://graph.facebook.com/v19.0/${instagramBusinessAccountId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`,
//     )
//     const mediaData = await mediaRes.json()
//     console.log('Media:', mediaData)
//     if (!mediaData?.data || mediaData.data.length === 0) {
//       return NextResponse.json({ error: 'No media found' }, { status: 404 })
//     }

//     return NextResponse.json(mediaData)
//   } catch (error: any) {
//     console.error('Instagram API Error:', error)
//     return NextResponse.json({ error: 'Failed to fetch Instagram media' }, { status: 500 })
//   }
// }