'use client'

import React, { useState, useRef, useEffect } from 'react'

type MediaAsset2026 = {
  url?: string
  alt?: string
  filename?: string
}

type InvestCard2026Item = {
  id?: string
  cardTitle: string
  cardDescription: string
  cardMedia: MediaAsset2026 | string
  cardMediaAltText?: string
}

type InvestCategory2026Item = {
  id?: string
  categoryTabLabel: string
  categoryHeadingTitle: string
  categorySummaryText: string
  investCards2026?: InvestCard2026Item[]
}

type ChenzInvest2026Props = {
  categories?: InvestCategory2026Item[]
}

export default function ChenzInvest2026Component({
  categories = [
    {
      categoryTabLabel: 'Food and beverage brands',
      categoryHeadingTitle: 'Food and Beverage Brands',
      categorySummaryText:
        "You can choose a reputable franchise of food and beverages businesses in Chennai's culinary sector, and you can make money with a track record of success.",
      investCards2026: [
        {
          cardTitle: 'Quick-service restaurants',
          cardDescription:
            'Since investing in the food industry is scorching, you could discover a franchise and begin operating it effectively.',
          cardMedia: '/images/Invest-Images/SubPages/Food-and-Beverage/quick-service.jpg',
          cardMediaAltText: 'food beverages',
        },
        {
          cardTitle: 'Coffee shops and cafes',
          cardDescription:
            'By offering a range of coffees, you could lure coffee lovers and market your franchise to them.',
          cardMedia: '/images/Invest-Images/SubPages/Food-and-Beverage/coffee-shops.jpg',
          cardMediaAltText: 'coffee shop',
        },
        {
          cardTitle: 'Ice cream and dessert shops',
          cardDescription: "Chennai City's clientele for ice cream and sweets is varied.",
          cardMedia: '/images/Invest-Images/SubPages/Food-and-Beverage/ice-cream.jpg',
          cardMediaAltText: 'ice cream shop',
        },
        {
          cardTitle: 'Food outlets',
          cardDescription:
            'For a higher return on investment, open your business in areas where a lot of people congregate, including malls and high streets.',
          cardMedia: '/images/Invest-Images/SubPages/Food-and-Beverage/food-outlets.jpg',
          cardMediaAltText: 'restaurants chennai',
        },
      ],
    },
    {
      categoryTabLabel: 'Retail and service sectors',
      categoryHeadingTitle: 'Retail and Service Sectors',
      categorySummaryText:
        "Numerous businesses provide franchise possibilities in the retail and service sectors in response to Chennai's expanding customer requirements.",
      investCards2026: [],
    },
    {
      categoryTabLabel: 'Niche franchise models',
      categoryHeadingTitle: 'Niche Franchise Models',
      categorySummaryText:
        'Select your franchise concept niche, research the brand, and begin investing there to expand on certain ideas.',
      investCards2026: [],
    },
  ],
}: ChenzInvest2026Props) {
  const [activeTab2026, setActiveTab2026] = useState<string>('')
  const accordionRefs2026 = useRef<(HTMLDivElement | null)[]>([])

  // Set initial active tab safely on load
  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveTab2026(categories[0].categoryTabLabel)
    }
  }, [categories])

  const currentActiveCategory = categories?.find((cat) => cat.categoryTabLabel === activeTab2026)

  // Safe Image URL Resolution (Payload Media object vs Static Asset path)
  const extractAssetUrl = (asset: MediaAsset2026 | string | any) => {
    if (!asset) return ''

    // Payload CMS Upload Object Mapping
    if (typeof asset === 'object' && asset !== null) {
      if (asset.url) {
        return asset.url.startsWith('http') ? asset.url : asset.url
      }
    }

    // Direct String URLs or Relative Static Public paths
    if (typeof asset === 'string') {
      return asset
    }

    return ''
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
      <div className="Tabs-wrapper">
        {/* Desktop Filter Navigation Tabs */}
        <div className="chennaiInvestmentsButtons justify-center flex-wrap gap-3 hidden md:flex">
          {categories?.map((cat, idx) => (
            <button
              key={cat.id || idx}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                cat.categoryTabLabel === activeTab2026
                  ? 'active bg-[#a44294] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab2026(cat.categoryTabLabel)}
            >
              {cat.categoryTabLabel}
            </button>
          ))}
        </div>

        {/* Desktop Dynamic Grid Layout */}
        <div className="tabscontainer hidden md:block">
          {currentActiveCategory && (
            <div className="category-info mt-[8vh] flex flex-col items-center w-[80%] text-center mx-auto mb-10">
              <h2 className="text-4xl space-x-0.5 font-bold mb-[10px] text-[#a44294]">
                {currentActiveCategory.categoryHeadingTitle}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                {currentActiveCategory.categorySummaryText}
              </p>
            </div>
          )}

          <div className="buildingSectionFlex">
            {currentActiveCategory?.investCards2026?.map((item, idx) => {
              const imgSource = extractAssetUrl(item.cardMedia)
              const isEvenIndex = idx % 2 === 0

              return (
                <div className="bulidingSection" key={item.id || idx} style={{ cursor: 'default' }}>
                  {isEvenIndex ? (
                    <>
                      <div className="builidngContent" style={{ cursor: 'default' }}>
                        <h3 className="">{item.cardTitle}</h3>
                        <h5 className="">{item.cardDescription}</h5>
                      </div>
                      <img
                        className="buildingImage"
                        src={imgSource}
                        alt={item.cardMediaAltText || item.cardTitle}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        className="buildingImage1"
                        src={imgSource}
                        alt={item.cardMediaAltText || item.cardTitle}
                        style={{ cursor: 'default' }}
                      />
                      <div className="builidngContent1" style={{ cursor: 'default' }}>
                        <h3 className="">{item.cardTitle}</h3>
                        <h5 className="">{item.cardDescription}</h5>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Accordion View */}
      <div className="accordion-wrapper space-y-4 mt-6 md:hidden">
        {categories?.map((cat, idx) => {
          const isTabOpen = activeTab2026 === cat.categoryTabLabel

          const toggleMobileAccordion = () => {
            if (!isTabOpen) {
              setActiveTab2026(cat.categoryTabLabel)
              setTimeout(() => {
                accordionRefs2026.current[idx]?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }, 100)
            } else {
              setActiveTab2026('')
            }
          }

          return (
            <div
              key={cat.id || idx}
              ref={(el) => {
                accordionRefs2026.current[idx] = el
              }}
              className="accordion-item border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left px-4 py-3 font-semibold bg-[#f7f7f7] hover:bg-[#eaeaea] transition duration-200 flex justify-between items-center ${
                  isTabOpen ? 'text-[#a44294]' : 'text-gray-800'
                }`}
                onClick={toggleMobileAccordion}
              >
                <span>{cat.categoryTabLabel}</span>
                <span className="text-xl font-bold">{isTabOpen ? '−' : '+'}</span>
              </button>

              {isTabOpen && (
                <div className="accordion-content px-4 py-4 bg-white">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-[#a44294] mb-2">
                      {cat.categoryHeadingTitle}
                    </h2>
                    <p className="text-gray-600 text-sm">{cat.categorySummaryText}</p>
                  </div>

                  <div className="buildingSectionFlex flex flex-col gap-6">
                    {cat.investCards2026?.map((item, itemIdx) => {
                      const imgSource = extractAssetUrl(item.cardMedia)

                      return (
                        <div
                          className="bulidingSection flex flex-col items-center gap-4 border-b border-gray-100 pb-6 last:border-b-0"
                          key={item.id || itemIdx}
                        >
                          <div className="builidngContent w-full">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {item.cardTitle}
                            </h3>
                            <h5 className="text-gray-600 text-sm">{item.cardDescription}</h5>
                          </div>
                          <img
                            className="buildingImage w-full h-[220px] object-cover rounded-xl shadow-md"
                            src={imgSource}
                            alt={item.cardMediaAltText || item.cardTitle}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
