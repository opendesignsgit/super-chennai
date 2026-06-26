/* eslint-disable @next/next/no-img-element */
'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import {
  User,
  Briefcase,
  Tag,
  CalendarDays,
  Quote,
  Trophy,
  Globe,
  Linkedin,
  Instagram,
  Twitter,
} from 'lucide-react'

export default function IconOfMonthDetails() {
  const params = useParams()
  const slug = params?.slug as string

  const [icon, setIcon] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      fetchIcon(slug)
    }
  }, [slug])

  const fetchIcon = async (iconSlug: string) => {
    try {
      setLoading(true)

      const res = await axios.get(`/api/icon-of-month/${iconSlug}`)

      setIcon(res?.data?.doc || null)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16">
        <div className="">
          <div className="animate-pulse space-y-4">
            <div className="h-[400px] rounded-3xl bg-gray-200" />
            <div className="h-10 w-64 rounded bg-gray-200" />
            <div className="h-6 w-full rounded bg-gray-200" />
          </div>
        </div>
      </section>
    )
  }

  if (!icon) return null

  const personName = icon?.personName || ''
  const designation = icon?.designation || ''
  const category = icon?.category?.title || ''
  const month = icon?.month || ''
  const year = icon?.year || ''
  const shortDescription = icon?.shortDescription || ''
  const quote = icon?.quote || ''
  const achievements = icon?.achievements || []
  const socialLinks = icon?.socialLinks || {}
  console.log('icon-data-detailpage', icon)
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-8xl px-4">
        {/* Cover Image */}
        {icon?.coverImage?.url && (
          <div className="mb-12 overflow-hidden rounded-3xl">
            <img
              src={icon.coverImage.url}
              alt={personName}
              className="h-[450px] w-full object-cover"
            />
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg">
              {icon?.profileImage?.url && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={icon.profileImage.url}
                    alt={personName}
                    className="h-52 w-52 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </div>
              )}

              <h1 className="text-center text-3xl font-bold">{personName}</h1>

              <p className="mt-2 text-center text-gray-600">{designation}</p>

              <div className="mt-8 space-y-4">
                {category && (
                  <InfoCard icon={<Tag size={20} />} title="Category" value={category} />
                )}

                {(month || year) && (
                  <InfoCard
                    icon={<CalendarDays size={20} />}
                    title="Featured Month"
                    value={`${month} ${year}`}
                  />
                )}
              </div>

              {(socialLinks.website ||
                socialLinks.linkedin ||
                socialLinks.twitter ||
                socialLinks.instagram) && (
                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-bold">Social Links</h3>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.website && (
                      <a
                        href={socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border px-3 py-2 transition hover:bg-gray-50"
                      >
                        <Globe size={18} />
                      </a>
                    )}

                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border px-3 py-2 transition hover:bg-gray-50"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}

                    {socialLinks.twitter && (
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border px-3 py-2 transition hover:bg-gray-50"
                      >
                        <Twitter size={18} />
                      </a>
                    )}

                    {socialLinks.instagram && (
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border px-3 py-2 transition hover:bg-gray-50"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <User className="text-[#005B70]" />
                <h2 className="text-2xl font-bold">About {personName}</h2>
              </div>

              <p className="leading-8 text-gray-700">{shortDescription}</p>
            </div>

            {quote && (
              <div className="rounded-3xl border-l-4 border-[#FCBA13] bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <Quote className="text-[#FCBA13]" />
                  <h3 className="text-xl font-bold">Inspirational Quote</h3>
                </div>

                <blockquote className="text-lg italic text-gray-700">
                  &quot;{quote}&quot;
                </blockquote>
              </div>
            )}

            {achievements.length > 0 && (
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <Trophy className="text-[#FCBA13]" />
                  <h3 className="text-2xl font-bold">Key Achievements</h3>
                </div>

                <div className="space-y-4">
                  {achievements.map((item: any) => (
                    <div key={item.id} className="rounded-xl border border-gray-100 p-4">
                      {item.achievement}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="text-[#005B70]" />
                <h3 className="text-2xl font-bold">Profile Information</h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InfoCard icon={<User size={20} />} title="Name" value={personName} />

                <InfoCard icon={<Briefcase size={20} />} title="Designation" value={designation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-4">
      <div className="rounded-xl bg-[#005B70]/10 p-3 text-[#005B70]">{icon}</div>

      <div>
        <h4 className="text-sm font-semibold text-gray-500">{title}</h4>
        <p className="mt-1 font-medium text-gray-900">{value}</p>
      </div>
    </div>
  )
}
