"use client"

import { useState } from "react"
import NeighbourhoodModal from "./NeighbourhoodModal"

export default function ExpandFilterButton({ categories }: any) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="container my-6">
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 text-white px-6 py-3 rounded-full"
        >
          Click to Explore
        </button>
      </div>

      {open && (
        <NeighbourhoodModal
          categories={categories}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}