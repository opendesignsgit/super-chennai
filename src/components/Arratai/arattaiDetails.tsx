'use client'

import ArattaiWithVivekKarunakaranEmail from '@/utilities/Arattai/ArattaiWithVivekKarunakaranEmail'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { render } from '@react-email/render'

interface CustomField {
  id?: string
  label: string
  fieldName: string
  fieldType: string
  required?: boolean
  placeholder?: string
  options?: {
    label: string
    value: string
  }[]
}

interface ArattaiDetailsProps {
  data: any
}

const ArattaiDetails: React.FC<ArattaiDetailsProps> = ({ data }) => {
  const [otp, setOtp] = useState('')
  const [generatedOtp, setGeneratedOtp] = useState('')
  const [otpVerified, setOtpVerified] = useState(false)
  const [sendingOtp, setSendingOtp] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)
  const arattai = data?.Arattai

  console.log('arattai', data)

  const registrationSettings = arattai?.registrationSettings
  const customFields: CustomField[] = arattai?.customFields || []
  const [formData, setFormData] = useState<Record<string, any>>({})

  if (!data || !arattai) return null

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const formatTime = (dateStr: string) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  }

  const { title, shortDescription, speakerName, speakerDesignation, speakerImage, eventDetails } =
    arattai

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const validateForm = () => {
    for (const field of customFields) {
      if (field.required && !formData[field.fieldName]) {
        toast.error(`${field.label} is required`)
        return false
      }
    }

    return true
  }

  {
    /* ================= FORM SUBMIT     ================= */
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    if (!otpVerified) {
      toast.error('Please verify OTP')
      return
    }

    try {
      setLoading(true)

      /* ================= EMAIL HTML ================= */

      const emailHtml = await render(
        <ArattaiWithVivekKarunakaranEmail
          title={title}
          speakerName={speakerName}
          values={formData}
          eventDate={formatDate(eventDetails?.eventDate)}
          venue={`${eventDetails?.venue || ''} ${eventDetails?.city || ''}`}
          thankYouMessage={registrationSettings?.thankYouMessage}
        />,
      )

      /* ================= API ================= */

      await axios.post('/api/arattai-registration', {
        arattaiId: data?.id,
        slug: data?.slug,
        values: formData,
        emailTemplate: emailHtml,
      })

      toast.success(registrationSettings?.thankYouMessage || 'Registration submitted successfully')

      setFormData({})
      setShowPopup(false)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Submission failed')
    } finally {
      setLoading(false)
    }
  }

  {
    /* ================= SEND OTP MOBILE    ================= */
  }

  const sendOtpToMobile = async () => {
    try {
      const mobileField = customFields.find(
        (field) =>
          field.fieldType === 'number' ||
          field.fieldName.toLowerCase().includes('mobile') ||
          field.fieldName.toLowerCase().includes('phone'),
      )

      const mobile = mobileField ? formData[mobileField.fieldName] : ''

      if (!mobile) {
        toast.error('Enter mobile number')
        return
      }

      if (String(mobile).length < 10) {
        toast.error('Enter valid mobile number')
        return
      }

      const newOtp = Math.floor(100000 + Math.random() * 900000).toString()

      setGeneratedOtp(newOtp)

      setSendingOtp(true)

      await axios.post('/api/send-otp', {
        mobile,
        otp: newOtp,
      })

      toast.success('OTP sent successfully')
    } catch (error: any) {
      console.log(error)

      toast.error('Failed to send OTP')
    } finally {
      setSendingOtp(false)
    }
  }
  {
    /* ================= VERIFY OTP   ================= */
  }

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpVerified(true)
      toast.success('OTP verified successfully')
    } else {
      toast.error('Invalid OTP')
    }
  }

  {
    /* ================= FILEDS FOR FORM  ================= */
  }

  const renderField = (field: CustomField) => {
    const isPhoneField =
      field.fieldType === 'number' ||
      field.fieldName.toLowerCase().includes('mobile') ||
      field.fieldName.toLowerCase().includes('phone')

    switch (field.fieldType) {
      case 'textarea':
        return (
          <textarea
            name={field.fieldName}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.fieldName] || ''}
            onChange={(e) => handleChange(field.fieldName, e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-4"
          />
        )

      case 'select':
        return (
          <select
            name={field.fieldName}
            required={field.required}
            value={formData[field.fieldName] || ''}
            onChange={(e) => handleChange(field.fieldName, e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-4"
          >
            <option value="">Select {field.label}</option>

            {field.options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )

      case 'email':
        return (
          <input
            type="email"
            name={field.fieldName}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.fieldName] || ''}
            onChange={(e) => handleChange(field.fieldName, e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-4"
          />
        )

      case 'number':
      case 'text':
        if (isPhoneField) {
          return (
            <div className="space-y-4 w-full">
              <input
                type="tel"
                name={field.fieldName}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.fieldName] || ''}
                onChange={(e) => handleChange(field.fieldName, e.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-4 py-4"
              />

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={sendOtpToMobile}
                  disabled={sendingOtp}
                  className="rounded-xl bg-pink-600 px-5 py-3 text-white"
                >
                  {sendingOtp ? 'Sending...' : 'Send OTP'}
                </button>

                {otpVerified && (
                  <div className="rounded-xl bg-green-100 px-4 py-3 text-green-700">Verified ✓</div>
                )}
              </div>

              {!otpVerified && generatedOtp && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-3"
                  />

                  <button
                    type="button"
                    onClick={verifyOtp}
                    className="rounded-xl bg-black px-5 py-3 text-white"
                  >
                    Verify OTP
                  </button>
                </div>
              )}
            </div>
          )
        }

        return (
          <input
            type="text"
            name={field.fieldName}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.fieldName] || ''}
            onChange={(e) => handleChange(field.fieldName, e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-4"
          />
        )

      default:
        return (
          <input
            type="text"
            name={field.fieldName}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.fieldName] || ''}
            onChange={(e) => handleChange(field.fieldName, e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-4"
          />
        )
    }
  }

  /* ---------------------------------------------
   LEXICAL HELPERS
--------------------------------------------- */

  const FORMAT = {
    BOLD: 1,
    UNDERLINE: 1 << 1,
    ITALIC: 1 << 3,
  }

  const renderTextChildren = (children: any[], allowFormatting = true): React.ReactNode => {
    if (!Array.isArray(children)) return null

    return children.map((child: any, i: number) => {
      /* ---------------- TEXT ---------------- */
      if (child.type === 'text') {
        let element: React.ReactNode = child.text

        if (allowFormatting) {
          if (child.format & FORMAT.BOLD) {
            element = <strong>{element}</strong>
          }

          if (child.format & FORMAT.ITALIC) {
            element = <em>{element}</em>
          }

          if (child.format & FORMAT.UNDERLINE) {
            element = <u>{element}</u>
          }
        }

        return <span key={i}>{element}</span>
      }

      /* ---------------- LINK ---------------- */
      if (child.type === 'link') {
        return (
          <a
            key={i}
            href={child.fields?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline underline-offset-4 hover:text-pink-700 transition"
          >
            {renderTextChildren(child.children, true)}
          </a>
        )
      }

      /* ---------------- LINE BREAK ---------------- */
      if (child.type === 'linebreak') {
        return <br key={i} />
      }

      /* ---------------- NESTED ---------------- */
      if (child.children) {
        return <span key={i}>{renderTextChildren(child.children, allowFormatting)}</span>
      }

      return null
    })
  }

  /* ---------------------------------------------
   MAIN LEXICAL PARSER
--------------------------------------------- */

  const parseLexical = (content: any): React.ReactNode => {
    if (!content?.root?.children) return null

    const headingClasses: Record<string, string> = {
      h1: 'blog-h1',
      h2: 'blog-h2',
      h3: 'blog-h3',
      h4: 'blog-h4',
      h5: 'blog-h5',
      h6: 'blog-h6',
    }

    return content.root.children.map((node: any, idx: number) => {
      /* ---------------- PARAGRAPH ---------------- */
      if (node.type === 'paragraph') {
        return (
          <p key={idx} className="mb-5 text-lg leading-[1.9] text-gray-700">
            {renderTextChildren(node.children)}
          </p>
        )
      }

      /* ---------------- HEADING ---------------- */
      if (node.type === 'heading') {
        const tagName = (node.tag || 'h2') as keyof typeof headingClasses

        const Tag = (node.tag || 'h2') as React.ElementType

        return (
          <Tag key={idx} className={headingClasses[tagName] || headingClasses.h2}>
            {renderTextChildren(node.children)}
          </Tag>
        )
      }

      /* ---------------- LIST ---------------- */
      if (node.type === 'list') {
        const ListTag = node.listType === 'number' ? 'ol' : 'ul'

        return (
          <ListTag
            key={idx}
            className={`mb-6 space-y-3 pl-6 text-gray-700 ${
              node.listType === 'number' ? 'list-decimal' : 'list-disc'
            }`}
          >
            {node.children?.map((child: any, i: number) => (
              <li key={i}>{renderTextChildren(child.children)}</li>
            ))}
          </ListTag>
        )
      }

      /* ---------------- UPLOAD IMAGE ---------------- */
      if (node.type === 'upload') {
        const image = node.value

        if (!image?.url) return null

        return (
          <div key={idx} className="my-10 overflow-hidden rounded-3xl">
            <Image
              src={image.url}
              alt={image.alt || 'Image'}
              width={1200}
              height={700}
              className="w-full h-auto object-cover rounded-3xl"
            />

            {image.caption && (
              <p className="mt-3 text-center text-sm italic text-gray-500">{image.caption}</p>
            )}
          </div>
        )
      }

      /* ---------------- BLOCKS ---------------- */
      if (node.type === 'block') {
        const blockType = node.fields?.blockType

        /* =============================================
         MEDIA BLOCK
      ============================================= */
        if (blockType === 'mediaBlock') {
          const media = node.fields?.media
          const link = node.fields?.link
          const thumbnail = node.fields?.thumbnail

          if (!media?.url) return null

          const mainImage = (
            <Image
              src={media.url}
              alt={media.alt || 'Media'}
              width={1200}
              height={700}
              className="w-full h-full object-cover rounded-3xl"
            />
          )

          return (
            <figure key={idx} className="my-12 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                {link?.url ? (
                  <a
                    href={link.url}
                    target={link.newTab ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {mainImage}
                  </a>
                ) : (
                  mainImage
                )}

                {/* THUMBNAIL */}
                {thumbnail?.url && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {link?.url ? (
                      <a
                        href={link.url}
                        target={link.newTab ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={thumbnail.url}
                          alt="Thumbnail"
                          width={90}
                          height={90}
                          className="rounded-full border-4 border-white shadow-2xl object-cover"
                        />
                      </a>
                    ) : (
                      <Image
                        src={thumbnail.url}
                        alt="Thumbnail"
                        width={90}
                        height={90}
                        className="rounded-full border-4 border-white shadow-2xl object-cover"
                      />
                    )}
                  </div>
                )}
              </div>

              {media.caption && (
                <figcaption className="mt-4 text-center text-sm italic text-gray-500">
                  {media.caption}
                </figcaption>
              )}
            </figure>
          )
        }

        /* =============================================
         VIDEO BLOCK
      ============================================= */
        if (blockType === 'videoBlock') {
          const source = node.fields?.source
          const url = node.fields?.url
          const media = node.fields?.media
          const thumbnail = node.fields?.thumbnail

          if (!url) return null

          /* ---------- YOUTUBE ---------- */
          if (source === 'youtube') {
            let videoId = ''

            if (url.includes('youtube.com/watch')) {
              videoId = url.split('v=')[1]?.split('&')[0]
            } else if (url.includes('youtu.be/')) {
              videoId = url.split('youtu.be/')[1]?.split('?')[0]
            }

            const embedUrl = `https://www.youtube.com/embed/${videoId}`

            return (
              <div key={idx} className="my-12">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <iframe
                    className="aspect-video w-full"
                    src={embedUrl}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )
          }

          /* ---------- INSTAGRAM ---------- */
          if (source === 'instagram') {
            const thumbUrl = thumbnail?.url || media?.url

            return (
              <div key={idx} className="relative my-12 overflow-hidden rounded-3xl shadow-xl">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-[500px] w-full"
                >
                  <Image src={thumbUrl} alt="Instagram" fill className="object-cover" />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            )
          }

          /* ---------- NORMAL VIDEO ---------- */
          return (
            <div key={idx} className="my-12">
              <video controls className="w-full rounded-3xl shadow-xl" src={url} />
            </div>
          )
        }

        return null
      }

      return null
    })
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        toastStyle={{ zIndex: 9999999 }}
        style={{ zIndex: 9999999 }}
      />

      {/* ================= CONTENT ================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves">
              <h3>{title}</h3>

              <div className="space-y-6">
                <div className="mt-5  border-gray-100 pt-10">
                  <div className="max-w-3xl mx-auto">{parseLexical(data?.content)}</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-8 py-12">
              <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-pink-400/20 blur-3xl"></div>

              <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-violet-400/20 blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                <div className="max-w-3xl text-gray-700 leading-relaxed">
                  <div>
                    <span className="inline-block bg-[#7c3aed] text-white text-sm px-4 py-2 rounded-full mb-4">
                      Featured Speaker
                    </span>

                    <h2 className="text-3xl font-bold mb-2">{speakerName}</h2>

                    <p className="text-[#7c3aed] font-semibold text-lg mb-4">
                      {speakerDesignation}
                    </p>

                    <p className="text-gray-600 leading-relaxed">{shortDescription}</p>
                  </div>
                </div>
                {/* EVENT INFO */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="relative w-[220px] h-[220px] rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={speakerImage?.url || '/fallback-speaker.jpg'}
                      alt={speakerName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 px-5 py-4 shadow-sm border border-rose-100">
                    <p className="text-xs uppercase tracking-[2px] text-rose-500 font-semibold mb-1">
                      Event Date
                    </p>

                    <h4 className="font-bold text-gray-900">
                      {formatDate(eventDetails?.eventDate)}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 px-5 py-4 shadow-sm border border-violet-100">
                    <p className="text-xs uppercase tracking-[2px] text-violet-500 font-semibold mb-1">
                      Venue
                    </p>

                    <h4 className="font-bold text-gray-900">{eventDetails?.venue}</h4>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-4 shadow-sm border border-cyan-100">
                    <p className="text-xs uppercase tracking-[2px] text-cyan-600 font-semibold mb-1">
                      City
                    </p>

                    <h4 className="font-bold text-gray-900">{eventDetails?.city}</h4>
                  </div>
                </div>

                {/* BUTTON */}
                {registrationSettings?.isRegistrationOpen && (
                  <button
                    onClick={() => setShowPopup(true)}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-white animate-pulse"></span>
                      Register Now
                    </span>

                    <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0"></div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REGISTER POPUP ================= */}

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
            >
              {/* TOP GRADIENT */}
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600"></div>

              {/* HEADER */}
              <div className="relative border-b border-gray-100 px-8 py-7">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-red-500 hover:text-white"
                >
                  ×
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-2xl text-white shadow-lg">
                    🎤
                  </div>

                  <div>
                    <p className="mb-1 text-sm font-semibold uppercase tracking-[3px] text-rose-500">
                      Event Registration
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900">Register for {title}</h2>

                    <p className="mt-2 text-gray-500">
                      Fill in your details to confirm participation
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form onSubmit={submitForm} className="max-h-[75vh] overflow-y-auto px-8 py-8">
                {/* EVENT INFO CARD */}
                <div className="mb-8 rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 p-6">
                  <div className="grid gap-5 md:grid-cols-3">
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500">Event Date</p>

                      <h4 className="font-semibold text-gray-900">
                        {formatDate(eventDetails?.eventDate)}
                      </h4>
                    </div>

                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500">Time</p>

                      <h4 className="font-semibold text-gray-900">
                        {formatTime(eventDetails?.eventDate)}
                      </h4>
                    </div>

                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500">Venue</p>

                      <h4 className="font-semibold text-gray-900">
                        {eventDetails?.venue}, {eventDetails?.city}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* FORM FIELDS */}
                <div className="grid gap-6 md:grid-cols-2">
                  {customFields.map((field, index) => (
                    <div
                      key={index}
                      className={field.fieldType === 'textarea' ? 'md:col-span-2' : ''}
                    >
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {field.label}

                        {field.required && <span className="ml-1 text-red-500">*</span>}
                      </label>

                      <div className="relative">{renderField(field)}</div>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-gray-500">
                    Limited seats available. Registration closes soon.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="relative z-10">
                      {loading ? 'Submitting...' : 'Submit Registration'}
                    </span>

                    <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0"></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ArattaiDetails
