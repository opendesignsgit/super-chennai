/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'

export default async function GoluLandingPage() {
  const payload = await getPayload({ config })

  const landingData = await payload.findGlobal({
    slug: 'goluLandingPage',
    depth: 2,
  })

  if (!landingData) {
    return notFound()
  }

  // Safe helper to extract image URLs for desktop and mobile banners
  const getImageUrl = (imageField: any) => {
    if (!imageField) return ''
    return typeof imageField === 'object' ? imageField?.url || '' : ''
  }

  const desktopUrl = getImageUrl(landingData?.desktopImage )
  const mobileUrl = getImageUrl(landingData?.mobileImage)

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* =========================================================
         BANNER SECTION (Responsive Desktop & Mobile Images)
      ========================================================= */}
      {(desktopUrl || mobileUrl) && (
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[450px] overflow-hidden bg-stone-900">
          {desktopUrl && (
            <img
              src={desktopUrl}
              alt={landingData?.title || 'Golu Contest Landing'}
              className={`w-full h-full object-cover ${mobileUrl ? 'hidden sm:block' : 'block'}`}
            />
          )}

          {mobileUrl && (
            <img
              src={mobileUrl}
              alt={landingData?.title || 'Golu Contest Landing'}
              className="w-full h-full object-cover block sm:hidden"
            />
          )}

          {/* Optional Overlay Title */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
              {landingData?.title}
            </h1>
          </div>
        </div>
      )}

      {/* =========================================================
         LEXICAL CONTENT RENDERER WITH BLOCKS
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <LexicalRenderer content={landingData?.content} contest={landingData} />
      </div>
    </div>
  )
}



// // 'use client'

// // import { ContestLanding } from '@/collections/GoluContest/components/ContestLanding'
// // import { GoluSubmissionForm } from '@/collections/GoluContest/components/GoluSubmissionForm'
// // import { MobileRegistration } from '@/collections/GoluContest/components/MobileRegistration'
// // import { OTPVerification } from '@/collections/GoluContest/components/OTPVerification'
// // import { RegistrationForm } from '@/collections/GoluContest/components/RegistrationForm'
// // import { RegistrationSuccess } from '@/collections/GoluContest/components/RegistrationSuccess'
// // import { SubmissionConfirmation } from '@/collections/GoluContest/components/SubmissionConfirmation'
// // import React, { useState } from 'react'

// // export const mockContestSettings = {
// //   contestName: 'Super Chennai Golu Contest 2026',
// //   contestSlug: 'golu-contest-2026',
// //   contestYear: 2026,
// //   heroTitle: 'SUPER CHENNAI GOLU CONTEST 2026',
// //   heroSubtitle: 'Celebrate Chennai Navratri Traditions & Win Exciting Prizes',
// //   heroDescription:
// //     'Decorate your traditional Golu display, add a special Super Chennai touch, upload photographs, and share your cultural passion with the city!',
// //   heroImage: '/media/golu-banner.jpg',
// //   registrationStartDate: '2026-09-01T00:00:00.000Z',
// //   registrationEndDate: '2026-10-15T23:59:59.000Z',
// //   submissionStartDate: '2026-09-15T00:00:00.000Z',
// //   submissionEndDate: '2026-10-25T23:59:59.000Z',
// //   goluMinImages: 2,
// //   goluMaxImages: 5,
// //   superChennaiMinImages: 1,
// //   superChennaiMaxImages: 3,
// //   maxImageSizeMB: 10,
// //   registrationEnabled: true,
// //   submissionEnabled: true,
// // }

// // type Step =
// //   | 'LANDING'
// //   | 'MOBILE_ENTRY'
// //   | 'OTP_VERIFY'
// //   | 'REGISTER_FORM'
// //   | 'REGISTRATION_SUCCESS'
// //   | 'SUBMIT_FORM'
// //   | 'SUBMISSION_CONFIRMATION'

// // export default function GoluContestPage() {
// //   const [step, setStep] = useState<Step>('LANDING')
// //   const [mode, setMode] = useState<'register' | 'login'>('register')
// //   const [mobile, setMobile] = useState('')
// //   const [currentUser, setCurrentUser] = useState<any>(null)

// //   return (
// //     <div>
// //       {step === 'LANDING' && (
// //         <ContestLanding
// //           settings={mockContestSettings}
// //           onRegisterClick={() => {
// //             setMode('register')
// //             setStep('MOBILE_ENTRY')
// //           }}
// //           onLoginClick={() => {
// //             setMode('login')
// //             setStep('MOBILE_ENTRY')
// //           }}
// //         />
// //       )}

// //       {step === 'MOBILE_ENTRY' && (
// //         <MobileRegistration
// //           mode={mode}
// //           onOtpSent={(mob) => {
// //             setMobile(mob)
// //             setStep('OTP_VERIFY')
// //           }}
// //         />
// //       )}

// //       {step === 'OTP_VERIFY' && (
// //         <OTPVerification
// //           mobile={mobile}
// //           onResend={() => console.log('Resending OTP to', mobile)}
// //           onVerified={(user, isRegistered) => {
// //             if (isRegistered && user) {
// //               setCurrentUser(user)
// //               setStep('SUBMIT_FORM')
// //             } else {
// //               setStep('REGISTER_FORM')
// //             }
// //           }}
// //         />
// //       )}

// //       {step === 'REGISTER_FORM' && (
// //         <RegistrationForm
// //           mobile={mobile}
// //           onSuccess={(user) => {
// //             setCurrentUser(user)
// //             setStep('REGISTRATION_SUCCESS')
// //           }}
// //         />
// //       )}

// //       {step === 'REGISTRATION_SUCCESS' && (
// //         <RegistrationSuccess onGoHome={() => setStep('LANDING')} />
// //       )}

// //       {step === 'SUBMIT_FORM' && (
// //         <GoluSubmissionForm
// //           user={currentUser}
// //           settings={mockContestSettings}
// //           onSuccess={() => setStep('SUBMISSION_CONFIRMATION')}
// //         />
// //       )}

// //       {step === 'SUBMISSION_CONFIRMATION' && <SubmissionConfirmation />}
// //     </div>
// //   )
// // }
// import React from 'react'
// import { getPayload } from 'payload'
// import config from '@payload-config'
// import { GoluContestBlockComponent } from '@/collections/GoluContest/GoluDashboard/blocks/GoluContestMainForm/Component'
// import { RichText } from '@payloadcms/richtext-lexical/react'

// export default async function GoluLandingPage() {
//   const payload = await getPayload({ config })

//   // Fetch global landing configuration
//   const goluPageData = await payload.findGlobal({
//     slug: 'goluLandingPage',
//     depth: 2,
//   })

//   const getImageUrl = (imgObj: any) => {
//     if (!imgObj) return ''
//     return typeof imgObj === 'string' ? imgObj : imgObj?.url || ''
//   }

//   const desktopUrl = getImageUrl(goluPageData?.desktopImage)
//   const mobileUrl = getImageUrl(goluPageData?.mobileImage)

//   return (
//     <div className="min-h-screen bg-stone-50 pb-20">
//       {/* =========================================================
//          BANNER SECTION (RESPONSIVE DESKTOP & MOBILE IMAGES)
//       ========================================================= */}
//       {(desktopUrl || mobileUrl) && (
//         <div className="relative w-full h-[280px] sm:h-[400px] md:h-[450px] overflow-hidden bg-stone-900">
//           {desktopUrl && (
//             <img
//               src={desktopUrl}
//               alt={goluPageData?.title || 'Golu Contest'}
//               className={`w-full h-full object-cover ${mobileUrl ? 'hidden sm:block' : 'block'}`}
//             />
//           )}

//           {mobileUrl && (
//             <img
//               src={mobileUrl}
//               alt={goluPageData?.title || 'Golu Contest'}
//               className="w-full h-full object-cover block sm:hidden"
//             />
//           )}

//           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//             <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
//               {goluPageData?.title || 'Super Chennai Golu Contest'}
//             </h1>
//           </div>
//         </div>
//       )}

//       {/* =========================================================
//          LEXICAL / PARSELEXICAL CONTENT RENDERER
//       ========================================================= */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
//         {goluPageData?.content && (
//           <RichText
//             content={goluPageData.content}
//             converters={{
//               blocks: {
//                 goluContestBlock: ({ node }: { node: any }) => (
//                   <GoluContestBlockComponent block={node.fields} />
//                 ),
//               },
//             }}
//           />
//         )}
//       </div>
//     </div>
//   )
// }
