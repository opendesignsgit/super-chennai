/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import './neighbourhood.css'

export default function NeighbourhoodCategory({ data }: any) {
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    if (!data?.categories?.length) {
      console.warn('No categories found')
      return
    }

    // Flatten categories & subcats
    const extracted = data.categories.map((cat: any) => ({
      label: cat.label,
      value: cat.value,
      subcategories: (cat.subcategories || []).map((sub: any) => ({
        name: sub.name,
        prideData: sub.prideData || [],
      })),
    }))

    setCategories(extracted)
    setSelectedCategory(extracted[0]?.label || '')
  }, [data])

  const activeCategory = categories.find((c) => c.label === selectedCategory)
  const activeSubcats = activeCategory?.subcategories || []

  return (
    <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
      <div className="Tabs-wrapper">

        {/* TAB BUTTONS (Category Names) */}
        <div className="chennaiInvestmentsButtons justify-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={cat.label === selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.label)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SUBCATEGORY & PRIDE CONTENT */}
        <div className="tabscontainer">
          {activeSubcats.map((sub: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; prideData: any[] }, subIndex: React.Key | null | undefined) => (
            <div
              key={subIndex}
              className="category-info mt-[8vh] flex flex-col items-center w-[80%] text-center mx-auto"
            >
              {/* SUBCATEGORY TITLE */}
              <h2 className="text-4xl font-bold mb-[10px] text-[#a44294]">
                {sub.name}
              </h2>

              {/* PRIDE DATA BLOCKS */}
              <div className="buildingSectionFlex">
                {sub.prideData.map((pd: any, index: number) => (
                  <div key={index} className="bulidingSection">
                    {/* EVEN INDEX → TEXT LEFT + IMAGE RIGHT */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="builidngContent">
                          <h3>{pd.name}</h3>
                          {pd.nature && <h5>{pd.nature}</h5>}

                          <ul className="text-sm text-gray-700 space-y-1 mt-2">
                            {pd.achievement1 && <li>• {pd.achievement1}</li>}
                            {pd.achievement2 && <li>• {pd.achievement2}</li>}
                            {pd.achievement3 && <li>• {pd.achievement3}</li>}
                          </ul>
                        </div>

                        {pd.image?.url && (
                          <img
                            className="buildingImage"
                            src={pd.image.url}
                            alt={pd.name}
                            width={500}
                            height={300}
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {/* ODD INDEX → IMAGE LEFT + TEXT RIGHT */}
                        {pd.image?.url && (
                          <img
                            className="buildingImage1"
                            src={pd.image.url}
                            alt={pd.name}
                            width={500}
                            height={300}
                          />
                        )}

                        <div className="builidngContent1">
                          <h3>{pd.name}</h3>
                          {pd.nature && <h5>{pd.nature}</h5>}

                          <ul className="text-sm text-gray-700 space-y-1 mt-2">
                            {pd.achievement1 && <li>• {pd.achievement1}</li>}
                            {pd.achievement2 && <li>• {pd.achievement2}</li>}
                            {pd.achievement3 && <li>• {pd.achievement3}</li>}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
