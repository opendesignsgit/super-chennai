'use client'

import { useRouter, useSearchParams } from 'next/navigation'

type Category = {
  id: string | number
  title: string
}

type Props = {
  categories: Category[]
}

const FilterTopbar = ({ categories }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selected = searchParams.get('category')?.split(',') || []

  const toggleCategory = (id: string) => {
    let updated = [...selected]

    if (updated.includes(id)) {
      updated = updated.filter((c) => c !== id)
    } else {
      updated.push(id)
    }

    const params = new URLSearchParams(searchParams.toString())

    if (updated.length) {
      params.set('category', updated.join(','))
    } else {
      params.delete('category')
    }

    router.push(`/events?${params.toString()}`)
  }

  return (
    <div className="flex gap-2 overflow-auto">
      {categories.map((cat: Category) => {
        const active = selected.includes(String(cat.id))

        return (
          <button
            key={cat.id}
            onClick={() => toggleCategory(String(cat.id))}
            className={`px-4 py-2 rounded-full border ${
              active ? 'bg-pink-600 text-white' : ''
            }`}
          >
            {cat.title}
          </button>
        )
      })}
    </div>
  )
}

export default FilterTopbar