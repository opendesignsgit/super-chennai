'use client'

import React, { useState } from 'react'
import { ContestLanding } from '@/collections/GoluContest/components/ContestLanding'
import { GoluSubmissionForm } from '@/collections/GoluContest/components/GoluSubmissionForm'
import { MobileRegistration } from '@/collections/GoluContest/components/MobileRegistration'
import { OTPVerification } from '@/collections/GoluContest/components/OTPVerification'
import { RegistrationForm } from '@/collections/GoluContest/components/RegistrationForm'
import { RegistrationSuccess } from '@/collections/GoluContest/components/RegistrationSuccess'
import { SubmissionConfirmation } from '@/collections/GoluContest/components/SubmissionConfirmation'

interface Props {
  block: {
    contestName?: string
    goluMinImages?: number
    goluMaxImages?: number
    superChennaiMinImages?: number
    superChennaiMaxImages?: number
  }
}

type Step =
  | 'LANDING'
  | 'MOBILE_ENTRY'
  | 'OTP_VERIFY'
  | 'REGISTER_FORM'
  | 'REGISTRATION_SUCCESS'
  | 'SUBMIT_FORM'
  | 'SUBMISSION_CONFIRMATION'

export const GoluContestBlockComponent: React.FC<Props> = ({ block }) => {
  const [step, setStep] = useState<Step>('LANDING')
  const [mode, setMode] = useState<'register' | 'login'>('register')
  const [mobile, setMobile] = useState('')
  const [currentUser, setCurrentUser] = useState<any>(null)

  // Dynamic settings pulled from the block schema configuration
  const contestSettings = {
    contestName: block?.contestName || 'Super Chennai Golu Contest 2026',
    contestYear: 2026,
    heroTitle: block?.contestName || 'SUPER CHENNAI GOLU CONTEST 2026',
    heroSubtitle: 'Celebrate Chennai Navratri Traditions & Win Exciting Prizes',
    heroDescription:
      'Decorate your traditional Golu display, add a special Super Chennai touch, upload photographs, and share your cultural passion with the city!',
    heroImage: '/media/golu-banner.jpg',
    goluMinImages: block?.goluMinImages ?? 2,
    goluMaxImages: block?.goluMaxImages ?? 5,
    superChennaiMinImages: block?.superChennaiMinImages ?? 1,
    superChennaiMaxImages: block?.superChennaiMaxImages ?? 3,
    registrationEnabled: true,
    submissionEnabled: true,
  }

  return (
    <div className="w-full">
      {step === 'LANDING' && (
        <ContestLanding
          settings={contestSettings}
          onRegisterClick={() => {
            setMode('register')
            setStep('MOBILE_ENTRY')
          }}
          onLoginClick={() => {
            setMode('login')
            setStep('MOBILE_ENTRY')
          }}
        />
      )}

      {step === 'MOBILE_ENTRY' && (
        <MobileRegistration
          mode={mode}
          onOtpSent={(mob) => {
            setMobile(mob)
            setStep('OTP_VERIFY')
          }}
        />
      )}

      {step === 'OTP_VERIFY' && (
        <OTPVerification
          mobile={mobile}
          onResend={() => console.log('Resending OTP to', mobile)}
          onVerified={(user, isRegistered) => {
            if (isRegistered && user) {
              setCurrentUser(user)
              setStep('SUBMIT_FORM')
            } else {
              setStep('REGISTER_FORM')
            }
          }}
        />
      )}

      {step === 'REGISTER_FORM' && (
        <RegistrationForm
          mobile={mobile}
          onSuccess={(user) => {
            setCurrentUser(user)
            setStep('REGISTRATION_SUCCESS')
          }}
        />
      )}

      {step === 'REGISTRATION_SUCCESS' && (
        <RegistrationSuccess onGoHome={() => setStep('LANDING')} />
      )}

      {step === 'SUBMIT_FORM' && (
        <GoluSubmissionForm
          user={currentUser}
          settings={contestSettings}
          onSuccess={() => setStep('SUBMISSION_CONFIRMATION')}
        />
      )}

      {step === 'SUBMISSION_CONFIRMATION' && <SubmissionConfirmation />}
    </div>
  )
}
