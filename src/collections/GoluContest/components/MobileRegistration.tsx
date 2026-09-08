'use client'

import React, { useState } from 'react'

interface MobileRegistrationProps {
  onOtpSent: (mobile: string) => void
  mode: 'register' | 'login'
}

export const MobileRegistration: React.FC<MobileRegistrationProps> = ({ onOtpSent, mode }) => {
  const [mobile, setMobile] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError('Please enter a valid 10-digit Indian mobile number')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/golu/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile }),
      })
      const data = await res.json()

      if (data.success) {
        onOtpSent(mobile)
      } else {
        setError(data.message || 'Failed to send OTP')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
      <h2 className="text-2xl font-bold text-stone-900 mb-1">
        {mode === 'register' ? 'Register for Contest' : 'Login to Your Account'}
      </h2>
      <p className="text-sm text-stone-500 mb-6">Enter your mobile number to receive verification OTP.</p>

      <form onSubmit={handleSendOtp} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-600 uppercase mb-2">Mobile Number</label>
          <div className="flex rounded-xl border border-stone-300 overflow-hidden focus-within:border-[#8B3C82]">
            <span className="bg-stone-100 text-stone-600 px-3.5 py-3 font-medium text-sm border-r border-stone-300">
              +91
            </span>
            <input
              type="tel"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
              placeholder="9876543210"
              className="w-full px-3 py-3 text-stone-900 outline-none text-base"
              required
            />
          </div>
        </div>

        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50"
        >
          {loading ? 'Sending OTP...' : 'GET OTP'}
        </button>
      </form>
    </div>
  )
}