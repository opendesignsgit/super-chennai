'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from 'src/components/ui/button'

export const PRIMARY_COLOR = '#a34493'
export const SECONDARY_COLOR = '#8b3c82'
export const HOVER_BG_COLOR = '#f9ebf7'

export default function NotFound() {
  const router = useRouter()

  return (
    <div 
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden px-4 py-20 text-white rounded-3xl my-4"
      style={{
        background: `radial-gradient(circle at center, ${SECONDARY_COLOR} 0%, #1a0817 100%)`,
      }}
    >
      {/* Background Decorative Glow Effects */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{ backgroundColor: PRIMARY_COLOR }}
      />
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] opacity-50 pointer-events-none"
        style={{ backgroundColor: HOVER_BG_COLOR }}
      />

      <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        {/* Subtle Pill Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase shadow-lg border border-[#a34493]/40 backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(249, 235, 247, 0.15)',
            color: HOVER_BG_COLOR,
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: HOVER_BG_COLOR }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: HOVER_BG_COLOR }}
            />
          </span>
          Page Not Found
        </div>

        {/* Hero 404 Text */}
        <h1
          className="select-none text-8xl font-extrabold tracking-tight sm:text-9xl bg-gradient-to-b from-white via-[#f9ebf7] to-[#a34493] bg-clip-text text-transparent drop-shadow-lg"
        >
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Lost in space?
        </h2>
        <p className="mt-3 text-base text-[#f9ebf7]/80 max-w-md leading-relaxed">
          The page you are looking for doesnt exist or has been moved to another URL.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          {/* Back to Home Button */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-white border-none"
            style={{
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            <Link
              href="/"
              className="hover:!bg-[#8b3c82] transition-colors flex items-center justify-center"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 1 1 001 1h3m10-11l2 2m-2-2v10a1 1 1 01-1 1h-3m-6 0a1 1 1 001-1-1v-4a1 1 1 001 1-1h2a1 1 1 001 1 1v4a1 1 1 001-1 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
          </Button>

          {/* Go Back Button */}
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => router.back()}
            className="w-full sm:w-auto font-medium transition-all duration-300 border-white/20 hover:border-white/40"
            style={{
              backgroundColor: 'rgba(249, 235, 247, 0.1)',
              color: HOVER_BG_COLOR,
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}