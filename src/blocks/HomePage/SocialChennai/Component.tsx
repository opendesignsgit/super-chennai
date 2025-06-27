// VERSION  4 ##########################################################################
'use client'

import { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import NoData from 'src/components/NoData'
import { FaPlay, FaPause } from 'react-icons/fa'

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
  contentType: 'video' | 'image'
  showVideoThumbnailOnly?: boolean
}

export default function SocialChennai({
  heading,
  description,
  contentType,
  showVideoThumbnailOnly = false,
}: Props) {
  const [reels, setReels] = useState<InstagramReel[]>([])
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')
  const lastScrollY = useRef(0)
  const [playingId, setPlayingId] = useState<string | null>(null)

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
            (item: InstagramReel) => item.media_type === contentType.toUpperCase(),
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
  }, [contentType])

  const handleToggle = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="socialChnennaiMaincontainer">
      <div
        className={`SocialChennairunningTextBackground ${
          scrollDir === 'right' ? 'scroll-right' : 'scroll-left'
        }`}
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
        {reels.length > 0 ? (
          <Marquee pauseOnHover speed={45} gradient={false}>
            {reels.map((reel, index) => {
              const isPlaying = playingId === reel.id
              const isVideo = reel.media_type === 'VIDEO'

              return (
                <div
                  key={reel.id}
                  className={`relative group mx-4 pb-4 ${index % 2 !== 0 ? 'mt-[80px]' : 'mt-0'}`}
                  style={{ width: 265 }}
                >
                  <a href={reel.permalink} target="_blank" rel="noopener noreferrer">
                    {isVideo ? (
                      showVideoThumbnailOnly ? (
                        <Image
                          src={reel.thumbnail_url || reel.media_url}
                          alt={`Video Thumbnail ${index + 1}`}
                          width={265}
                          height={472}
                          className="w-[265px] h-auto object-cover rounded-xl mobileSocialWidjet"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).src = '/fallback-image.jpg'
                          }}
                        />
                      ) : (
                        <div
                          className="relative w-full h-auto cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault()
                            handleToggle(reel.id)
                          }}
                        >
                          <video
                            // muted
                            loop
                            playsInline
                            autoPlay={isPlaying}
                            className="w-[265px] rounded-xl object-cover mobileSocialWidjet"
                            poster={reel.thumbnail_url}
                            ref={(videoEl) => {
                              if (videoEl) {
                                if (isPlaying) {
                                  videoEl.play().catch(() => {})
                                } else {
                                  videoEl.pause()
                                }
                              }
                            }}
                          >
                            <source src={reel.media_url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="group-hover:opacity-100 opacity-70 transition-opacity duration-300 pointer-events-none">
                              {!isPlaying ? (
                                <FaPlay className="text-white text-4xl drop-shadow-xl" />
                              ) : (
                                <FaPause className="text-white text-3xl drop-shadow-xl" />
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      <Image
                        src={reel.thumbnail_url || reel.media_url}
                        alt={`Instagram Reel ${index + 1}`}
                        width={265}
                        height={472}
                        className="w-[265px] h-auto object-cover rounded-xl mobileSocialWidjet"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).src = '/fallback-image.jpg'
                        }}
                      />
                    )}
                  </a>
                  {/* <div className="mt-2 text-center">
                    <span className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      {reel.media_type === 'VIDEO' ? 'Video' : 'Image'}
                    </span>
                  </div> */}
                </div>
              )
            })}
          </Marquee>
        ) : (
          <NoData message="No reels available" />
        )}
      </div>
    </div>
  )
}
