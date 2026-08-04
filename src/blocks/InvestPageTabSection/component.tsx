'use client'

import React, { useState } from 'react'

type PayloadMedia = {
  id?: string
  url: string
  alt?: string
}

type TabItem = {
  id?: string
  tabTitle: string
  icon: PayloadMedia | string
  heading: string
  description: string
  buttonText?: string
  buttonLink: string
}

type UtilitiesTabsProps = {
  tabs?: TabItem[]
}

export default function InvestPageTabComponent({
  tabs = [
    {
      tabTitle: 'Government Initiatives',
      icon: '/images/Invest-Images/Icons/government-icon.svg',
      heading: 'GOVERNMENT INITIATIVES',
      description:
        'Existing investment opportunities in government-initiated and driven wind and solar projects. It can help create a more environmentally friendly future while taking advantage of a growing market.',
      buttonText: 'Explore More',
      buttonLink: '/invest/government-projects-in-chennai',
    },
    {
      tabTitle: 'Formulations & Regulations',
      icon: '/images/Invest-Images/Icons/formalities-icon.svg',
      heading: 'FORMALITIES & REGULATIONS',
      description:
        'Navigating legal systems, such as company registration and environmental permits, is part of investing in Chennai. To make these requirements easier, government organizations provide online portals and instruction.',
      buttonText: 'Explore More',
      buttonLink: '/invest/law-firms-in-chennai',
    },
    {
      tabTitle: 'News',
      icon: '/images/Invest-Images/Icons/news-icon.svg',
      heading: 'NEWS',
      description:
        "Chennai's increasing investment in industries like data centers and electric cars has been highlighted in recent headlines. Stay up-to-date on business news to learn about the most recent advancements and prospects.",
      buttonText: 'Explore More',
      buttonLink: '/invest/news-in-chennai',
    },
    {
      tabTitle: 'Events',
      icon: '/images/Invest-Images/Icons/events-icon.svg',
      heading: 'EVENTS',
      description:
        'A number of corporate conferences, industry-specific seminars, and investment summits are held in Chennai. These gatherings offer chances for networking, information about new industries, and stages for exhibiting investment possibilities.',
      buttonText: 'Explore More',
      buttonLink: '/invest/chennai-events',
    },
    {
      tabTitle: 'Exhibitions',
      icon: '/images/Invest-Images/Icons/exhibition-icon.svg',
      heading: 'EXHIBITIONS',
      description:
        'Investors have the opportunity to evaluate industry trends and uncover potential enterprises by attending these events, which feature goods, innovations, and possible collaborations.',
      buttonText: 'Explore More',
      buttonLink: '/invest/exhibitions-in-chennai',
    },
  ],
}: UtilitiesTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0)

  if (!tabs || tabs.length === 0) return null

  return (
    <div className="utilities1-main-wrapper">
      <section className="py-[10vh] utilities1-section">
        <div className="flex flex-col container max-w-7xl mx-auto px-4">
          <div className="utilities1-column">
            <div className="utilities1-tabs-container flex">
              {/* Left side desktop tab list */}
              <ul className="utilities1-tabs flex flex-col items-start justify-center">
                {tabs.map((tab, index) => (
                  <li
                    key={tab.id || index}
                    className={`utilities1-tab ${
                      activeTab === index ? 'utilities1-tab-active' : ''
                    } ${index === tabs.length - 1 ? 'utilities1-tab-last' : ''}`}
                    onClick={() => setActiveTab(index)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    {tab.tabTitle}
                  </li>
                ))}
              </ul>

              {/* Right side tab content */}
              <div className="utilities1-content-container">
                {tabs.map((tab, index) => {
                  const iconUrl = typeof tab.icon === 'object' ? tab.icon?.url : tab.icon

                  return (
                    <React.Fragment key={tab.id || index}>
                      <h3
                        className={`utilities1-tab-heading ${
                          activeTab === index ? 'utilities1-heading-active' : ''
                        }`}
                        onClick={() => setActiveTab(index)}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        {tab.tabTitle}
                        <span className="utilities1-toggle-symbol">
                          {activeTab === index ? '−' : '+'}
                        </span>
                      </h3>
                      <div
                        className="utilities1-tab-content"
                        style={{
                          display: activeTab === index ? 'block' : 'none',
                        }}
                      >
                        <div className="InvestMainDivSection TabInvestSection">
                          {iconUrl && (
                            <img
                              src={iconUrl}
                              alt={
                                typeof tab.icon === 'object'
                                  ? tab.icon?.alt || tab.heading
                                  : tab.heading
                              }
                            />
                          )}
                          <h3 className="investH3" style={{ color: '#626262' }}>
                            {tab.heading}
                          </h3>
                          <p style={{ color: '#000' }}>{tab.description}</p>
                          <div className="exploreMorebuttonInvestChennai">
                            <a href={tab.buttonLink} data-discover="true">
                              {tab.buttonText || 'Explore More'}
                            </a>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
