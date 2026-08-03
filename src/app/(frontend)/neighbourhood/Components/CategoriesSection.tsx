'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../ui/SliderArrows'
import { CategoryCard } from './CategoryCard'

interface CategoriesSectionProps {
  locationId: string
  data: any[]
  location?: any
  apiBaseUrl: string
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  locationId,
  data = [],
  location,
  apiBaseUrl,
}) => {
  const transformedSlides = useMemo(() => {
    return Object.values(
      data.reduce((acc: any, item: any) => {
        const categoryName = item?.category?.title || 'Others'
        const categoryIcon = item?.category?.icon || '📍'

        if (!acc[categoryName]) {
          acc[categoryName] = {
            id: categoryName,
            category: categoryName,
            icon: categoryIcon,
            title: `${categoryName} Nearby`,
            count: '',
            imagelist: [],
            lists: [],
            locations: item.locations || null,
          }
        }

        if (item?.heroImage?.url) {
          acc[categoryName].imagelist.push(item.heroImage.url)
        }

        acc[categoryName].lists.push({
          slug: item.slug || '',
          icon: categoryIcon,
          name: item.name || 'Unknown',
          type: item.type || '',
          dist: item.distance || 'Nearby',
          FeaturedImage: item.FeaturedImage || '',
          description: item.description || '',
          googleData: item.googleData || '',
          locations: item.locations || null,
        })

        return acc
      }, {}),
    ).map((slide: any) => {
      slide.count = `${slide.lists.length}+ ${slide.category} Nearby`
      if (slide.imagelist.length === 0) {
        slide.imagelist = ['https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80']
      }
      return slide
    })
  }, [data])

  const [activeCategory, setActiveCategory] = useState<string>(
    () => transformedSlides[0]?.category || '',
  )

  useEffect(() => {
    if (transformedSlides.length > 0 && !activeCategory) {
      setActiveCategory(transformedSlides[0].category)
    }
  }, [transformedSlides, activeCategory])

  const categoriesList = transformedSlides.map((item: any) => ({
    category: item.category,
    icon: item.icon,
  }))

  const filteredSlides = transformedSlides.filter(
    (slide: any) => slide.category === activeCategory,
  )

  const bannerSliderSettings = {
    dots: true,
    infinite: transformedSlides.length > 0,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-1.5 justify-center items-center m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: () => <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all" />,
  }

  const itemsSliderSettings = {
    dots: true,
    infinite: transformedSlides.length > 0,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-1.5 justify-center items-center m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: () => <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all" />,
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto items-start">
      {/* Category Sidebar */}
      <div className="w-full md:w-60 space-y-2 flex-shrink-0">
        {categoriesList.map((cat: any) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] transition-all ${
              activeCategory === cat.category
                ? 'bg-[#a44294] text-white font-medium shadow-md'
                : 'bg-white border border-gray-200 text-[#000] hover:bg-purple-50'
            }`}
          >
            <span className="flex items-center gap-2">
              {cat.icon && typeof cat.icon === 'object' && cat.icon.url ? (
                <img
                  src={`${apiBaseUrl}${cat.icon.url}`}
                  alt={cat.icon.alt || cat.category}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <span>{cat.icon || '📍'}</span>
              )}
              {cat.category}
            </span>
            <span>›</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full">
        {filteredSlides.length > 0 ? (
          filteredSlides.map((slide: any) => {
            const safeCat = slide.category?.toLowerCase()
            return (
              <div key={slide.id} className="w-full">
                {/* Banner Slider */}
                <div className="relative rounded-xl overflow-hidden mb-4 h-[360px]">
                  <Slider {...bannerSliderSettings}>
                    {slide.imagelist.map((imgUrl: string, index: number) => (
                      <a key={index} href={`/neighbourhood/${locationId}/${safeCat}`}>
                        <div className="relative h-[360px] w-full overflow-hidden group">
                          <img
                            src={imgUrl.startsWith('http') ? imgUrl : `${apiBaseUrl}${imgUrl}`}
                            alt={slide.title}
                            className="w-full h-[360px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </a>
                    ))}
                  </Slider>

                  <div className="absolute bottom-11 left-10 right-10 flex items-end justify-between pointer-events-none z-10">
                    <div>
                      <h3 className="text-white font-bold text-xl">{slide.title}</h3>
                      <p className="text-gray-300 text-sm">{slide.count}</p>
                    </div>
                    <a href={`/neighbourhood/${locationId}/${safeCat}`}>
                      <button className="cursor-pointer pointer-events-auto flex items-center gap-2 bg-white text-[#a44294] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#a44294] hover:text-white transition-colors duration-200 whitespace-nowrap">
                        Explore {slide.category} →
                      </button>
                    </a>
                  </div>
                </div>

                {/* Items Grid or Slider */}
                <div>
                  <div className="flex items-center justify-between mb-5 mt-5">
                    <span className="font-semibold text-gray-800">
                      Popular Nearby {slide.category}
                    </span>
                    <a
                      href={`/neighbourhood/${locationId}/${safeCat}`}
                      className="text-[#a44294] font-medium hover:underline"
                    >
                      View All
                    </a>
                  </div>

                  <div className="border border-gray-200 shadow-sm rounded-lg p-4 bg-white">
                    {slide.lists.length > 3 ? (
                      <Slider {...itemsSliderSettings}>
                        {slide.lists.map((item: any, i: number) => (
                          <div key={item.slug || item.name || i} className="outline-none px-3">
                            <CategoryCard
                              item={item}
                              locationId={locationId}
                              safeCat={safeCat}
                              apiBaseUrl={apiBaseUrl}
                            />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                        {slide.lists.map((item: any, i: number) => (
                          <CategoryCard
                            key={item.slug || item.name || i}
                            item={item}
                            locationId={locationId}
                            safeCat={safeCat}
                            apiBaseUrl={apiBaseUrl}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="w-full text-center py-24 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
            <span className="text-3xl block mb-2">📍</span>
            No nearby data available for this category yet.
          </div>
        )}
      </div>
    </div>
  )
}