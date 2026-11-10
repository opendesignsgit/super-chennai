'use client'

import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText' // Or fallback content if richText is empty

type CarRallyProps = {
  eventTitle?: string
  bannerImage?: { url?: string } | string
  categoryLabel?: string
  aboutDateHighlight?: string
  aboutContent?: any
  sidebarDetails?: {
    dateLabel?: string
    timeLabel?: string
    durationLabel?: string
    capacityLabel?: string
    priceLabel?: string
    locationLabel?: string
    showBookNow?: boolean
    bookNowLink?: string
  }
}

export default function CarRallyComponent(props: CarRallyProps) {
  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  const bannerImgUrl = getImageUrl(props.bannerImage, '/images/events/car-rally.jpg')
  const sidebar = props.sidebarDetails || {}

  return (
    <div className="poppinsfamilyyy">
      {/* Event Content Section */}
      <section className="EventsBanSec SecPadblock12 py-12">
        <div className="container max-w-7xl mx-auto">
          <div className="EventContBox flex flex-wrap">
            {/* Left Side */}
            <div className="EventLeft">
              <h2 className="">{props.eventTitle || 'Super Chennai Car Treasure Hunt'}</h2>

              <div className="EventBanImg mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={bannerImgUrl}
                  alt={props.eventTitle || 'Car Rally'}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  <h5 className="">{props.categoryLabel || 'Car Treasure Hunt'}</h5>
                </div>
              </div>

              <div className="EventContBox mb-[5vh]">
                <h3 className="">About The Event</h3>

                {props.aboutContent ? (
                  <RichText data={props.aboutContent} />
                ) : (
                  <>
                    <p>
                      <strong>
                        {props.aboutDateHighlight ||
                          'Celebrating the Spirit of the City | August 17, 2025'}
                      </strong>
                    </p>
                    <p>
                      Get ready, Chennai! This Madras Week, we’re hitting the streets for a
                      one-of-a-kind Car Treasure Hunt that celebrates the stories, spirit, and soul
                      of our city.
                    </p>
                    <p>
                      <strong>What is it?</strong>
                    </p>
                    <p>
                      An exciting, city-wide treasure hunt on wheels. Teams will drive across
                      Chennai solving clues, completing quirky challenges, and discovering iconic
                      spots — old, new, and hidden in plain sight. From local legends to cultural
                      gems, this is your chance to explore Chennai like never before.
                    </p>
                    <p>
                      <strong>What to Expect</strong>
                    </p>
                    <ul style={{ paddingLeft: '30px' }} className="list-disc space-y-2">
                      <li>A city trail filled with fun clues, pit stops, and local trivia</li>
                      <li>Tasks at each location — from street food challenges to photo ops</li>
                      <li>Goodie bags and exciting prizes for top finishers</li>
                      <li>
                        A great way to celebrate Madras Day with family, friends, or coworkers
                      </li>
                      <li>Media coverage and surprise elements along the way</li>
                    </ul>
                    <p className="pt-2">
                      <strong>Who Can Join</strong>
                    </p>
                    <p>
                      Anyone with a car and a sense of adventure. Families, students, working
                      professionals, or curious citizens — this event is open to all.
                    </p>
                    <p className="pt-2">
                      <strong>Why Join</strong>
                    </p>
                    <p>
                      Because Chennai is more than just a city — it’s a living story. Let’s
                      celebrate its charm, its chaos, its colours — together. This isn’t just a
                      race. It’s a journey through Madras. Fun guaranteed. City pride unlocked.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="EventRight">
              <div className="evderibox mt-[70px]">
                <div className="evderListbox">
                  <div className="evderViewbox">
                    <InfoRow
                      icon="/images/events/calendar.png"
                      label={sidebar.dateLabel || 'Sunday, August 17, 2025'}
                    />
                    <InfoRow
                      icon="/images/events/time.png"
                      label={sidebar.timeLabel || '8:30 AM'}
                    />
                    <InfoRow
                      icon="/images/events/time.png"
                      label={sidebar.durationLabel || 'Duration : 2hrs'}
                    />
                    <InfoRow
                      icon="/images/events/age_limit.png"
                      label={sidebar.capacityLabel || 'Up to 4 people per car'}
                    />
                    <InfoRow
                      icon="/images/events/language.png"
                      label={sidebar.priceLabel || '₹1250 per car'}
                    />
                    <InfoRow
                      icon="/images/events/location.png"
                      label={sidebar.locationLabel || 'Lady Andal School, Chetpet'}
                    />
                  </div>
                </div>

                {sidebar.showBookNow && (
                  <div className="flex justify-center pb-[10px] mt-6">
                    <Link href={sidebar.bookNowLink || '/carrallyform'}>
                      <button
                        className="cursor-pointer transition hover:bg-[#8f3681]"
                        style={{
                          background: '#a44294',
                          marginTop: '15px',
                          color: 'white',
                          padding: '8px 20px',
                          borderRadius: '5px',
                          fontFamily: 'Poppins',
                          fontWeight: 500,
                        }}
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="evderlinks flex items-center mb-3">
      <div className="iconsssec flex items-center w-6 h-6 mr-2">
        <img src={icon} alt="icon" className="w-full h-full object-contain" />
      </div>
      <p className="">{label}</p>
    </div>
  )
}
