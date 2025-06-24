'use client'

import React, { useEffect, useState } from 'react'
import './style.css'

export const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <div className="super-preloader">
          <div className="animated-text">
            {'SUPER CHENNAI'.split('').map((char, idx) => (
              <span key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                {char}
              </span>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  )
}
