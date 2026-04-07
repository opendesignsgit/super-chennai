"use client"

import { useRouter } from "next/navigation"

export default function AreaGrid({ areas }: any) {
  const router = useRouter()

  return (
    <div className="area-grid">
      {areas.map((area: any) => (
        <div
          key={area.slug}
          onClick={() =>
            router.push(`/neighbourhood?location=${area.slug}`)
          }
          className="area-card"
        >
          <img src={area.image?.url} />
          <h3>{area.title}</h3>
          <p>PIN code: {area.pincode}</p>
        </div>
      ))}
    </div>
  )
}