'use client'

import React from 'react'

type PayloadMedia = {
  url: string
  alt?: string
}

type FeatureItem = {
  id?: string
  title: string
  iconType?: string
  customIcon?: PayloadMedia | string
}

type MetroMadrasProps = {
  featuredImage?: PayloadMedia | string
  title?: string
  subtitle?: string
  paragraphs?: { text: string }[]
  quoteText?: string
  features?: FeatureItem[]
}

export default function MetroMadrasComponent({
  featuredImage = '/images/singlealone/MetroChennai.jpeg',
  title = 'METRO-VIL MADRAS DAY',
  subtitle = 'Chennai’s First Midnight Musical Ride',
  paragraphs = [
    { text: 'What if you could celebrate Madras Day… inside a Metro train? 🚇🎶' },
    {
      text: 'This Madras Day, Super Chennai and CMRL are bringing you a one-of-a-kind experience — a 90-minute midnight musical ride through Chennai, with live music, sing-alongs and Chennaiites coming together to celebrate the city we love.',
    },
  ],
  quoteText = '“Somewhere between the last Metro train and the first light of Madras Day, Chennai came together and sang.”',
  features = [
    { title: 'LIVE MUSIC', iconType: 'music' },
    { title: 'MIDNIGHT RIDE', iconType: 'train' },
    { title: '90 MINS DURATION', iconType: 'clock' },
    { title: 'CMRL SPECIAL', iconType: 'location' },
  ],
}: MetroMadrasProps) {
  const imageUrl = typeof featuredImage === 'object' ? featuredImage?.url : featuredImage

  const renderIcon = (feature: FeatureItem) => {
    const customIconUrl =
      typeof feature.customIcon === 'object' ? feature.customIcon?.url : feature.customIcon

    if (customIconUrl) {
      return <img src={customIconUrl} alt={feature.title} className="w-6 h- object-contain" />
    }

    switch (feature.iconType) {
      case 'train':
        return (
          <svg
            className="w-8 h-8 text-[#0A1B3D]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16l-1.5 3M16 16l1.5 3M4 11h16M4 5h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM9 11v.01M15 11v.01"
            />
          </svg>
        )
      case 'clock':
        return (
          <svg
            className="w-6 h-6 text-[#0A1B3D]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case 'location':
        return (
          <svg
            className="w-6 h-6 text-[#0A1B3D]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )
      case 'music':
      default:
        return (
          <svg
            className="w-6 h-6 text-[#0A1B3D]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        )
    }
  }

  return (
    <section className="container max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800 paddingsectionntop poppinsfamilyyy">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-stretch gap-8 mb-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl || '/images/singlealone/MetroChennai.jpeg'}
            alt={title}
            className="w-full h-full object-cover rounded-2xl shadow-sm min-h-[300px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5 py-2">
          {/* Main Title with Blue Accent Line */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-10 bg-[#0A1B3D] inline-block shrink-0"></span>
            <h2 className="headingsection text-[#0A1B3D] text-2xl md:text-3xl font-black uppercase">
              {title}
            </h2>
          </div>

          {/* Paragraph Content */}
          <div className="space-y-4 text-[#000]">
            {subtitle && <p className="font-semibold text-lg text-[#01236a]">{subtitle}</p>}

            {paragraphs?.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p.text}
              </p>
            ))}

            {quoteText && (
              <p className="italic text-gray-600 border-l-2 border-[#01236a] pl-3 py-1">
                {quoteText}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Features Bar */}
      {features && features.length > 0 && (
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between border-t border-gray-100 pt-8 gap-6">
          {features.map((feature, index) => (
            <React.Fragment key={feature.id || index}>
              <div className="flex items-center gap-3 flex-1 justify-center min-w-[180px]">
                {renderIcon(feature)}
                <span className="font-bold text-xs md:text-sm text-gray-800 uppercase">
                  {feature.title}
                </span>
              </div>
              {/* Divider line except for the last item */}
              {index < features.length - 1 && (
                <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  )
}
