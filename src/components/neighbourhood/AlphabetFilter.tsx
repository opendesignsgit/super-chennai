

"use client"

import { useRouter, useSearchParams } from "next/navigation"
import clsx from "clsx"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export function AlphabetFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const active = searchParams.get("alpha")

  const handleClick = (letter: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("alpha", letter)
    params.set("page", "1")

    router.push(`/neighbourhood?${params.toString()}`)
  }

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("alpha")
    router.push(`/neighbourhood?${params.toString()}`)
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">

      {/* header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">
          Browse by Alphabet
        </h3>

        {active && (
          <button
            onClick={clearFilter}
            className="text-xs text-blue-600 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* letters */}
      <div className="flex flex-wrap gap-2">

        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            className={clsx(
              "w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-all duration-150",
              "hover:bg-blue-50 hover:border-blue-400",

              active === letter
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white text-gray-700 border-gray-200"
            )}
          >
            {letter}
          </button>
        ))}

      </div>
    </div>
  )
}