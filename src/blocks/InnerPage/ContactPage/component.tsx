'use client'

import React from 'react'
import { Mail, MapPin } from 'lucide-react'

type Media = {
  url?: string
  alt?: string
}

type AddressLine = {
  id?: string
  line?: string
}

type ContactProps = {
  title?: string
  description?: string
  logo?: Media | string
  logoAlt?: string
  addressLines?: AddressLine[]
  email?: string
  mapLink?: string
}

export default function ContactComponent(props: ContactProps) {
  console.log('🚀 Contact Block Props Data:', props)

  const {
    title = 'Contact Us',
    description,
    logo,
    logoAlt,
    addressLines = [],
    email,
    mapLink,
  } = props

  const getImageUrl = (img?: Media | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  const logoUrl = getImageUrl(logo)
  const imageAltText = logoAlt || (typeof logo === 'object' ? logo.alt : '') || title

  return (
    <section className="contactOut SecPadblock12">
      <div className="container max-w-7xl mx-auto">
        <section className="max-w-4xl mx-auto p-8 md:p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>

          {description && (
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {logoUrl && (
            <div className="mt-8">
              <img src={logoUrl} alt={imageAltText} className="mx-auto max-w-lg" />
            </div>
          )}

          {addressLines.length > 0 && (
            <div className="space-y-1">
              {addressLines.map((item, index) => (
                <p
                  key={item.id || index}
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.line || '' }}
                />
              ))}
            </div>
          )}

          {email && (
            <div className="flex justify-center items-center gap-3">
              <Mail className="text-primary" />
              <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                {email}
              </a>
            </div>
          )}

          {mapLink && (
            <div className="flex justify-center items-center gap-3">
              <MapPin className="text-primary" />
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}
