'use client'

import ArattaiWithVivekKarunakaranEmail from '@/utilities/Arattai/ArattaiWithVivekKarunakaranEmail'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { render } from '@react-email/render'
import LexicalRenderer from '../lexical/LexicalRenderer'
import { formatDate, formatTime } from '@/utilities/date'

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
                  <LexicalRenderer content={data?.content} />
                </div>
              </div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-[260px_1fr] gap-10 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-[220px] h-[220px] rounded-3xl overflow-hidden shadow-2xl shrink-0 bg-slate-100">
                  {speakerImage?.url ? (
                    <Image
                      src={speakerImage.url}
                      alt={speakerName || 'Speaker'}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                      <svg className="w-16 h-16 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
                      </svg>

                      <p className="text-sm font-medium">No Speaker Image</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center lg:text-left">
                <span className="inline-block bg-[#7c3aed] text-white text-sm px-4 py-2 rounded-full mb-5">
                  Featured Speaker
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  {speakerName}
                </h2>

                <p className="text-[#7c3aed] font-semibold text-xl mb-5">{speakerDesignation}</p>

                <p className="text-gray-600 leading-[1.9] max-w-3xl mb-8">{shortDescription}</p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <div className="rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 px-5 py-4 shadow-sm border border-rose-100 min-w-[180px]">
                    <p className="text-xs uppercase tracking-[2px] text-rose-500 font-semibold mb-1">
                      Event Date
                    </p>

                    <h4 className="font-bold text-gray-900">
                      {formatDate(eventDetails?.eventDate)}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 px-5 py-4 shadow-sm border border-violet-100 min-w-[180px]">
                    <p className="text-xs uppercase tracking-[2px] text-violet-500 font-semibold mb-1">
                      Venue
                    </p>

                    <h4 className="font-bold text-gray-900">{eventDetails?.venue}</h4>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-4 shadow-sm border border-cyan-100 min-w-[180px]">
                    <p className="text-xs uppercase tracking-[2px] text-cyan-600 font-semibold mb-1">
                      City
                    </p>

                    <h4 className="font-bold text-gray-900">{eventDetails?.city}</h4>
                  </div>
                </div>

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
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600"></div>

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

              <form onSubmit={submitForm} className="max-h-[75vh] overflow-y-auto px-8 py-8">
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
