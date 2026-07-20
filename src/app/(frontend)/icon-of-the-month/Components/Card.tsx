/* eslint-disable @next/next/no-img-element */

'use client'

import Link from 'next/link'
import React from 'react'

type Media = {
  id: number
  url: string
  alt?: string | null
  filename?: string
}

export type MonthCardData = {
  slug: string
  title: string
  shortDescription?: string
  profileImage?: Media
  month?: string
  year?: number
}

export const MonthCard: React.FC<{
  doc: MonthCardData
}> = ({ doc }) => {
  const { slug, title, profileImage, shortDescription, month, year } = doc

  const displayDate =
    month && year ? `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}` : ''

  const href = `/icon-of-the-month/${slug}`

  return (
    <Link href={href} className="superchennaiEventsSection">
      <div className="flex flex-col items-center text-center overflow-hidden">
        <img
          src={profileImage?.url}
          alt={profileImage?.alt || title}
          title={title}
          className="rounded-xl mb-3"
        />
        <p className="text-lg font-medium captalize">
          {slug
            .replace(/^icon-of-the-month-/, '')
            .split('-')
            .map((word) =>
              /^\d+$/.test(word) ? word : word.charAt(0).toUpperCase() + word.slice(1),
            )
            .join(' ')
            .replace(/^(\w+)\s(\d{4})$/, 'Icon of the Month - $1 $2')}
        </p>
      </div>
    </Link>
  )
}
