'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { SubmissionImageUploader } from '@/collections/GoluContest/components/SubmissionImageUploader'

interface Props {
  block: {
    sectionTitle?: string
    sectionDescription?: string
    goluMinImages?: number
    goluMaxImages?: number
    superChennaiMinImages?: number
    superChennaiMaxImages?: number
  }
}

export const GoluFormBlockComponent: React.FC<Props> = ({ block }) => {
  const [goluImages, setGoluImages] = useState<File[]>([])
  const [superChennaiImages, setSuperChennaiImages] = useState<File[]>([])
  const [aboutGoluText, setAboutGoluText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const settings = {
    goluMinImages: block.goluMinImages ?? 2,
    goluMaxImages: block.goluMaxImages ?? 5,
    superChennaiMinImages: block.superChennaiMinImages ?? 1,
    superChennaiMaxImages: block.superChennaiMaxImages ?? 3,
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (goluImages.length < settings.goluMinImages) {
      setError(`Minimum ${settings.goluMinImages} Golu photographs required.`)
      return
    }

    if (superChennaiImages.length < settings.superChennaiMinImages) {
      setError(`Minimum ${settings.superChennaiMinImages} Super Chennai Corner photo required.`)
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('aboutGolu', aboutGoluText)

      goluImages.forEach((file) => formData.append('goluImages', file))
      superChennaiImages.forEach((file) => formData.append('superChennaiImages', file))

      await axios.post('/api/golu-submissions', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      setSuccess(true)
      setGoluImages([])
      setSuperChennaiImages([])
      setAboutGoluText('')
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center">
        <h3 className="text-2xl font-bold text-emerald-700 mb-2">🎉 Entry Submitted Successfully!</h3>
        <p className="text-sm text-stone-600 mb-6">Thank you for participating in the Super Chennai Golu Contest.</p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-3 bg-[#8B3C82] text-white font-bold rounded-xl text-sm"
        >
          Submit Another Entry
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
      <h2 className="text-2xl font-bold text-stone-900 mb-1">{block.sectionTitle || 'Submit Your Golu Entry'}</h2>
      <p className="text-sm text-stone-500 mb-6">{block.sectionDescription}</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <SubmissionImageUploader
          label="1. GOLU PHOTOGRAPHS"
          images={goluImages}
          min={settings.goluMinImages}
          max={settings.goluMaxImages}
          onChange={setGoluImages}
        />

        <SubmissionImageUploader
          label="2. SUPER CHENNAI CORNER PHOTOGRAPHS"
          images={superChennaiImages}
          min={settings.superChennaiMinImages}
          max={settings.superChennaiMaxImages}
          onChange={setSuperChennaiImages}
        />

        <div>
          <label className="block text-sm font-semibold text-stone-800 mb-2">
            3. ABOUT YOUR GOLU (Optional)
          </label>
          <textarea
            rows={4}
            value={aboutGoluText}
            onChange={(e) => setAboutGoluText(e.target.value)}
            placeholder="Tell us the story behind your Golu theme, dolls, or unique decorations..."
            className="w-full p-4 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82] text-sm"
          />
        </div>

        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50 text-base"
        >
          {loading ? 'SUBMITTING...' : 'SUBMIT YOUR GOLU'}
        </button>
      </form>
    </div>
  )
}