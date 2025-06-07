/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Media } from 'src/payload-types'
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
  const [scrollDir, setScrollDir] = useState('left')
  const lastScrollY = useRef(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setScrollDir('left')
      } else {
        setScrollDir('right')
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const bgTextRef = useRef(null)
  return (
    <div className="utilitiesMainRow">
      <section className="py-[10vh] utilitiCTabSec">
        <div className="flex flex-col container max-w-7xl mx-auto px-4">
          <div className="utilitiTitle mb-[5vh]">
            {title && <h2>{title}</h2>}
            {description && (
              <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
            )}
          </div>

          <div className="utilitiCheCol ">
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

              <div className="Utilitiestab_container">
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
                          <img
                            src={tab.image.url || '/placeholder.png'}
                            alt={tab.image.alt || tab.tabTitle}
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
        <div
          className={`UtilitiesBackground ${
            scrollDir === 'right' ? 'Utilitiesscroll-right' : 'Utilitiesscroll-left'
          }`}
          ref={bgTextRef}
        >
          <p>Namma &nbsp; Chennai &nbsp; Namma &nbsp; Chennai</p>
        </div>
      </section>
    </div>
  )
}

export default Utilities
