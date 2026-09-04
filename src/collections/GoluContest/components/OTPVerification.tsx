'use client'

import React, { useState, useEffect } from 'react'

interface OTPVerificationProps {
  mobile: string
  onVerified: (user: any, isRegistered: boolean) => void
  onResend: () => void
}

export const OTPVerification: React.FC<OTPVerificationProps> = ({ mobile, onVerified, onResend }) => {
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [countdown, setCountdown] = useState(30)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length !== 6) {
      setError('Enter complete 6-digit OTP')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/golu/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, otp }),
      })
      const data = await res.json()

      if (data.success) {
        onVerified(data.user, data.isRegistered)
      } else {
        setError(data.message || 'Verification failed')
      }
    } catch (err) {
      setError('Failed to verify OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
      <h2 className="text-2xl font-bold text-stone-900 mb-1">Verify OTP</h2>
      <p className="text-sm text-stone-500 mb-6">
        Enter 6-digit code sent to <span className="font-semibold text-stone-800">+91 {mobile}</span>
      </p>

      <form onSubmit={handleVerify} className="space-y-4">
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
          placeholder="123456"
          className="w-full text-center tracking-[0.5em] text-2xl font-bold py-3 border border-stone-300 rounded-xl focus:border-[#8B3C82] outline-none"
        />

        {error && <p className="text-xs text-red-600 font-medium text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors disabled:opacity-50"
        >
          {loading ? 'VERIFYING...' : 'VERIFY & CONTINUE'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        {countdown > 0 ? (
          <span className="text-stone-400">Resend OTP in {countdown}s</span>
        ) : (
          <button
            onClick={() => {
              setCountdown(30)
              onResend()
            }}
            className="text-[#8B3C82] font-semibold hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  )
}