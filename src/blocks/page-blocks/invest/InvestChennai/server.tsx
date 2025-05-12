'use client'

import React, { useRef, useEffect, useState } from 'react'
import './style.css'

type InvestChennaiProps = {
  heading?: string
  subHeading?: string
  description?: string
}

export default function InvestChennaiSection({
  heading,
  subHeading,
  description,
}: InvestChennaiProps) {
  const bgTextRef = useRef<HTMLDivElement>(null)
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDir((prev) => (prev === 'left' ? 'right' : 'left'))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!heading || !subHeading || !description) {
    return (
      <div className="InvestChennaiContainerFlex">
        <p style={{ color: 'red' }}>Error: Missing heading, sub-heading, or description.</p>
      </div>
    )
  }

  return (
    <div className="InvestChennaiContainerFlex">
      <div className="InvestChennaiContent">
        <h3>{heading}</h3>
        <h6>{subHeading}</h6>
        <p>{description}</p>
      </div>
      <div
        className={`InvestTextBackground ${
          scrollDir === 'right' ? 'scroll-rightInvestPage' : 'scroll-leftInvestPage'
        }`}
        ref={bgTextRef}
      >
        <p>Invest &nbsp; Chennai &nbsp; Invest &nbsp; Chennai</p>
      </div>
    </div>
  )
}
