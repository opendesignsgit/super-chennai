'use client'

import React from 'react'

interface AutoShrinkTextProps {
  text?: string
  baseSize?: number
  minSize?: number
  maxChars?: number
  className?: string
  maxLines?: number
  width?: string
  align?: 'left' | 'center' | 'right'
}

const AutoShrinkText: React.FC<AutoShrinkTextProps> = ({
  text = '',
  baseSize = 72, // 👈 60-la irundhu 72-kku increase panni irukkom (Big Banner Headings)
  minSize = 42,  // 👈 34-la irundhu 42-kku increase panni irukkom (Always Big & Legible)
  maxChars = 20, // 👈 Reduced from 25 so it scales gently for long titles
  className = '',
  maxLines = 2,
  width = '100%',
  align = 'center',
}) => {
  const length = text?.length || 0

  const calculateFontSize = () => {
    if (length <= maxChars) {
      return baseSize
    }

    // Gentle linear reduction (1px drop per 2 extra characters)
    const excessLength = length - maxChars
    const reduction = Math.floor(excessLength / 2)
    const calculatedSize = baseSize - reduction

    // Enforce bounds: Never go below minSize (42px)
    return Math.max(minSize, calculatedSize)
  }

  const fontSize = calculateFontSize()

  return (
    <h3
      className={`autoShrinkText overflow-hidden transition-all duration-200 ${className}`}
      style={{
        fontSize: `${fontSize}px`,
        width,
        lineHeight: 1.15,
        margin: '0 auto',
        textAlign: align,
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        wordBreak: 'break-word',
      }}
      title={text}
    >
      {text}
    </h3>
  )
}

export default AutoShrinkText