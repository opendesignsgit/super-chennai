"use client"

import { useState } from "react"
import { X } from "lucide-react"
import clsx from "clsx"


type Props = {
  categories: Category[]
  onClose?: () => void
}

type SubCategory = {
  id: string | number
  title?: string
  name?: string
  label?: string
}

type Category = {
  id: string | number
  title?: string
  name?: string
  label?: string
  subCategories?: SubCategory[]
}

export default function NeighbourhoodModal({ categories, onClose }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    categories?.[0] || null
  )

  const [activeSub, setActiveSub] = useState<SubCategory | null>(null)

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">

      <div className="bg-white w-[1100px] max-h-[80vh] rounded-lg overflow-hidden flex">

        {/* LEFT CATEGORY */}
        <div className="w-1/3 bg-purple-600 text-white p-6 overflow-y-auto">

          <h2 className="text-2xl font-bold mb-6">
            IN {activeCategory?.title || activeCategory?.name || "T.NAGAR"}
          </h2>

          <div className="space-y-3">
            {categories?.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "block w-full text-left px-4 py-2 rounded",
                  activeCategory?.id === cat.id
                    ? "bg-white text-purple-600 font-semibold"
                    : "hover:bg-purple-500"
                )}
              >
                {cat.title || cat.name || cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT SUBCATEGORY */}
        <div className="w-2/3 p-6 relative">

          {/* close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X />
          </button>

          <div className="grid grid-cols-2 gap-4">

            {activeCategory?.subCategories?.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSub(sub)}
                className={clsx(
                  "border rounded-full px-4 py-2 text-left",
                  activeSub?.id === sub.id
                    ? "bg-purple-600 text-white border-purple-600"
                    : "hover:border-purple-600"
                )}
              >
                {sub.title || sub.name || sub.label}
              </button>
            ))}

          </div>

          {/* search */}
          <div className="flex justify-end mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full">
              Search
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}