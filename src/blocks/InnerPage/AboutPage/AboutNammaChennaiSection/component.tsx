'use client'

import React from 'react'

type SoundtrackSecProps = {
  sectionId?: string
  mainHeader?: string
  subHeader?: string
  paragraph1?: string
  paragraph2?: string
  tagline?: string
  footerHeading?: string
}

export default function AboutNammaChennaiComponent({
  sectionId = 'NumChennaiSec',
  mainHeader = "Chennai's",
  subHeader = 'Soundtrack pulses with <br>kuthu, gaana, hip-hop <br>and indie beats.',
  paragraph1 = 'Its food scene is just as dynamic, from sushi bars to taco joints, <br>Korean cafés to soulful biryanis, where every meal is a mix of flavors as diverse as its people.',
  paragraph2 = 'Whether it’s skaters carving through the streets, surfers riding the waves, <br>or storytellers capturing moments, Chennai is a city in motion-always evolving, always alive. <br>This is Chennai redefined-bold, vibrant, and unapologetically modern. <br>Super Chennai isn’t just a place to live-it’s where the <br>future is being shaped,',
  tagline = 'one beat, one bite, & <br>one breakthrough at a time.',
  footerHeading = 'It’s hot. <br>It’s happening. <br>And it’s home.',
}: SoundtrackSecProps) {
  return (
    <section className="NumChennaiSec SecPaddBlock" id={sectionId}>
      <div className="flex flex-col container max-w-7xl mx-auto px-4">
        <div className="tsSectitles">
          {mainHeader && (
            <h2>
              <span dangerouslySetInnerHTML={{ __html: mainHeader }} />
            </h2>
          )}

          {subHeader && (
            <h5>
              <span dangerouslySetInnerHTML={{ __html: subHeader }} />
            </h5>
          )}

          {paragraph1 && (
            <p>
              <span dangerouslySetInnerHTML={{ __html: paragraph1 }} />
            </p>
          )}

          {paragraph2 && (
            <p>
              <span dangerouslySetInnerHTML={{ __html: paragraph2 }} />
            </p>
          )}

          {tagline && (
            <h6>
              <span dangerouslySetInnerHTML={{ __html: tagline }} />
            </h6>
          )}

          {footerHeading && (
            <h3>
              <span dangerouslySetInnerHTML={{ __html: footerHeading }} />
            </h3>
          )}
        </div>
      </div>
    </section>
  )
}
