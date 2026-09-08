'use client'

import React, { useState } from 'react'
import { ContestLanding } from './ContestLanding'
import { GoluSubmissionForm } from './GoluSubmissionForm'
import { MobileRegistration } from './MobileRegistration'
import { OTPVerification } from './OTPVerification'
import { RegistrationForm } from './RegistrationForm'
import { RegistrationSuccess } from './RegistrationSuccess'
import { SubmissionConfirmation } from './SubmissionConfirmation'

type Step =
  | 'LANDING'
  | 'MOBILE_ENTRY'
  | 'OTP_VERIFY'
  | 'REGISTER_FORM'
  | 'REGISTRATION_SUCCESS'
  | 'SUBMIT_FORM'
  | 'SUBMISSION_CONFIRMATION'

export default function GoluContestClientWrapper({ settings }: { settings: any }) {
  const [step, setStep] = useState<Step>('LANDING')
  const [mode, setMode] = useState<'register' | 'login'>('register')
  const [mobile, setMobile] = useState('')
  const [currentUser, setCurrentUser] = useState<any>(null)

  return (
    <div>
      {step === 'LANDING' && (
        <ContestLanding
          settings={settings}
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
          settings={settings}
          onSuccess={() => setStep('SUBMISSION_CONFIRMATION')}
        />
      )}

      {step === 'SUBMISSION_CONFIRMATION' && <SubmissionConfirmation />}
    </div>
  )
}