'use client'

import Marquee from 'react-fast-marquee'
import { Media } from '@/payload-types'
import './style.css'

type Props = {
  heading: string
  description: string
  reels: {
    thumbnail: Media | string
    link: string
  }[]
}

export default function SocialChennaiBlock({ heading, description, reels }: Props) {
  // console.log('Heading:', heading)
  // console.log('Description:', description)
  // const reelsFinelly = reels.reels
  // console.log('Reels:', reelsFinelly)

  return (
    <div className="socialChnennaiMaincontainer">
      <div className="socialChennaiContent">
        <div className="socialChennaiContainer">
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="reelsMarqueeSection py-6 relative overflow-hidden">
        {reels && reels.length > 0 ? (
          <Marquee pauseOnHover={false} speed={50}>
            {reels.map((reel, index) => {
              const thumbnailURL =
                typeof reel.thumbnail === 'string' ? reel.thumbnail : reel.thumbnail?.url || ''

              return (
                <div key={index} className={`mx-4 ${index % 2 !== 0 ? 'mt-18' : 'mt-0'}`}>
                  <a href={reel.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={thumbnailURL}
                      alt="Instagram Reel"
                      className="max-w-[311px] max-h-[461px] w-full h-auto object-cover"
                    />
                  </a>
                </div>
              )
            })}
          </Marquee>
        ) : (
          <p>No reels available</p>
        )}
      </div>
    </div>
  )
}
