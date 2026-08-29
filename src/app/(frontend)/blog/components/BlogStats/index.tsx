'use client'

import React, { useEffect, useState, useRef } from 'react'

type Props = {
  postId: string
  initialViews: number
  initialLikes: number
}

export const BlogStats: React.FC<Props> = ({ postId, initialViews, initialLikes }) => {
  const [views, setViews] = useState(initialViews)
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)
  const hasViewed = useRef(false)

  useEffect(() => {
    // Check localStorage for liked status
    const storedLikes = localStorage.getItem('likedPosts')
    if (storedLikes) {
      try {
        const likedArray = JSON.parse(storedLikes)
        if (likedArray.includes(postId)) {
          setIsLiked(true)
        }
      } catch (e) {
        console.error(e)
      }
    }

    // Auto Increment View count once
    if (!hasViewed.current) {
      hasViewed.current = true
      fetch(`/api/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ views: initialViews + 1 }),
      })
        .then(() => setViews((prev) => prev + 1))
        .catch((err) => console.error('Failed to increment views:', err))
    }
  }, [postId, initialViews])

  const handleLike = async () => {
    if (isLiked) return

    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: likes + 1 }),
      })

      if (res.ok) {
        const newLikes = likes + 1
        setLikes(newLikes)
        setIsLiked(true)

        // Save to LocalStorage
        const storedLikes = localStorage.getItem('likedPosts')
        const likedArray = storedLikes ? JSON.parse(storedLikes) : []
        if (!likedArray.includes(postId)) {
          likedArray.push(postId)
          localStorage.setItem('likedPosts', JSON.stringify(likedArray))
        }
      }
    } catch (err) {
      console.error('Like failed:', err)
    }
  }

  return (
    <div className="ml-auto flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
      {/* Views */}
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>{views}</span>
      </div>

      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={isLiked}
        className={`flex items-center gap-1.5 transition-transform ${
          isLiked ? 'cursor-not-allowed opacity-80' : 'hover:scale-105 active:scale-95'
        }`}
      >
        <svg
          className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-slate-400 fill-none'}`}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className={isLiked ? 'font-semibold text-red-500' : 'text-slate-600'}>{likes}</span>
      </button>
    </div>
  )
}