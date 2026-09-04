'useClient'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  Timer,
  MapPin,
  Languages,
  UserCheck,
  Ticket,
  Users,
  Sparkles,
} from 'lucide-react'

type Props = {
  heading?: string
  subHeading?: string
  description?: string
}

export default function EventQuickDetailsComponent({
  heading = 'EVENT HIGHLIGHTS & DETAILS',
  subHeading = 'AT A GLANCE',
  description,
}: Props) {
  const params = useParams()
  const slug = params?.slug

  const [details, setDetails] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (slug) {
      fetchEventDetails()
    }
  }, [slug])

  const fetchEventDetails = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`/api/whats-ap-chennai?where[slug][equals]=${slug}`)
      const doc = res?.data?.docs?.[0]
      setDetails(doc?.details || null)
    } catch (error) {
      console.error('Error fetching event details:', error)
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }

  /* ======================================================
     FORMATTERS & HELPERS
  ====================================================== */
  const formatTime = (timeStr?: string) => {
    if (!timeStr) return null
    const date = new Date(timeStr)
    return isNaN(date.getTime())
      ? timeStr
      : date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
  }

  const formatDateList = (dates: any) => {
    if (!dates) return null

    if (Array.isArray(dates) && dates.length > 0) {
      const formatted = dates
        .map((item) => {
          const raw = typeof item === 'string' ? item : item?.date
          if (!raw) return null
          const d = new Date(raw)
          return isNaN(d.getTime())
            ? null
            : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        })
        .filter(Boolean)

      if (formatted.length === 0) return null

      const firstRaw = typeof dates[0] === 'string' ? dates[0] : dates[0]?.date
      const year = firstRaw ? new Date(firstRaw).getFullYear() : ''
      return `${formatted.join(', ')}${year ? ` ${year}` : ''}`
    }

    if (typeof dates === 'string') {
      const d = new Date(dates)
      return isNaN(d.getTime())
        ? dates
        : d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
    }

    return null
  }

  /* ======================================================
     LOADING SKELETON
  ====================================================== */
  if (loading) {
    return (
      <section className="bg-stone-50/60 border border-stone-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 my-8 shadow-sm animate-pulse">
        <div className="h-4 w-32 bg-stone-200 rounded-full mb-3" />
        <div className="h-8 w-64 bg-stone-200 rounded-full mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-stone-200 rounded-2xl" />
          ))}
        </div>
      </section>
    )
  }

  if (!details) return null

  // Resolve Values
  const {
    duration,
    eventTime,
    ageLimit,
    language,
    languages,
    location,
    isFree,
    familyFriendly,
    isFamilyFriendly,
    eventDates,
  } = details

  const resolvedLanguages = language || languages
  const resolvedFamilyFriendly =
    familyFriendly !== undefined ? familyFriendly : isFamilyFriendly

  const parsedTime = formatTime(eventTime)
  const parsedDates = formatDateList(eventDates)
  const parsedLanguages = Array.isArray(resolvedLanguages)
    ? resolvedLanguages
        .map((lang: string) => lang.charAt(0).toUpperCase() + lang.slice(1))
        .join(', ')
    : resolvedLanguages

  const locationLabel =
    location?.label ||
    location?.locality ||
    location?.city ||
    (typeof location === 'string' ? location : null)

  const hasValidData =
    duration ||
    parsedTime ||
    ageLimit ||
    parsedLanguages ||
    locationLabel ||
    parsedDates ||
    isFree !== undefined ||
    resolvedFamilyFriendly !== undefined

  if (!hasValidData) return null

  return (
    <section className="bg-stone-50/80 border border-stone-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 my-8 shadow-sm relative overflow-hidden">
      {/* Background Decorator */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#A34493]/5 blur-2xl" />

      {/* Header */}
      <div className="mb-6">
        {subHeading && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#8B3C82] uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            {subHeading}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl font-normal tracking-wide text-stone-900 font-['New_Amsterdam'] uppercase">
          {heading}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Dates */}
        {parsedDates && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Event Dates
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {parsedDates}
              </span>
            </div>
          </motion.div>
        )}

        {/* Time */}
        {parsedTime && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Event Time
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {parsedTime}
              </span>
            </div>
          </motion.div>
        )}

        {/* Duration */}
        {duration && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Duration
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {duration} {typeof duration === 'number' || !isNaN(Number(duration)) ? 'Hours' : ''}
              </span>
            </div>
          </motion.div>
        )}

        {/* Location */}
        {locationLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Location
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {locationLabel}
              </span>
            </div>
          </motion.div>
        )}

        {/* Languages */}
        {parsedLanguages && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Languages
              </span>
              <span className="text-sm font-semibold text-stone-800 capitalize">
                {parsedLanguages}
              </span>
            </div>
          </motion.div>
        )}

        {/* Age Limit */}
        {ageLimit && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Minimum Age
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {ageLimit}+ Years
              </span>
            </div>
          </motion.div>
        )}

        {/* Entry Fee */}
        {isFree !== undefined && isFree !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Entry Fee
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {isFree ? 'Free Entry' : 'Paid Entry'}
              </span>
            </div>
          </motion.div>
        )}

        {/* Family Friendly */}
        {resolvedFamilyFriendly !== undefined && resolvedFamilyFriendly !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-stone-200/60 shadow-xs"
          >
            <div className="p-2.5 rounded-xl bg-[#A34493]/10 text-[#A34493] flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-stone-400 uppercase tracking-wider">
                Audience
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {resolvedFamilyFriendly ? 'Family Friendly' : 'General Audience'}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}