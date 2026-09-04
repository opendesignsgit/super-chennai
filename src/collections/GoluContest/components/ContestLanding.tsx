'use client'

import React from 'react'

interface ContestLandingProps {
  settings: any
  onRegisterClick: () => void
  onLoginClick: () => void
}

export const ContestLanding: React.FC<ContestLandingProps> = ({
  settings,
  onRegisterClick,
  onLoginClick,
}) => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#6a2b63] to-[#8B3C82] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/20 text-white px-4 py-1.5 rounded-full mb-4">
            Navratri Special 2026
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 font-['New_Amsterdam',sans-serif]">
            {settings.heroTitle}
          </h1>
          <p className="text-lg sm:text-2xl text-purple-100 mb-6 font-medium">
            {settings.heroSubtitle}
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-purple-100/90 leading-relaxed mb-8">
            {settings.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold rounded-full shadow-lg transition-transform active:scale-95"
            >
              REGISTER NOW
            </button>
            <button
              onClick={onLoginClick}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-colors"
            >
              LOGIN TO SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* Rules & Guidance */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3 flex items-center gap-2">
              <span>🪔</span> How to Participate
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700">
              <li>Register your mobile number and verify via OTP.</li>
              <li>Complete your registration profile details.</li>
              <li>Login during the contest window to upload your Golu photos.</li>
              <li>Upload 2–5 Golu photos & 1–3 Super Chennai corner photos.</li>
            </ol>
          </div>

          <div className="border-t border-stone-100 pt-6">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Photo Upload Rules</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
              <li>Golu Display: Minimum {settings.goluMinImages}, Maximum {settings.goluMaxImages} photos.</li>
              <li>Super Chennai Corner: Minimum {settings.superChennaiMinImages}, Maximum {settings.superChennaiMaxImages} photos.</li>
              <li>Maximum file size per image: {settings.maxImageSizeMB}MB (JPG, PNG, WEBP).</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}