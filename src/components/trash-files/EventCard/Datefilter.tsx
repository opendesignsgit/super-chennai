'use client'

import { useRouter, useSearchParams } from "next/navigation"

const DateFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setDate = (start: string, end: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("startDate", start)
    params.set("endDate", end)
    router.push(`/events?${params}`)
  }

  return (
    <div>
      <button
        onClick={() => {
          const today = new Date().toISOString().split("T")[0]!
          setDate(today, today)
        }}
      >
        Today
      </button>

      <button
        onClick={() => {
          const t = new Date()
          t.setDate(t.getDate() + 1)

          const tomorrow = t.toISOString().split("T")[0]!
          setDate(tomorrow, tomorrow)
        }}
      >
        Tomorrow
      </button>
    </div>
  )
}

export default DateFilter