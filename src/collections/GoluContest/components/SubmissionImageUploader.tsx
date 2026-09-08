'use client'

import React, { useRef } from 'react'

interface ImageUploaderProps {
  label: string
  images: File[]
  min: number
  max: number
  onChange: (files: File[]) => void
}

export const SubmissionImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  images,
  min,
  max,
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const selected = Array.from(e.target.files)
    const combined = [...images, ...selected].slice(0, max)
    onChange(combined)
  }

  const handleRemove = (index: number) => {
    const updated = images.filter((_, i) => i !== index)
    onChange(updated)
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-stone-800">
          {label} <span className="text-xs text-stone-500">(Min {min}, Max {max})</span>
        </label>
        <span className="text-xs font-medium text-stone-500">{images.length}/{max} Uploaded</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((file, idx) => (
          <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 group bg-stone-100">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-90 hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}

        {images.length < max && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 hover:border-[#8B3C82] hover:text-[#8B3C82] transition-colors"
          >
            <span className="text-2xl font-light">+</span>
            <span className="text-xs font-medium">Add Image</span>
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  )
}