'use client'

import React from 'react'

export const SubmissionConfirmation: React.FC = () => {
  return (
    <div className="max-w-md mx-auto my-16 bg-white rounded-3xl p-10 border border-stone-200 shadow-sm text-center">
      <div className="w-16 h-16 bg-purple-100 text-[#8B3C82] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
        🪔
      </div>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-2">Thank You!</h1>
      <p className="text-stone-700 font-medium mb-2">Your Golu photographs have been submitted.</p>
      <p className="text-stone-500 text-sm leading-relaxed">
        We will get back to you after reviewing your submission.
      </p>
    </div>
  )
}