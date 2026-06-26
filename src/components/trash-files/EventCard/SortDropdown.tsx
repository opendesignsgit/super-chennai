'use client'

import { useRouter, useSearchParams } from "next/navigation"

const SortBy = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const value = searchParams.get("sort") || "upcoming"

  const change = (v: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", v)

    router.push(`/events?${params}`)
  }

  return (
    <select value={value} onChange={(e) => change(e.target.value)}>
      <option value="upcoming">Upcoming</option>
      <option value="past">Past</option>
    </select>
  )
}

export default SortBy