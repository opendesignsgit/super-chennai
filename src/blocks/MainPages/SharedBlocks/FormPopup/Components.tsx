'use client'

import React, { useState } from 'react'
import { sendFormEmail } from '@/utilities/sendFormEmail'
import './style.css'

export const FormPopupComponent = ({ heading, description, buttonText }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting form:', formData)
    try {
      const success = await sendFormEmail(formData)
      if (success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        console.log('Message sent successfully!')
      } else {
        console.error(' Failed to send message.')
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      alert('An unexpected error occurred.')
    }
  }

  return (
    <>
      <div className="exploreVolunteerPage">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          {buttonText}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">{heading}</h2>
            <p className="mb-4 text-sm">{description}</p>
            {submitted ? (
              <div className="text-green-600">Message sent!</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded p-2"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded p-2"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full border rounded p-2"
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
