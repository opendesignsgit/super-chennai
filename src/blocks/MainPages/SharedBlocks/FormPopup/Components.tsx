/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { sendFormEmail } from 'src/utilities/sendFormEmail'
import './style.css'
import contactImage from '@/assets/images/Volunteer-Images/popupimg.jpg'
import SectionLoader from '@/components/SectionLoader/component'

type Props = {
  heading: string
  buttonText: string
}

export const FormPopupComponent = ({ heading, buttonText }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [responseMessage, setResponseMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage(null)

    const safeData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phoneNumber: sanitizeInput(formData.phoneNumber),
      message: sanitizeInput(formData.message),
      context: buttonText,
    }

    setFormData(safeData)
    if (!validateForm()) {
      setLoading(false)
      return
    }

    try {
      const success = await sendFormEmail(safeData)
      if (success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phoneNumber: '', message: '' })
        setResponseMessage('Your message has been sent successfully.')
      } else {
        setResponseMessage('Failed to send message. Please try again later.')
      }
    } catch (error) {
      setResponseMessage('An unexpected error occurred. Please try again.')
      console.error('Unexpected error:', error)
    } finally {
      setLoading(false)
    }
  }
  const sanitizeInput = (input: string) => input.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim()
  const validateForm = () => {
    const { name, email, phoneNumber, message } = formData

    const nameRegex = /^[A-Za-z\s.'-]{2,50}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const phoneRegex = /^[0-9+\-\s()]{6,20}$/

    if (!nameRegex.test(name)) {
      setResponseMessage('Please enter a valid name.')
      return false
    }
    if (!emailRegex.test(email)) {
      setResponseMessage('Please enter a valid email address.')
      return false
    }
    if (!phoneRegex.test(phoneNumber)) {
      setResponseMessage('Please enter a valid phone number.')
      return false
    }
    if (message.trim().length < 10 || message.trim().length > 500) {
      setResponseMessage('Message must be between 10 and 500 characters.')
      return false
    }

    // Disallow special programming characters
    const invalidCharsPattern = /[<>{}[\];()$%^*+=|\\]/

    if (invalidCharsPattern.test(message)) {
      setResponseMessage('Message contains restricted special characters.')
      return false
    }

    return true
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => setAnimate(true), 10)
    } else {
      document.body.style.overflow = 'auto'
      setAnimate(false)
      setLoading(false)
      setSubmitted(false)
      setResponseMessage(null)
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <div className="exploreVolunteerPage">
        <div className="exploreVolunteerPage1">
          <a className="cursor-pointer" onClick={() => setIsOpen(true)}>
            {buttonText}
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="um-overlay" onClick={() => setIsOpen(false)}>
          <div
            className={`um-modal ${animate ? 'um-show' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="um-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>

            <div className="um-content">
              <div className="um-image-section">
                <img src={contactImage.src} alt="Popup" />
              </div>

              {loading ? (
                <div className="um-form-section">
                  <SectionLoader message="Sending your message..." />
                </div>
              ) : submitted && responseMessage ? (
                <h2 className="text-green-600 text-center  um-form-section">{responseMessage}</h2>
              ) : (
                <form onSubmit={handleSubmit} className="um-form-section">
                  <h2>{heading}</h2>

                  {responseMessage && (
                    <p
                      style={{
                        color: submitted ? 'green' : 'red',
                      }}
                    >
                      {responseMessage}
                    </p>
                  )}
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                    value={formData.phoneNumber}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={formData.message}
                  />

                  <div className="um-actions">
                    <button
                      type="button"
                      className="um-btn-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="um-btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
