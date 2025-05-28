'use client'

import Marquee from 'react-fast-marquee'
import { Media } from '@/payload-types'
import './style.css'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import NoData from '@/components/NoData'

type Props = {
  heading: string
  description: string

  reelsRef: {
    reels: {
      thumbnail: Media | string
      link: string
    }[]
  }
}
export default function SocialReelSlider({ heading, description, reelsRef }: Props) {
  const reels = reelsRef.reels

  const [scrollDir, setScrollDir] = useState('left')
  const lastScrollY = useRef(0)
  const bgTextRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setScrollDir('left')
      } else {
        setScrollDir('right')
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="socialChnennaiMaincontainer">
      <div
        className={`SocialChennairunningTextBackground ${
          scrollDir === 'right' ? 'scroll-right' : 'scroll-left'
        }`}
        ref={bgTextRef}
      >
        <p>Super Chennai &nbsp; Super Chennai &nbsp; Super Chennai &nbsp; Super Chennai</p>
      </div>
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
                <div key={index} className={`mx-4 ${index % 2 !== 0 ? "mt-18" : "mt-0"}`}>
                  <Image
                    src={thumbnailURL}
                    alt="Instagram Reel"
                    className="w-[265px] h-[auto] object-cover mobileSocialWidjet"
                    width={0}
                    height={0}
                  />
                </div>
              )
            })}
          </Marquee>
        ) : (
          <div>
            <NoData message="No reels available" />
          </div>
        )}
      </div>
    </div>
  )
}
