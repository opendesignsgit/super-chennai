'use client'

import { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import NoData from 'src/components/NoData'
import './style.css'

type InstagramReel = {
  id: string
  media_type: 'VIDEO' | 'IMAGE' | string
  media_url: string
  permalink: string
  thumbnail_url?: string
}

type Props = {
  heading: string
  description: string
}

export default function SocialReelSlider({ heading, description }: Props) {
  const [reels, setReels] = useState<InstagramReel[]>([])
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDir(currentScrollY > lastScrollY.current ? 'left' : 'right')
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    async function fetchReels() {
      try {
        const res = await fetch('/api/getInstagramReels')
        const data = await res.json()
        if (Array.isArray(data.data)) {
          const filtered = data.data.filter(
            (item: InstagramReel) =>
              item.media_type === 'VIDEO' || item.media_type === 'IMAGE'
          )
          setReels(filtered)
        } else {
          setReels([])
        }
      } catch (err) {
        console.error('Failed to load reels:', err)
        setReels([])
      }
    }
    fetchReels()
  }, [])

  return (
    <div className="socialChnennaiMaincontainer">
      {/* Background text */}
      <div
        className={`SocialChennairunningTextBackground ${
          scrollDir === 'right' ? 'scroll-right' : 'scroll-left'
        }`}
      >
        <p>Super Chennai &nbsp; Super Chennai &nbsp; Super Chennai &nbsp; Super Chennai</p>
      </div>

      {/* Heading & Description */}
      <div className="socialChennaiContent">
        <div className="socialChennaiContainer">
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>

      {/* Reel Slider */}
      <div className="reelsMarqueeSection py-6 relative overflow-hidden">
        {reels.length > 0 ? (
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {reels.map((reel, index) => (
              <a
                href={reel.permalink}
                key={reel.id}
                target="_blank"
                rel="noopener noreferrer"
                className={`mx-4 ${index % 2 !== 0 ? 'mt-18' : 'mt-0'}`}
              >
                {reel.media_type === 'VIDEO' ? (
                  <video
                    width={265}
                    height={472}
                    controls
                    className="w-[265px] h-auto object-cover mobileSocialWidjet"
                    poster={reel.thumbnail_url}
                  >
                    <source src={reel.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={reel.thumbnail_url || reel.media_url}
                    alt={`Instagram Reel ${index + 1}`}
                    width={265}
                    height={472}
                    className="w-[265px] h-auto object-cover mobileSocialWidjet"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = '/fallback-image.jpg'
                    }}
                  />
                )}
              </a>
            ))}
          </Marquee>
        ) : (
          <NoData message="No reels available" />
        )}
      </div>
    </div>
  )
}
