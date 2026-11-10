'use client'

import React from 'react'

type ItemText = {
  id?: string
  itemText: string
}

type ParaText = {
  id?: string
  text: string
}

type AIArtProps = {
  mainTitle?: string
  introParagraphs?: ParaText[]
  challengeBox?: {
    heading?: string
    description?: string
  }
  dealBox?: {
    heading?: string
    dealItems?: ItemText[]
    contactEmail?: string
  }
  payoffBox?: {
    heading?: string
    payoffItems?: ItemText[]
    closingParagraphs?: ParaText[]
  }
}

export default function AIArtChallengeSection(props: AIArtProps) {
  const intro = props.introParagraphs || []
  const challenge = props.challengeBox || {}
  const deal = props.dealBox || {}
  const dealItems = deal.dealItems || []
  const payoff = props.payoffBox || {}
  const payoffItems = payoff.payoffItems || []
  const closing = payoff.closingParagraphs || []

  return (
    <div className="visitIntroParaSection detailIntro py-12" style={{ paddingBottom: '0' }}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="workIntro !gap-0">
          {/* Main Title */}
          <h1 className="">{props.mainTitle || 'ai art challenge'}</h1>

          {/* Intro Paragraphs */}
          {intro.map((p, index) => (
            <p key={p.id || index} className="">
              {p.text}
            </p>
          ))}

          {/* The Challenge */}
          <div className="text-left w-full pt-4">
            <strong className="fontforstyle" style={{ color: '#995098', fontWeight: 'bolder' }}>
              {challenge.heading || 'The Challenge'}
            </strong>
            <p className="">
              {challenge.description ||
                "Create AI art that reimagines Chennai's future, its food, people, culture, music, landmarks, or anything that makes this city pulse with life."}
            </p>
          </div>

          <hr className="border-gray-200 my-6" />

          {/* The Deal */}
          <div className="text-left w-full">
            <div style={{ marginTop: '10px' }}>
              <strong
                className="fontforstyle block text-xl mb-3"
                style={{ color: '#995098', fontWeight: 'bolder' }}
              >
                {deal.heading || 'The Deal'}
              </strong>
              <ul className="listtypesection list-disc pl-6 space-y-2 text-gray-700 text-lg">
                {dealItems.map((item, index) => (
                  <li className="" key={item.id || index}>
                    <p className="!mt-0">{item.itemText}</p>
                  </li>
                ))}
                <li>
                  <p className="!mt-0">
                    Send entries to:{' '}
                    <a
                      style={{ color: '#0000EE' }}
                      href={`mailto:${deal.contactEmail || 'hello@superchennai.com'}`}
                      className="underline hover:opacity-80"
                    >
                      {' '}
                      {deal.contactEmail || 'hello@superchennai.com'}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-200 my-6" />

          {/* The Payoff */}
          <div className="text-left w-full space-y-4">
            <div style={{ marginTop: '10px' }}>
              <strong
                className="fontforstyle block text-xl mb-3"
                style={{ color: '#995098', fontWeight: 'bolder' }}
              >
                {payoff.heading || 'The Payoff'}
              </strong>
              <ul className="listtypesection">
                {payoffItems.map((item, index) => (
                  <li className="!mt-[10px]" key={item.id || index}>
                    <p className="!mt-0">{item.itemText}</p>
                  </li>
                ))}
              </ul>
            </div>

            {closing.map((p, index) => (
              <p key={p.id || index} className="pt-2">
                {p.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
