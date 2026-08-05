/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

interface QuickAccessItem {
  id?: string | number
  label?: string
  name?: string
  detail?: string
  fallbackEmoji?: string
  icon?: {
    url?: string
    alt?: string
  } | string
}

interface QuickAccessSectionProps {
  quickAccess?: QuickAccessItem[]
}

export function QuickAccessSection({
  quickAccess = [],
}: QuickAccessSectionProps) {
  if (!quickAccess || quickAccess.length === 0) {
    return null
  }

  const getIconSrc = (iconField: any) => {
    if (!iconField) return null
    if (typeof iconField === 'string') {
      return iconField.trim() || null
    }
    if (iconField?.url && typeof iconField.url === 'string') {
      return iconField.url.trim() || null
    }
    return null
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-10 pt-2">
      <div className="flex flex-wrap lg:flex-nowrap gap-6 neeightshshshshshs pt-6 border-t border-gray-100">
        {quickAccess.map((qa, i) => {
          const iconSrc = getIconSrc(qa?.icon)

          return (
            <div
              key={qa.id || i}
              className="flex items-center gap-3 flex-1 min-w-[200px] borderrrrrrighttt"
            >
              <span className="text-2xl w-8 h-8 flex items-center justify-center flex-shrink-0">
                {iconSrc ? (
                  <img
                    src={iconSrc}
                    alt={
                      typeof qa.icon === 'object' && qa.icon?.alt
                        ? qa.icon.alt
                        : qa.label || 'Quick access icon'
                    }
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span>{qa.fallbackEmoji || '📍'}</span>
                )}
              </span>
              <div>
                <div className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                  {qa.label}
                </div>
                <div className="!text-sm !font-semibold text-gray-400 mb-1 neighbourtwoparagraph">
                  {qa.name}
                </div>
                <div className="text-xs text-gray-500 !font-semibold">
                  {qa.detail}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}