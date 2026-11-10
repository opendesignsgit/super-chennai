'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type VideoItem = {
  id?: string | number
  title: string
  thumbnail?:
    | {
        url?: string
        alt?: string
      }
    | string
  iframeLink: string
  directorName: string
  directorMail?: string
  likeCount?: number
}

type NammaStoriesVideosProps = {
  contestTitle?: string
  winnerThumbnail?: { url?: string; alt?: string } | string
  runnerUp1Thumbnail?: { url?: string; alt?: string } | string
  runnerUp2Thumbnail?: { url?: string; alt?: string } | string
  nomineesTitle?: string
  videosList?: VideoItem[]
  blockType?: string
}

export default function NammaStoriesVideosComponent(props: NammaStoriesVideosProps) {
  const [selectedCard, setSelectedCard] = useState<VideoItem | null>(null)
  const videos = props.videosList || []

  // Helper to safely resolve media upload or string URL
  const getImageUrl = (imgObj: any, defaultPath: string) => {
    if (!imgObj) return defaultPath
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return defaultPath
  }

  const winnerImg = getImageUrl(
    props.winnerThumbnail,
    '/images/NammaStories-Videos/thumbnail-youtube-2.jpg',
  )
  const runner1Img = getImageUrl(
    props.runnerUp1Thumbnail,
    '/images/NammaStories-Videos/thumbnail-youtube-3.jpg',
  )
  const runner2Img = getImageUrl(
    props.runnerUp2Thumbnail,
    '/images/NammaStories-Videos/thumbnail-youtube-8.jpg',
  )

  return (
    <div className="NewsLetterPage">
      <div className="cmssection NammaStoriesVideoDiv">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294] particularTitle">
              {props.contestTitle || 'Namma Stories Video Contest Results'}
            </h2>
          </div>
          <div className="nammaStorieswinner">
            <div className="nammaStoriesvideo-card nammaStorieswinner-card youtubeIConStyle">
              <img src={winnerImg} alt="Winner Video" />
              <div className="nammaStorieslabel1">
                <img src="/images/Winner.jpg" alt="Winner Badge" />
              </div>
            </div>
          </div>
          <div className="nammaStorierunner-ups">
            <div className="nammaStoriesvideo-card runner-up-card silver youtubeIConStyle runnerupStyle">
              <img src={runner1Img} alt="1st Runner-Up" />
            </div>
            <div className="nammaStoriesvideo-card runner-up-card bronze youtubeIConStyle runnerupStyle1">
              <img src={runner2Img} alt="2nd Runner-Up" />
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto nammaStoriesVideoStyle">
          <div className="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">
              {props.nomineesTitle || 'Namma Stories List of Nominees'}
            </h2>
          </div>

          <div className="EventsListboxs flex flex-wrap">
            {videos.map((card, index) => {
              const thumbUrl = getImageUrl(card.thumbnail, '/images/placeholder.jpg')
              return (
                <div
                  key={card.id || index}
                  className="EventsItems bg-white cursor-pointer newsLetterImage"
                >
                  <div
                    className="relative w-full EventsItemImg youtubeIConStyle"
                    onClick={() => setSelectedCard(card)}
                    style={{
                      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    }}
                  >
                    <img src={thumbUrl} alt={card.title} className="w-full object-cover" />
                  </div>

                  <div className="EventsIteCont flex flex-col items-start">
                    <h3 className="EveItemtitles">
                      <div style={{ fontWeight: '500' }} className="MovieTitle cursor-default">
                        {card.title}
                      </div>

                      <div
                        className="directorNameNammaStories"
                        style={{ fontWeight: '400' }}
                        onClick={() => setSelectedCard(card)}
                      >
                        Directed by : {` ${card.directorName}`}
                      </div>

                      <div className="readMoreMainDiv" onClick={() => setSelectedCard(card)}>
                        <span className="ReadmoreNewArticles cursor-pointer">Watch Video</span>
                      </div>
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          {/* YouTube Video Popup Modal */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl w-auto relative popupSection"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer closeButtonSvg"
                    onClick={() => setSelectedCard(null)}
                  >
                    ×
                  </button>
                  <iframe
                    className="nammastoriesPopupIframe"
                    src={selectedCard.iframeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
