'use client'

import React from 'react'

type LetsTalkProps = {
  mainTitleLine1?: string
  mainTitleLine2?: string
  description?: string
  tagline?: string
  buttonText?: string
  buttonLink?: string
}

export default function LetsTalkChennaiSection(props: LetsTalkProps) {
  return (
    <div className="summerfestbg poppinsfamilyyy">
      <div className="container max-w-7xl mx-auto flex px-4">
        <div className="summerfestwidthss max-w-4xl">
          <h1 className="chennaiInvestmentsHeading !text-[#ec265b]">
            {props.mainTitleLine1 || 'Let’s talk'} <br />
            <span className="!text-[#6d4399]">{props.mainTitleLine2 || 'Chennai'}</span>
          </h1>

          <p className="mt-4 paragaraphhhhhsummerfest text-gray-700 leading-relaxed text-base lg:text-lg">
            {props.description ||
              'Let’s Talk Chennai is a celebration of the city we call home — its people, places, culture, creativity, energy, and everyday experiences. A space to explore what makes Chennai special, discover what’s happening around the city, and experience Chennai through different perspectives. From Visuals that capture its character, Trends that keep us connected, Ideas that inspire, Places that invite exploration, Champions who inspire us, Stories that bring people together, to Reels that capture Chennai in motion — every section brings a different side of the city to life.'}
          </p>

          <p className="mt-[10px] text-gray-900">
            <strong className="font-semibold">
              {props.tagline || 'One city. Many voices. Endless stories. Let’s Talk Chennai. ❤️'}
            </strong>
          </p>

          <div className="mt-6">
            <a
              href={props.buttonLink || 'https://letstalkchennai.com/'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-[#6d4399] text-white text-sm font-semibold rounded hover:bg-gray-800 transition cursor-pointer"
            >
              {props.buttonText || 'View More'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
