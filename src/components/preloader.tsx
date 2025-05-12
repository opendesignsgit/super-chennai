'use client'

import React, { useEffect, useState } from 'react'
import './style.css'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <div className="spinner" />
    </div>
  )
}

export default Preloader
