'use client'

import React, { useState } from 'react'
import { SubmissionImageUploader } from './SubmissionImageUploader'

interface GoluSubmissionFormProps {
  user: any
  settings: any
  onSuccess: () => void
}

export const GoluSubmissionForm: React.FC<GoluSubmissionFormProps> = ({
  user,
  settings,
  onSuccess,
}) => {
  const [goluImages, setGoluImages] = useState<File[]>([])
  const [superChennaiImages, setSuperChennaiImages] = useState<File[]>([])
  const [aboutGoluText, setAboutGoluText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
      // In production: Upload images first to /api/media then construct Lexical payload
      const formData = new FormData()
      formData.append('participantId', user.id)
      formData.append('aboutGolu', aboutGoluText)

      goluImages.forEach((file) => formData.append('goluImages', file))
      superChennaiImages.forEach((file) => formData.append('superChennaiImages', file))

      // Endpoint simulation
      setTimeout(() => {
        setLoading(false)
        onSuccess()
      }, 1200)
    } catch (err) {
      setError('Submission failed. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
      <h2 className="text-2xl font-bold text-stone-900 mb-1">Submit Your Golu Entry</h2>
      <p className="text-sm text-stone-500 mb-6">
        Participant: <span className="font-semibold text-stone-800">{user.fullName}</span> (+91 {user.mobileNumber})
      </p>

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