'use client'

import React from 'react'

interface RegistrationSuccessProps {
  onGoHome: () => void
}

export const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ onGoHome }) => {
  return (
    <div className="max-w-md mx-auto my-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
        ✓
      </div>
      <h2 className="text-2xl font-bold text-stone-900 mb-2">Registration Successful!</h2>
      <p className="text-stone-600 text-sm leading-relaxed mb-6">
        During the Golu period, login with your registered mobile number to submit your photographs.
      </p>
      <button
        onClick={onGoHome}
        className="w-full py-3.5 bg-[#8B3C82] hover:bg-[#6a2b63] text-white font-bold rounded-xl shadow transition-colors"
      >
        GO TO HOME
      </button>
    </div>
  )
}