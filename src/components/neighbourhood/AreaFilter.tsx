'use client'

import { useRouter } from 'next/navigation'

export function AreaFilter({ areas }: any) {
  const router = useRouter()

  return (
    <div className="area-grid">
      {areas.map((area: any) => (
        <button key={area.slug} onClick={() => router.push(`/neighbourhood?location=${area.slug}`)}>
          {area.name}
        </button>
      ))}
    </div>
  )
}
