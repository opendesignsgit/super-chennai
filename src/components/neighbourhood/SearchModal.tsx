"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchModal() {
  const router = useRouter()

  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [sub, setSub] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (location) params.set("location", location)
    if (category) params.set("category", category)
    if (sub) params.set("sub", sub)

    router.push(`/neighbourhood?${params.toString()}`)
  }

  return (
    <div className="search-modal">
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}