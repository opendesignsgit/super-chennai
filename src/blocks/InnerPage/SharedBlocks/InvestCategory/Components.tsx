'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './style.css'
import { InvestDetailsProps, SectionInvestment } from '@/models/investment'

export default function InvestCategory({ data }: InvestDetailsProps) {
  console.log('InvestCategory data:', data)

  const [categories, setCategories] = useState<SectionInvestment[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    if (!data?.investments?.length) {
      console.warn('No investments found')
      return
    }
    const extracted: SectionInvestment[] = data.investments.map((investment) => ({
      id: data.id,
      title: data.title,
      sectionTitle: investment.sectionTitle,
      sectionDescription: investment.sectionDescription,
      sectionImage: investment.sectionImage?.url || '',
      investmentItems: (investment.investmentItems || []).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: {
          url: item.image?.url || '',
          alt: item.image?.alt || '',
        },
      })),
    }))

    setCategories(extracted)
    setSelectedCategory(extracted[0]?.sectionTitle || '')
  }, [data])

  const activeCategory = categories.find((cat) => cat.sectionTitle === selectedCategory)
  const activeItems = activeCategory?.investmentItems || []

  return (
    <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
      <div className="Tabs-wrapper">
        {/* Category Buttons */}
        <div className="chennaiInvestmentsButtons justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={cat.sectionTitle === selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.sectionTitle || '')}
            >
              {cat.sectionTitle}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="tabscontainer">
          {activeCategory && (
            <div className="category-info mt-[8vh] flex flex-col items-center w-[80%] text-center mx-auto">
              <h2 className="text-4xl space-x-0.5 font-bold mb-[10px] text-[#a44294]">
                {activeCategory.sectionTitle}
              </h2>
              <p>{activeCategory.sectionDescription}</p>
            </div>
          )}
        </div>

        {/* Investment Items */}
        <div className="buildingSectionFlex">
          {activeItems.map((item) => (
            <div key={item.id} className="bulidingSection">
              <div className="builidngContent">
                <h3>{item.title}</h3>
                <h5>{item.description}</h5>
              </div>
              <Image
                className="buildingImage"
                src={item.image?.url || '/placeholder.jpg'}
                alt={item.image?.alt || item.title}
                width={300}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
