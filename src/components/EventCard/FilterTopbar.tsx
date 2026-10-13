// 'use client'

// import { useRouter, useSearchParams } from 'next/navigation'

// type Category = {
//   id: string | number
//   title: string
// }

// type Props = {
//   categories: Category[]
// }

// const FilterTopbar = ({ categories }: Props) => {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const selected = searchParams.get('category')?.split(',') || []

//   const toggleCategory = (id: string) => {
//     let updated = [...selected]

//     if (updated.includes(id)) {
//       updated = updated.filter((c) => c !== id)
//     } else {
//       updated.push(id)
//     }

//     const params = new URLSearchParams(searchParams.toString())

//     if (updated.length) {
//       params.set('category', updated.join(','))
//     } else {
//       params.delete('category')
//     }

//     router.push(`/events?${params.toString()}`)
//   }

//   return (
//     <div
//       className="
//           container max-w-7xl mx-auto flex gap-3 px-2
//           overflow-x-auto whitespace-nowrap
//           md:overflow-x-auto whitespace-nowrap
//           snap-x snap-mandatory
//           [scrollbar-width:none]
//           [&::-webkit-scrollbar]:hidden
//         "
//     >
//       {categories.map((cat: Category) => {
//         const active = selected.includes(String(cat.id))

//         return (
//           <button
//             key={cat.id}
//             onClick={() => toggleCategory(String(cat.id))}
//             className={`px-4 py-2 rounded-full border ${active ? 'bg-pink-600 text-white' : ''}`}
//           >
//             {cat.title}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// export default

'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type Category = {
  id: string | number
  title: string
}

type Props = {
  categories: Category[]
  initialVisible?: number
  activeColor?: string
}

const FilterTopbar = ({ categories, initialVisible = 6, activeColor = '#a44294' }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [showAll, setShowAll] = useState(false)

  const selected = searchParams.get('category')?.split(',') || []

  const toggleCategory = (id: string) => {
    let updated = [...selected]

    // All category
    if (id === 'All') {
      updated = []
    } else {
      if (updated.includes(id)) {
        updated = updated.filter((c) => c !== id)
      } else {
        updated.push(id)
      }
    }

    const params = new URLSearchParams(searchParams.toString())

    if (updated.length) {
      params.set('category', updated.join(','))
    } else {
      params.delete('category')
    }

    router.push(`/events?${params.toString()}`)
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <section className="filterTopbar bg-gray-100 py-4 border-b border-gray-200">
        <div className="container max-w-7xl mx-auto text-center text-gray-500">
          No categories available
        </div>
      </section>
    )
  }

  const visibleCategories = showAll ? categories : categories.slice(0, initialVisible)

  const isAllActive = selected.length === 0

  return (
    <section
      className="
        filterTopbar
        bg-gray-100
        py-3
        border-b
        border-gray-200
        sticky
        top-[100px]
        md:top-[118px]
        z-50
        hidden
        md:block
      "
    >
      <div
        className={`
          container max-w-7xl mx-auto flex gap-3 px-2
          ${showAll ? 'flex-wrap overflow-visible' : 'overflow-x-auto whitespace-nowrap'}
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        `}
      >
        {/* ALL */}
        <button
          onClick={() => toggleCategory('All')}
          className="
            px-4 py-2
            rounded-full
            text-sm
            font-medium
            border
            transition-all
            duration-200
            capitalize
            cursor-pointer
            whitespace-nowrap
          "
          style={{
            backgroundColor: isAllActive ? activeColor : 'white',
            borderColor: isAllActive ? activeColor : '#d1d5db',
            color: isAllActive ? 'white' : '#374151',
          }}
        >
          All
        </button>

        {/* CATEGORIES */}
        {visibleCategories.map((cat) => {
          const id = String(cat.id)
          const active = selected.includes(id)

          return (
            <button
              key={cat.id}
              onClick={() => toggleCategory(id)}
              className="
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                border
                transition-all
                duration-200
                capitalize
                cursor-pointer
                whitespace-nowrap
              "
              style={{
                backgroundColor: active ? activeColor : 'white',
                borderColor: active ? activeColor : '#d1d5db',
                color: active ? 'white' : '#374151',
              }}
            >
              {cat.title}
            </button>
          )
        })}

        {/* SHOW MORE / LESS */}
        {categories.length > initialVisible && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              border
              border-gray-300
              text-gray-700
              bg-white
              hover:bg-gray-50
              capitalize
              whitespace-nowrap
              cursor-pointer
            "
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  )
}

export default FilterTopbar
