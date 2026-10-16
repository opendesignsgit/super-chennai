'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify'
import { render } from '@react-email/render'
import { CheckCircle2, Sparkles, X } from 'lucide-react'
import SummerFestRegistrationEmail from '../../components/RegisterMail'

interface CustomFieldOption {
  label: string
  value: string
}

interface CustomField {
  id?: number | string
  label: string
  name: string
  type: string
  required?: boolean
  placeholder?: string
  options?: CustomFieldOption[]
}

type Props = {
  block?: any
  eventData?: any
  // Supports the alternate usage where fields are passed directly as props.
  [key: string]: any
}

const normalizeFieldName = (name?: string) => name?.trim().toLowerCase() || ''

const getFieldValue = (formData: Record<string, any>, fieldName: string) =>
  formData[normalizeFieldName(fieldName)]

const setFieldValue = (prev: Record<string, any>, fieldName: string, value: any) => ({
  ...prev,
  [normalizeFieldName(fieldName)]: value,
})

const WaveDecoration = () => (
  <span className="mx-2 inline-block font-serif text-lg tracking-widest text-[#007A87] opacity-60">
    ~~~
  </span>
)

const EventRegistrationBlockComponent: React.FC<Props> = (props) => {
  // Supports both <Component block={node.fields} /> and <Component {...node.fields} />.
  const block = props.block ?? props
  const eventData = props.eventData ?? props.arattaiData ?? null

  const [formData, setFormData] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState('')
  const [generatedOtp, setGeneratedOtp] = useState('')
  const [otpVerified, setOtpVerified] = useState(false)
  const [sendingOtp, setSendingOtp] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [resolvedCustomFields, setResolvedCustomFields] = useState<CustomField[]>([])
  const [fieldsLoading, setFieldsLoading] = useState(false)

  const registrationSettings =
    block?.registrationSettings && typeof block.registrationSettings === 'object'
      ? block.registrationSettings
      : {}

  const rawCustomFields = Array.isArray(block?.customFields) ? block.customFields : []

  // Lexical relationship values may arrive as populated objects or as IDs.
  useEffect(() => {
    let cancelled = false

    const loadCustomFields = async () => {
      const populated = rawCustomFields.filter(
        (field: any) => field && typeof field === 'object' && typeof field.name === 'string',
      ) as CustomField[]

      const ids = rawCustomFields.filter(
        (field: any) =>
          (typeof field === 'number' || typeof field === 'string') && String(field).trim() !== '',
      )

      if (ids.length === 0) {
        setResolvedCustomFields(populated)
        return
      }

      setFieldsLoading(true)
      try {
        const fetched = await Promise.all(
          ids.map(async (id: number | string) => {
            const response = await fetch(
              `/api/event-form-fields/${encodeURIComponent(String(id))}?depth=1`,
              { cache: 'no-store' },
            )

            if (!response.ok) return null
            const json = await response.json()
            return json?.doc ?? json
          }),
        )

        const byId = new Map<string, CustomField>()
        ;[...populated, ...fetched].forEach((field: any) => {
          if (field && typeof field.name === 'string') {
            byId.set(String(field.id), field as CustomField)
          }
        })

        // Preserve the order configured in the Payload relationship field.
        const ordered = rawCustomFields
          .map((entry: any) => {
            if (entry && typeof entry === 'object' && typeof entry.name === 'string') {
              return entry as CustomField
            }
            return byId.get(String(entry))
          })
          .filter(Boolean) as CustomField[]

        if (!cancelled) setResolvedCustomFields(ordered)
      } catch (error) {
        console.error('Failed to load event form fields:', error)
        if (!cancelled) setResolvedCustomFields(populated)
      } finally {
        if (!cancelled) setFieldsLoading(false)
      }
    }

    void loadCustomFields()
    return () => {
      cancelled = true
    }
    // Raw relationship values are the source of truth for this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(rawCustomFields)])

  const customFields = useMemo(() => resolvedCustomFields, [resolvedCustomFields])

  const title = eventData?.title || 'Event'
  const sectionSubTitle = block?.sectionSubTitle || ''
  const sectionDescription = block?.sectionDescription || ''
  const showImage = Boolean(block?.showImage)
  const sideImage = block?.sideImage
  const imagePosition = block?.imagePosition || 'left'
  const isRegistrationOpen = registrationSettings?.isRegistrationOpen ?? false
  const enableOTP = registrationSettings?.enableOTP ?? false
  const thankYouMessage = registrationSettings?.thankYouMessage || ''

  const handleChange = useCallback((fieldName: string, value: any) => {
    setFormData((prev) => setFieldValue(prev, fieldName, value))
  }, [])

  const validateForm = () => {
    for (const field of customFields) {
      const value = getFieldValue(formData, field.name)

      if (field.required && (value === undefined || value === null || value === '')) {
        toast.error(`${field.label} is required`)
        return false
      }

      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(String(value))) {
          toast.error('Enter valid email')
          return false
        }
      }
    }
    return true
  }

  const mobileField = customFields.find(
    (field) =>
      field.type === 'number' ||
      normalizeFieldName(field.name).includes('mobile') ||
      normalizeFieldName(field.name).includes('phone'),
  )

  const sendOtpToMobile = async () => {
    try {
      if (!mobileField) {
        toast.error('Mobile field not found')
        return
      }

      const mobile = getFieldValue(formData, mobileField.name)
      if (!mobile) {
        toast.error('Enter mobile number')
        return
      }
      if (String(mobile).replace(/\D/g, '').length < 10) {
        toast.error('Enter valid mobile number')
        return
      }

      setSendingOtp(true)
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString()
      setGeneratedOtp(newOtp)

      await axios.post('/api/send-otp', { mobile, otp: newOtp })
      toast.success('OTP sent successfully')
    } catch {
      toast.error('Failed to send OTP')
    } finally {
      setSendingOtp(false)
    }
  }

  const verifyOtp = () => {
    if (otp === generatedOtp && generatedOtp) {
      setOtpVerified(true)
      toast.success('OTP verified successfully')
    } else {
      toast.error('Invalid OTP')
    }
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading || !validateForm()) return

    if (enableOTP && !otpVerified) {
      toast.error('Please verify OTP')
      return
    }

    try {
      setLoading(true)

      const emailHtml = await render(
        <SummerFestRegistrationEmail
          title={title}
          values={formData}
          thankYouMessage={thankYouMessage}
        />,
      )

      const payload = new FormData()
      if (eventData?.id != null) payload.append('eventId', String(eventData.id))
      if (eventData?.slug) payload.append('slug', String(eventData.slug))
      payload.append('emailTemplate', emailHtml)

      const serializedValues: Record<string, any> = {}
      customFields.forEach((field) => {
        const value = getFieldValue(formData, field.name)
        if (field.type === 'file') {
          if (typeof File !== 'undefined' && value instanceof File) {
            payload.append(normalizeFieldName(field.name), value)
          }
        } else {
          serializedValues[normalizeFieldName(field.name)] = value ?? ''
        }
      })

      payload.append('values', JSON.stringify(serializedValues))

      await axios.post('/api/summer-registration', payload)
      toast.success('Registration submitted successfully')
      setShowSuccessModal(true)
      setFormData({})
      setOtp('')
      setGeneratedOtp('')
      setOtpVerified(false)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const renderField = (field: CustomField) => {
    const fieldName = normalizeFieldName(field.name)
    const commonClass =
      'mt-2 w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition-all focus:border-orange-500'

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            name={fieldName}
            placeholder={field.placeholder}
            required={field.required}
            rows={5}
            value={getFieldValue(formData, field.name) || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={commonClass}
          />
        )

      case 'select':
        return (
          <select
            name={fieldName}
            required={field.required}
            value={getFieldValue(formData, field.name) || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={commonClass}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option, index) => (
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )

      case 'email':
        return (
          <input
            type="email"
            name={fieldName}
            placeholder={field.placeholder || 'Enter your Email'}
            required={field.required}
            value={getFieldValue(formData, field.name) || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={commonClass}
          />
        )

      case 'number':
        return (
          <input
            type="tel"
            inputMode="numeric"
            name={fieldName}
            placeholder={field.placeholder || 'Enter your Mobile Number'}
            required={field.required}
            value={getFieldValue(formData, field.name) || ''}
            onChange={(e) => handleChange(field.name, e.target.value.replace(/\D/g, ''))}
            className={commonClass}
          />
        )

      case 'file':
        return (
          <input
            type="file"
            name={fieldName}
            required={field.required}
            onChange={(e) => handleChange(field.name, e.target.files?.[0] || null)}
            className={commonClass}
          />
        )

      default:
        return (
          <input
            type="text"
            name={fieldName}
            placeholder={field.placeholder || `Enter ${field.label}`}
            required={field.required}
            value={getFieldValue(formData, field.name) || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={commonClass}
          />
        )
    }
  }

  if (!block?.showForm || !isRegistrationOpen) return null

  return (
    <>
      <ToastContainer position="top-center" />

      <section className="relative overflow-hidden bg-white py-8">
        <div className="relative z-10">
          <div className="mb-10 text-center">
            <h2 className="festmainheadingsss flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#005B70]">
              <WaveDecoration />
              {block?.sectionTitle || 'Register For This Event'}
              <WaveDecoration />
            </h2>
            <div className="mt-3 flex items-center justify-center">
              <div className="h-1 w-20 rounded bg-[#FCBA13]" />
            </div>
            {sectionDescription && (
              <p className="mx-auto mt-4 max-w-2xl px-4 text-gray-600">{sectionDescription}</p>
            )}
          </div>

          <div
            className={`mx-auto px-4 ${showImage && sideImage?.url ? 'max-w-7xl' : 'max-w-3xl'}`}
          >
            <div
              className={`overflow-hidden rounded-[30px] border bg-white shadow-xl ${showImage && sideImage?.url ? 'grid items-stretch lg:grid-cols-2' : ''}`}
            >
              {showImage && sideImage?.url && imagePosition === 'left' && (
                <div className="relative min-h-[320px]">
                  <Image
                    src={sideImage.url}
                    alt={sideImage.alt || title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div
                className={`p-6 md:p-10 lg:p-14 ${block?.enableGlassEffect ? 'bg-white/90 backdrop-blur-xl' : 'bg-white'}`}
              >
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-[3px] text-orange-500">
                      Registration Form
                    </span>
                  </div>
                  {sectionSubTitle && (
                    <h3 className="mt-5 text-3xl font-black leading-tight text-[#061E43]">
                      {sectionSubTitle}
                    </h3>
                  )}
                </div>

                {fieldsLoading && (
                  <p className="mb-4 text-center text-sm text-gray-500">
                    Loading registration fields...
                  </p>
                )}

                {!fieldsLoading && customFields.length === 0 && (
                  <p className="mb-4 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
                    No registration fields were found. Check the selected fields in Payload admin
                    and make sure the event-form-fields API allows reading them.
                  </p>
                )}

                <form onSubmit={submitForm} className="space-y-7">
                  <div className="grid gap-6 md:grid-cols-2">
                    {customFields.map((field, index) => (
                      <div
                        key={field.id || index}
                        className={field.type === 'textarea' ? 'md:col-span-2' : ''}
                      >
                        <label className="text-sm font-semibold text-[#061E43]">
                          {field.label}
                          {field.required && <span className="ml-1 text-red-500">*</span>}
                        </label>
                        {renderField(field)}
                      </div>
                    ))}
                  </div>

                  {enableOTP && (
                    <div className="space-y-4">
                      <button
                        type="button"
                        onClick={sendOtpToMobile}
                        disabled={sendingOtp}
                        className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
                      >
                        {sendingOtp ? 'Sending OTP...' : 'Send OTP'}
                      </button>

                      {generatedOtp && (
                        <div className="flex flex-col gap-4 md:flex-row">
                          <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
                          />
                          <button
                            type="button"
                            onClick={verifyOtp}
                            className="rounded-xl bg-black px-8 py-4 font-semibold text-white"
                          >
                            Verify OTP
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {otpVerified && (
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-green-700">
                      OTP verified successfully
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || fieldsLoading}
                    className="w-full rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-8 py-5 text-lg font-black text-white shadow-xl transition hover:scale-[1.01] disabled:opacity-60"
                  >
                    {loading ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </form>
              </div>

              {showImage && sideImage?.url && imagePosition === 'right' && (
                <div className="relative min-h-[320px]">
                  <Image
                    src={sideImage.url}
                    alt={sideImage.alt || title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl rounded-[35px] bg-white p-10 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                aria-label="Close success dialog"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <X className="h-5 w-5 text-black" />
              </button>

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-yellow-300">
                <CheckCircle2 className="h-12 w-12 text-white" />
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
                    Registration Successful
                  </span>
                </div>
                <h2 className="text-4xl font-black text-[#061E43]">Thank You!</h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {thankYouMessage || (
                    <>
                      Your registration for{' '}
                      <span className="font-bold text-orange-500">{title}</span> has been
                      successfully submitted.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => setShowSuccessModal(false)}
                  className="rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 px-10 py-4 text-sm font-bold uppercase tracking-[2px] text-white shadow-xl transition hover:scale-105"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EventRegistrationBlockComponent
