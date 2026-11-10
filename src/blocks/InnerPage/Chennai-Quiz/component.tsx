'use client'

import React from 'react'
import RichText from '@/components/RichText'

type QuizProps = {
  eventTitle?: string
  bannerImage?: { url?: string } | string
  aboutContent?: any
  poweredByLogo?: { url?: string } | string
  sidebarDetails?: {
    dateLabel?: string
    timeLabel?: string
    locationLabel?: string
    hostLabel?: string
    teamsLabel?: string
    feeLabel?: string
    registerRoute?: string
  }
}

export default function SuperChennaiQuizSection(props: QuizProps) {
  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  const bannerImgUrl = getImageUrl(
    props.bannerImage,
    '/images/events/superchennai-quiz-inner-2.jpg',
  )
  const logoUrl = getImageUrl(props.poweredByLogo, '/images/events/VGN-Logo.jpg')
  const sidebar = props.sidebarDetails || {}

  return (
    <section className="EventsBanSec py-12 bg-gray-50 poppinsfamilyyy">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="EventContBox flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="EventLeft flex-1">
            <h2 className="">{props.eventTitle || 'Super Chennai Quiz'}</h2>

            <div className="EventBanImg mb-6 rounded-xl overflow-hidden shadow-lg">
              <img
                src={bannerImgUrl}
                alt={props.eventTitle || 'Quiz Event'}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
              <div className="ebbmgiL flex gap-2">
                <button
                  className="block md:hidden lg:hidden cursor-pointer"
                  onClick={() => {
                    const target = document.getElementById('mainBookNow')
                    if (target)
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                  }}
                >
                  <h5 className="text-pink-600 font-semibold">Register Now</h5>
                </button>
              </div>
            </div>

            <div className="EventContBox mb-[5vh]">
              <h3 className="">About The Event</h3>

              {props.aboutContent ? (
                <RichText data={props.aboutContent} />
              ) : (
                <>
                  <p>
                    Get ready for the Super Chennai Quiz — a lively, high-energy quiz experience
                    that breaks away from the usual serious, brain-only quiz format. This is a quiz
                    for everyone, whether you’re a casual player, a triva lover, or someone who just
                    wants a fun afternoon with a friend.
                  </p>
                  <p>
                    Hosted at the iconic Sir Mutha Venkatasubba Rao Concert Hall, this quiz covers
                    all categories — from pop culture, music, films, sports, food, and general
                    knowledge to a sprinkle of city triva and surprise rounds. Expect fresh formats,
                    interactive twists, and fun challenges that keep the whole room buzzing.
                  </p>
                  <p>
                    Guiding the experience is Nawabzada Mohammed Asif Ali, Dewan to the Prince of
                    Arcot, adding heritage, wit, and charm to the afternoon.
                  </p>
                  <p>
                    <strong>What makes it special?</strong>
                  </p>
                  <ul style={{ paddingLeft: '30px' }} className="list-disc space-y-2">
                    <li>Not just for hardcore quizzers — totally beginner-friendly</li>
                    <li>
                      A mix of fun rounds, visual games, rapid-fire challenges & unexpected twists
                    </li>
                    <li>Covers a wide range of topics, so every team gets a chance to shine</li>
                    <li>
                      A warm, community-driven experience in one of Chennai’s most beautiful venues
                    </li>
                  </ul>
                  <p>
                    At just ₹199 per team of two, it’s the perfect plan for friends, couples,
                    siblings — anyone up for something different this weekend.
                  </p>
                  <p>
                    Register now and get ready for a quiz that’s equal parts fun, competitive, and
                    unforgettable.
                  </p>
                </>
              )}

              {/* Powered By Section */}
              <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-start gap-3 border-t border-gray-200 pt-6">
                <span className="text-gray-500 text-sm sm:text-base">Powered by</span>
                <img src={logoUrl} alt="Company Logo" className="h-12 sm:h-16 object-contain" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="EventRight w-full lg:w-[320px] bg-white rounded-lg shadow p-5 h-max border border-gray-100"
            id="mainBookNow"
          >
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              {props.eventTitle || 'Super Chennai Quiz'}
            </h4>

            <div className="space-y-3">
              <InfoRow
                icon="/images/events/calendar.png"
                label={sidebar.dateLabel || 'Sunday, December 7, 2025'}
              />
              <InfoRow icon="/images/events/time.png" label={sidebar.timeLabel || '2:00 PM'} />
              <InfoRow
                icon="/images/events/location.png"
                label={sidebar.locationLabel || 'Sir Mutha Venkatasubba Rao Concert Hall, Chennai'}
              />
              <InfoRow
                icon="/images/events/age_limit.png"
                label={sidebar.hostLabel || 'Hosted by: Nawabzada Mohammed Asif Ali'}
              />
              <InfoRow
                icon="/images/events/language.png"
                label={sidebar.teamsLabel || 'Teams: 2 members'}
              />
              <InfoRow
                icon="/images/events/genre.png"
                label={sidebar.feeLabel || 'Fee: ₹199 per team'}
              />
            </div>

            <div className="flex justify-center mt-6">
              <a href={sidebar.registerRoute || '/quizform'}>
                <button
                  disabled
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition capitalize cursor-pointer"
                >
                  Registration Closed
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="evderlinks flex items-center gap-3 border-b border-gray-100 pb-2 mb-2">
      <div className="iconsssec flex items-center justify-center w-5 h-5 shrink-0">
        <img src={icon} alt="icon" className="w-full h-full object-contain" />
      </div>
      <p className="text-gray-700 text-sm">{label}</p>
    </div>
  )
}
