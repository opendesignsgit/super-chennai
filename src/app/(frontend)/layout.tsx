import type { Metadata } from 'next'

import { cn } from 'src/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from 'src/components/AdminBar'
import { Providers } from 'src/providers'
import { InitTheme } from 'src/providers/Theme/InitTheme'
import { mergeOpenGraph } from 'src/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from 'src/utilities/getURL'
import Footer from 'src/Footer/Component'
import { Header } from '@/Header/Component'

import '@/assets/Css/Accomodation.css'
import '@/assets/Css/Becameavolunteer.css'
import '@/assets/Css/Carousel.css'
import '@/assets/Css/ChennaiChillZone.css'
import '@/assets/Css/ChennaiInvestments.css'
import '@/assets/Css/CostOfLiving.css'
import '@/assets/Css/CostOfLiving1.css'
import '@/assets/Css/EventsCalendar.css'
import '@/assets/Css/Eventstyle.css'
import '@/assets/Css/Explore.css'
import '@/assets/Css/Footer.css'
import '@/assets/Css/Funchennai.css'
import '@/assets/Css/Header.css'
import '@/assets/Css/HeroSlider.css'
import '@/assets/Css/Innovate.css'
import '@/assets/Css/InnovateSlider.css'
import '@/assets/Css/Volunteer.css'

import '@/assets/Css/Invest.css'
import '@/assets/Css/Live.css'
import '@/assets/Css/SocialChennai.css'

import '@/assets/Css/DivereseDelights.css'
import '@/assets/Css/MenuBar.css'
import '@/assets/Css/PeekCarosel.css'
import '@/assets/Css/Search.css'
import '@/assets/Css/SearchResults.css'
import '@/assets/Css/StartupChennai.css'
import '@/assets/Css/TechEdu.css'
import '@/assets/Css/TrendingChennai.css'
import '@/assets/Css/Utilities.css'
import '@/assets/Css/VisitPage.css'
import '@/assets/Css/Work.css'

import { Preloader } from '@/components/Loader/Preloader'
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.ico" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          {/* <Preloader> */}
            <Header />
            {children}
            <Footer />
          {/* </Preloader> */}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
