'use client'

import { ContestLanding } from '@/collections/GoluContest/components/ContestLanding'
import { GoluSubmissionForm } from '@/collections/GoluContest/components/GoluSubmissionForm'
import { MobileRegistration } from '@/collections/GoluContest/components/MobileRegistration'
import { OTPVerification } from '@/collections/GoluContest/components/OTPVerification'
import { RegistrationForm } from '@/collections/GoluContest/components/RegistrationForm'
import { RegistrationSuccess } from '@/collections/GoluContest/components/RegistrationSuccess'
import { SubmissionConfirmation } from '@/collections/GoluContest/components/SubmissionConfirmation'
import React, { useState } from 'react'


export const mockContestSettings = {
  contestName: 'Super Chennai Golu Contest 2026',
  contestSlug: 'golu-contest-2026',
  contestYear: 2026,
  heroTitle: 'SUPER CHENNAI GOLU CONTEST 2026',
  heroSubtitle: 'Celebrate Chennai Navratri Traditions & Win Exciting Prizes',
  heroDescription:
    'Decorate your traditional Golu display, add a special Super Chennai touch, upload photographs, and share your cultural passion with the city!',
  heroImage: '/media/golu-banner.jpg',
  registrationStartDate: '2026-09-01T00:00:00.000Z',
  registrationEndDate: '2026-10-15T23:59:59.000Z',
  submissionStartDate: '2026-09-15T00:00:00.000Z',
  submissionEndDate: '2026-10-25T23:59:59.000Z',
  goluMinImages: 2,
  goluMaxImages: 5,
  superChennaiMinImages: 1,
  superChennaiMaxImages: 3,
  maxImageSizeMB: 10,
  registrationEnabled: true,
  submissionEnabled: true,
}

type Step =
  | 'LANDING'
  | 'MOBILE_ENTRY'
  | 'OTP_VERIFY'
  | 'REGISTER_FORM'
  | 'REGISTRATION_SUCCESS'
  | 'SUBMIT_FORM'
  | 'SUBMISSION_CONFIRMATION'

export default function GoluContestPage() {
  const [step, setStep] = useState<Step>('LANDING')
  const [mode, setMode] = useState<'register' | 'login'>('register')
  const [mobile, setMobile] = useState('')
  const [currentUser, setCurrentUser] = useState<any>(null)

  return (
    <div>
      {step === 'LANDING' && (
        <ContestLanding
          settings={mockContestSettings}
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
          settings={mockContestSettings}
          onSuccess={() => setStep('SUBMISSION_CONFIRMATION')}
        />
      )}

      {step === 'SUBMISSION_CONFIRMATION' && <SubmissionConfirmation />}
    </div>
  )
}
