'use client'

import React from 'react'

type PayloadMedia = {
  id?: string
  url: string
  alt?: string
}

type PointItem = {
  id?: string
  text: string
}

type TenantInfoItem = {
  id?: string
  title: string
  iconImage: PayloadMedia | string
  imgAlt?: string
  points: PointItem[]
}

type TenantInfoProps = {
  tenantInfoSections?: TenantInfoItem[]
  index?: number // Outer index prop optional-a add panniyachu
}

export default function InvestPageBorderSectionComponent({
  index = 0, // Default index = 0
  tenantInfoSections = [
    {
      iconImage: '/images/Invest-Images/Icons/High-Potential-Growth-Economy.svg',
      imgAlt: '',
      title: 'High-Potential Growth Economy',
      points: [
        {
          text: 'Chennai is rapidly evolving into one of India’s most promising economic powerhouses. With consistent GDP growth, a resilient industrial base, and a tech-forward mindset, the city is poised for long-term expansion. Government policies, smart infrastructure investments, and a booming digital economy make Chennai a future-looking destination for global and domestic investors alike.',
        },
        {
          text: "If you're exploring investment opportunities in Chennai, the time to act is now. Chennai invest is no longer a possibility — it’s a priority.",
        },
      ],
    },
    {
      iconImage: '/images/Invest-Images/Icons/Strategic-Location.svg',
      imgAlt: '',
      title: 'Strategic Location',
      points: [
        {
          text: 'Chennai: Empowering Your Business Aspirations Strategically located on the southeastern coast of India, Chennai offers unparalleled access to domestic and international markets. Its world-class ports, major highways, and international airport make it a vital logistics and trading hub. Chennai serves as the southern gateway to ASEAN economies and plays a crucial role in regional trade networks.',
        },
        {
          text: "Chennai: A Global Trade Connector With two major seaports (Chennai Port and Kamarajar Port) and close proximity to emerging economic corridors, Chennai is a key node in India’s global supply chain. Whether you're a manufacturer, exporter, or logistics company, business investment in Chennai gives you the edge to scale globally.",
        },
      ],
    },
  ],
}: TenantInfoProps) {
  return (
    <div id="InvestMainPage">
      <section
        className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
        ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#7d377d] colorbgsec'} 
        ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
        key={index}
      >
        {tenantInfoSections?.map((tenant, i) => {
          const iconUrl =
            typeof tenant.iconImage === 'object' ? tenant.iconImage?.url : tenant.iconImage

          const imageAlt =
            tenant.imgAlt ||
            (typeof tenant.iconImage === 'object'
              ? tenant.iconImage?.alt || tenant.title
              : tenant.title)

          return (
            <div
              className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList"
              key={tenant.id || i}
            >
              <div>
                <h4 className="text-lg font-semibold mb-2">{tenant.title}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {tenant.points?.map((point, j) => <li key={point.id || j}>{point.text}</li>)}
                </ul>
              </div>

              {iconUrl && (
                <div className="tenanticonImageDiv">
                  <img className="tenanticonImage" src={iconUrl} alt={imageAlt} />
                </div>
              )}
            </div>
          )
        })}
      </section>
    </div>
  )
}
