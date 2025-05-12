import React from 'react'
import './styles.css'
import Preloader from '@/components/preloader'

export const metadata = {
  description: 'Super chennai.',
  title: 'Title',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
