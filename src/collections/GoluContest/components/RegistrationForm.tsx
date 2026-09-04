'use client'

import React, { useState } from 'react'

interface RegistrationFormProps {
  mobile: string
  onSuccess: (user: any) => void
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ mobile, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    localityArea: '',
    instagramHandle: '',
    termsAccepted: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/golu/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          mobileNumber: mobile,
        }),
      })
      const data = await res.json()

      if (data.success) {
        onSuccess(data.user)
      } else {
        setError(data.message || 'Registration failed')
      }
    } catch (err) {
      setError('Submission error. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
      <h2 className="text-2xl font-bold text-stone-900 mb-1">Complete Registration</h2>
      <p className="text-sm text-stone-500 mb-6">Provide your details to participate in the Golu Contest.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Mobile Number</label>
          <input
            type="text"
            disabled
            value={mobile}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-500 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Locality / Area in Chennai *</label>
          <input
            type="text"
            required
            placeholder="e.g. Mylapore, T. Nagar, Adyar"
            value={formData.localityArea}
            onChange={(e) => setFormData({ ...formData, localityArea: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">Instagram Handle (Optional)</label>
          <input
            type="text"
            placeholder="@yourhandle"
            value={formData.instagramHandle}
            onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82]"
          />
        </div>

        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            id="terms"
            required
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            className="mt-1 h-4 w-4 text-[#8B3C82] rounded"
          />
          <label htmlFor="terms" className="text-xs text-stone-600 leading-tight">
            I agree to the Contest Terms & Conditions and allow Super Chennai to showcase my Golu entry.
          </label>
        </div>

        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50"
        >
          {loading ? 'REGISTERING...' : 'REGISTER PARTICIPANT'}
        </button>
      </form>
    </div>
  )
}