'use client'

import React from 'react'

export default function VisitImageListSectionComponent(props: any) {
  // 1. Schema fallback (sections vs imageSections)
  const imageSections = props.sections || props.imageSections || []

  // Helper function to extract Image URL dynamically (String vs Payload Object)
  const getImageUrl = (img: any): string => {
    if (!img) return ''
    if (typeof img === 'string') return img
    if (typeof img === 'object' && img.url) return img.url
    return ''
  }

  // Helper function to extract Alt Text dynamically
  const getImageAlt = (img: any, fallbackAlt?: string): string => {
    if (typeof img === 'object' && img?.alt) return img.alt
    return fallbackAlt || ''
  }

  if (!imageSections || imageSections.length === 0) {
    return null
  }

  return (
    <div className="foodlistsec">
      {imageSections.map((section: any, index: number) => {
        // Fallback for nested array keys
        const tenantList = section.tenantSections || section.tenantInfoSections || []
        const tenantCount = tenantList.length
        const parentClass = tenantCount % 2 === 0 ? 'even-count' : 'odd-count'

        // Safely extract main image URL & Alt
        const mainImageUrl = getImageUrl(section.image)
        const mainImageAlt = getImageAlt(section.image, section.imgAlt)

        return (
          <section
            key={section.id || index}
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 ${
              index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'
            } ${index === 0 ? 'pattern-a' : index % 2 === 0 ? 'pattern-b' : 'pattern-c'}`}
          >
            {/* Main Image */}
            <div className="imgLeft">
              {mainImageUrl ? <img src={mainImageUrl} alt={mainImageAlt} /> : null}
            </div>

            {/* Title & Description */}
            <div className="imgText flex items-center">
              <div className="imgcolTitle bg-[#682865] relative">
                <h2 className="flex flex-col text-white">
                  <small>{section.sectionTitle}</small>
                </h2>
                {section.sectionDesc && <p>{section.sectionDesc}</p>}
              </div>
            </div>

            {/* Tenant Info Points List */}
            {tenantList.length > 0 && (
              <div
                className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
              >
                {tenantList.map((tenant: any, i: number) => (
                  <div key={tenant.id || i}>
                    {(tenant.points || []).map((item: any, j: number) => {
                      const iconUrl = getImageUrl(item.imgs)
                      const iconAlt = getImageAlt(item.imgs, item.imgAlt)

                      return (
                        <div key={item.id || j} className="clcboxItemss flex mb-4">
                          {iconUrl && (
                            <div className="clcboxIImg">
                              <img src={iconUrl} alt={iconAlt} />
                            </div>
                          )}
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            {item.para && <p>{item.para}</p>}
                            {item.link && (
                              <div className="exploreMorebuttonVisitChennai">
                                <a
                                  href={item.link}
                                  className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                  Explore More
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
