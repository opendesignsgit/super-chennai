'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import './style.css'

type Props = {
  title?: string
  description?: string
  tabs: {
    tabTitle: string
    image: Media
  }[]
}

const Utilities: React.FC<Props> = ({ title, description, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.tabTitle || '')

  return (
    <section className="py-[10vh] utilitiCTabSec">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="utilitiTitle mb-[5vh]">
          {title && <h2>{title}</h2>}
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
          )}
        </div>

        <div className="utilitiCheCol">
          <div className="utilitiCTabs flex">
            <ul className="tabs flex flex-col items-start">
              {tabs.map((tab, i) => (
                <li
                  key={tab.tabTitle}
                  className={`tab ${activeTab === tab.tabTitle ? 'active' : ''} ${
                    i === tabs.length - 1 ? 'tab_last' : ''
                  }`}
                  onClick={() => setActiveTab(tab.tabTitle)}
                >
                  {tab.tabTitle}
                </li>
              ))}
            </ul>

            <div className="tab_container">
              {tabs.map((tab) => (
                <React.Fragment key={tab.tabTitle}>
                  <h3
                    className={`tab_drawer_heading ${activeTab === tab.tabTitle ? 'd_active' : ''}`}
                    onClick={() => setActiveTab(tab.tabTitle)}
                  >
                    {tab.tabTitle}
                  </h3>
                  <div
                    className="tab_content"
                    style={{ display: activeTab === tab.tabTitle ? 'block' : 'none' }}
                  >
                    {tab.image && typeof tab.image === 'object' && (
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                        <Image
                          src={tab.image.url || '/placeholder.png'}
                          alt={tab.image.alt || tab.tabTitle}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}

                    
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Utilities
