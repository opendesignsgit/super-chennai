'use client'

import React from 'react'
import Link from 'next/link'

type MediaAsset2026 = {
  url?: string
  alt?: string
}

type TvcCardItem = {
  id?: string
  company: string
  eventsCalendarTitle: string
  image: MediaAsset2026 | string
  link: string
}

type TvCommercials2026Props = {
  sectionHeading?: string
  tvcCards?: TvcCardItem[]
}

export default function TvCommercials2026Component({
  sectionHeading = 'TV Commercials',
  tvcCards = [
    {
      company: 'Published On: July 21, 2025',
      eventsCalendarTitle: 'Super Chennai TVC: Ad Compilation',
      image: '/images/NewsLetter/Thumbnail1.jpg',
      link: 'https://www.youtube.com/watch?v=6usybQ5X6Do',
    },
    {
      company: 'Published On: July 18, 2025',
      eventsCalendarTitle: 'Super Chennai TVC: Park',
      image: '/images/NewsLetter/Thumbnail2.jpg',
      link: 'https://www.youtube.com/watch?v=yA8dNdpZi44',
    },
    {
      company: 'Published On: July 18, 2025',
      eventsCalendarTitle: 'Super Chennai TVC: Restaurant',
      image: '/images/NewsLetter/Thumbnail3.jpg',
      link: 'https://www.youtube.com/watch?v=jsNMl5AnuMU',
    },
  ],
}: TvCommercials2026Props) {
  // Media asset resolver
  const extractAssetUrl = (asset: MediaAsset2026 | string | any) => {
    if (!asset) return ''
    if (typeof asset === 'object' && asset !== null) {
      if (asset.url) return asset.url
    }
    if (typeof asset === 'string') return asset
    return ''
  }

  return (
    <div className="NewsLetterPage newsectionpayload">
      <div className="socialChennaiContent YoutubeVideoSection">
        <div className="container max-w-7xl mx-auto">
          <h4 style={{ textAlign: 'center' }} className="text-align: center;">
            {sectionHeading}
          </h4>

          <div className="EventsListboxs flex flex-wrap">
            {tvcCards?.map((card, index) => {
              const imgUrl = extractAssetUrl(card.image)
              const videoUrl = card.link || '#'
              const truncatedTitle =
                card.eventsCalendarTitle.length > 60
                  ? `${card.eventsCalendarTitle.slice(0, 60)}...`
                  : card.eventsCalendarTitle

              return (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={videoUrl}
                  key={card.id || index}
                  className="EventsItems bg-white cursor-pointer newsLetterImage"
                  style={{
                    transition: 'transform 0.3s',
                  }}
                >
                  <div
                    className="relative w-full EventsItemImg"
                    style={{
                      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={card.eventsCalendarTitle}
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="EventsIteCont flex flex-col items-start">
                    <h2 className="titlePublished text-sm text-gray-500 mb-1">{card.company}</h2>
                    <h3 className="EveItemtitles youtubevideoSection text-base font-semibold mb-2">
                      <span style={{ fontWeight: '500' }}>{truncatedTitle}</span>
                      <div className="readMoreMainDiv mt-2">
                        <span className="ReadmoreNewArticles text-purple-700 font-medium hover:underline text-sm">
                          Watch Now
                        </span>
                      </div>
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
