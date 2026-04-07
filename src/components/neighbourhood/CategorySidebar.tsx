"use client"

import { useRouter } from "next/navigation"

export default function CategorySidebar({ categories }: any) {
  const router = useRouter()

  return (
    <div className="sidebar">

      {categories.map((cat: any) => (
        <div key={cat.id}>
          <h4>{cat.title}</h4>

          {cat.subCategories?.map((sub: any) => (
            <button
              key={sub.id}
              onClick={() =>
                router.push(
                  `/neighbourhood?category=${cat.slug}&sub=${sub.slug}`
                )
              }
            >
              {sub.title}
            </button>
          ))}
        </div>
      ))}

    </div>
  )
}