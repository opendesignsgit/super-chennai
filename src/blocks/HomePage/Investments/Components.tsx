'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './style.css'
import { ChennaiInvestmentsProps, ExtractedCategory, InvestmentAPIItem } from '@/models/investment'
export default function ChennaiInvestments({ heading, subheading }: ChennaiInvestmentsProps) {
  const [extracted, setCategories] = useState<ExtractedCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/investments')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }
        if (Array.isArray(data.docs)) {
          const extracted = data.docs.map((doc: InvestmentAPIItem) => ({
            id: doc.id,
            title: doc.title,
            sectionTitle: '',
            sectionDescription: '',
            sectionImage: '',
            investmentItems: (doc.investments || []).flatMap((investment) =>
              (investment.investmentItems || []).map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                image: {
                  url: item.image?.url || '',
                  alt: item.image?.alt || '',
                },
              })),
            ),
          }))

          setCategories(extracted)
          setSelectedCategory(extracted[0]?.title || '')
        }
      } catch (error) {
        console.error('Failed to fetch events:', error)
      }
    }
    fetchEvents()
  }, [])
  const activeCategory = extracted.find((cat) => cat.title === selectedCategory)
  const activeData = activeCategory?.investmentItems || []
  return (
    <div className="chennaiInvestmentBg">
      <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
        
        <div className="ChennaiInvestMents">
          <h4>{heading}</h4>
          <h6>{subheading}</h6>
        </div>

        <div className="chennaiInvestmentsButtons">
          {extracted.map((cat, index) => (
            <button
              key={index}
              className={cat.title === selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.title)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="buildingSectionFlex">
          {activeData.slice(0, 3).map((item, index) => (
            <div className="bulidingSection" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="builidngContent">
                    <h3>{item.title}</h3>
                    <h5>{item.description}</h5>
                  </div>
                  {item.image?.url && (
                    <Image
                      className="buildingImage"
                      src={item.image.url}
                      alt={item.image.alt || ''}
                      width={500}
                      height={300}
                    />
                  )}
                </>
              ) : (
                <>
                  {item.image?.url && (
                    <Image
                      className="buildingImage1"
                      src={item.image.url}
                      alt={item.image.alt || ''}
                      width={500}
                      height={300}
                    />
                  )}
                  <div className="builidngContent1">
                    <h3>{item.title}</h3>
                    <h5>{item.description}</h5>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
