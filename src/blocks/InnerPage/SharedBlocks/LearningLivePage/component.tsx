// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// // Types
// type InfoSectionData = {
//   blockType: 'infoSectionBlock'
//   id?: string
//   title: string
//   icon?: { url?: string } | string
//   description?: string
//   points?: { point: string }[]
// }

// type TableData = {
//   blockType: 'tableBlock'
//   id?: string
//   tableTitle: string
//   headers?: { headerName: string }[]
//   rows?: { cells?: { value: string }[] }[]
// }

// type CategoryData = {
//   blockType: 'categoryBlock'
//   id?: string
//   categoryName: string
//   categoryDesc?: string
//   items?: {
//     name: string
//     desc?: string
//     locations?: { name: string; link?: string }[]
//   }[]
// }

// // ✨ Type for your new section
// type ImageTitleData = {
//   blockType: 'imageTitleBlock'
//   id?: string
//   sectionTitle: string
//   image?: { url?: string } | string
//   imgAlt?: string
// }

// type ContentLayoutBlock = InfoSectionData | TableData | CategoryData | ImageTitleData

// type RegionItem = {
//   id?: string
//   regionName: string
//   heroImage?: { url?: string } | string
//   contentLayout?: ContentLayoutBlock[]
// }

// export default function LearningLivePageComponent({ regions = [] }: { regions?: RegionItem[] }) {
//   const [activeTab, setActiveTab] = useState<string>('')

//   const [isSticky, setIsSticky] = useState(false)
//   const safeRegions = regions || []

//   useEffect(() => {
//     if (safeRegions.length > 0 && !activeTab) {
//       setActiveTab(safeRegions[0]?.regionName || '')
//     }
//   }, [safeRegions, activeTab])

//   if (safeRegions.length === 0) return null
//   const currentRegion = safeRegions.find((r) => r.regionName === activeTab) || safeRegions[0]
//   if (!currentRegion) return null

//   const getMediaUrl = (img?: { url?: string } | string) => {
//     if (!img) return ''
//     return typeof img === 'object' ? img.url || '' : img
//   }

//   const handleStickyScroll = () => {
//     const section = document.querySelector('.entirelearingsection')
//     if (section) {
//       const top = section.getBoundingClientRect().top
//       setIsSticky(top <= 0)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', handleStickyScroll)
//     return () => window.removeEventListener('scroll', handleStickyScroll)
//   }, [])

//   return (
//     <div className="relative entirelearingsection">
//       {/* 1. Region Tabs */}

//       <div className="container max-w-7xl mx-auto px-4 pb-[25px]">
//         <div
//           className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
//             isSticky ? 'fixed top-0 left-0 z-50 bg-white shadow-md py-2 bgggg' : 'relative'
//           }`}
//         >
//           <div className="flex flex-wrap gap-4 justify-center mb-6">
//             {safeRegions.map((region, idx) => (
//               <button
//                 key={region.id || idx}
//                 onClick={() => setActiveTab(region.regionName)}
//                 className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
//                   activeTab === region.regionName
//                     ? '!bg-[#a44294] text-white !font-medium'
//                     : 'bg-gray-200 text-gray-800 !font-medium'
//                 }`}
//               >
//                 {region.regionName}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentRegion.regionName}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -15 }}
//           transition={{ duration: 0.3 }}
//         >
//           {currentRegion.contentLayout?.map((block, index) => {
//             return (
//               <div key={block.id || index}>
//                 <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec">
//                   {/* A. Info Section Block */}
//                   {block.blockType === 'infoSectionBlock' && (
//                     <section
//                       className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 my-4 ${
//                         index % 2 === 0 ? 'bg-white whitebgsec' : ''
//                       } ${
//                         index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-a' : 'pattern-a'
//                       }`}
//                     >
//                       <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
//                         <div
//                           className="clcboxItemss flex mb-4 learninglinkpading"
//                           style={{ paddingBottom: '0' }}
//                         >
//                           {block.icon && (
//                             <div className="clcboxIImg flex-shrink-0 mr-4">
//                               <img
//                                 src={getMediaUrl(block.icon)}
//                                 alt={block.title}
//                                 className="w-12 h-12"
//                               />
//                             </div>
//                           )}
//                           <div className="clcboxICont">
//                             <h3 className="text-lg font-semibold mb-2">{block.title}</h3>
//                             {block.description && (
//                               <p className="mb-2 text-gray-700">{block.description}</p>
//                             )}
//                             {block.points && block.points.length > 0 && (
//                               <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
//                                 {block.points.map((pt, k) => (
//                                   <li key={k}>{pt.point}</li>
//                                 ))}
//                               </ul>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </section>
//                   )}

//                   {/* B. Table Block */}
//                   {block.blockType === 'tableBlock' && (
//                     <div className="overflow-x-auto my-8">
//                       <h2 className="text-2xl font-bold mb-4">{block.tableTitle}</h2>
//                       <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
//                         <thead className="bg-gray-100">
//                           <tr>
//                             {block.headers?.map((hdr, hIdx) => (
//                               <th
//                                 key={hIdx}
//                                 className="px-4 py-3 text-sm font-semibold text-gray-700"
//                               >
//                                 {hdr.headerName}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-200">
//                           {block.rows?.map((row, rIdx) => (
//                             <tr
//                               key={rIdx}
//                               className="hover:bg-gray-50 transition-colors duration-200"
//                             >
//                               {row.cells?.map((cell, cIdx) => (
//                                 <td
//                                   key={cIdx}
//                                   className="px-4 py-3 text-gray-800 text-sm md:text-base"
//                                 >
//                                   {cell.value}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   )}

//                   {/* C. Category Cards Block */}
//                   {block.blockType === 'categoryBlock' && (
//                     <div className="nightlifesecIn my-10">
//                       <h2 className="text-2xl font-semibold mb-2">{block.categoryName}</h2>
//                       {block.categoryDesc && (
//                         <p className="mx-0 my-3 mb-8 text-gray-600">{block.categoryDesc}</p>
//                       )}

//                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {block.items?.map((item, iIdx) => (
//                           <motion.div
//                             key={iIdx}
//                             className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
//                             layout
//                           >
//                             <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//                             {item.desc && <p className="text-gray-700 mb-3">{item.desc}</p>}

//                             {item.locations && item.locations.length > 0 && (
//                               <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
//                                 {item.locations.map((loc, lIdx) =>
//                                   loc.link ? (
//                                     <a
//                                       key={lIdx}
//                                       href={loc.link}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="inline-flex items-center text-xs font-medium text-[#995098] bg-[#995098]/10 hover:bg-[#995098] hover:text-white px-2.5 py-1 rounded-md transition-all"
//                                     >
//                                       📍 {loc.name}
//                                     </a>
//                                   ) : (
//                                     <span
//                                       key={lIdx}
//                                       className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
//                                     >
//                                       📍 {loc.name}
//                                     </span>
//                                   ),
//                                 )}
//                               </div>
//                             )}
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* D. Image Title Banner Block */}
//                 {block.blockType === 'imageTitleBlock' && (
//                   <div className="foodlistsec">
//                     <section
//                       style={{ paddingBottom: '50px' }}
//                       className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 ${
//                         index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'
//                       } ${index === 0 ? 'pattern-a' : index % 2 === 0 ? 'pattern-a' : 'pattern-a'}`}
//                     >
//                       <div className="imgLeft">
//                         <img
//                           src={getMediaUrl(block.image)}
//                           alt={block.imgAlt || block.sectionTitle}
//                         />
//                       </div>
//                       <div className="imgText flex items-center">
//                         <div className="imgcolTitle bg-[#682865] relative">
//                           <h2 className="flex flex-col text-white">
//                             <small>{block.sectionTitle}</small>
//                           </h2>
//                         </div>
//                       </div>
//                     </section>
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Types
type InfoSectionData = {
  blockType: 'infoSectionBlock'
  id?: string
  title: string
  icon?: { url?: string } | string
  description?: string
  points?: { point: string }[]
}

type TableData = {
  blockType: 'tableBlock'
  id?: string
  tableTitle: string
  headers?: { headerName: string }[]
  rows?: { cells?: { value: string }[] }[]
}

type CategoryData = {
  blockType: 'categoryBlock'
  id?: string
  categoryName: string
  categoryDesc?: string
  items?: {
    name: string
    desc?: string
    locations?: { name: string; link?: string }[]
  }[]
}

type ImageTitleData = {
  blockType: 'imageTitleBlock'
  id?: string
  sectionTitle: string
  image?: { url?: string } | string
  imgAlt?: string
}

type ContentLayoutBlock = InfoSectionData | TableData | CategoryData | ImageTitleData

type RegionItem = {
  id?: string
  regionName: string
  heroImage?: { url?: string } | string
  contentLayout?: ContentLayoutBlock[]
}

type MainTabItem = {
  id?: string
  tabTitle: string
  regions?: RegionItem[]
}

export default function LearningLivePageComponent({ mainTabs = [] }: { mainTabs?: MainTabItem[] }) {
  const safeMainTabs = mainTabs || []

  // State for Parent Tab and Sub Tab
  const [activeMainTab, setActiveMainTab] = useState<string>('')
  const [activeSubTab, setActiveSubTab] = useState<string>('')
  const [isSticky, setIsSticky] = useState(false)

  // Default initial active main tab
  useEffect(() => {
    if (safeMainTabs.length > 0 && !activeMainTab) {
      setActiveMainTab(safeMainTabs[0]?.tabTitle || '')
    }
  }, [safeMainTabs, activeMainTab])

  // Get current active Main Tab Object
  const currentMainTabObj =
    safeMainTabs.find((m) => m.tabTitle === activeMainTab) || safeMainTabs[0]
  const currentRegions = currentMainTabObj?.regions || []

  // Sync sub tab when main tab changes
  useEffect(() => {
    if (currentRegions.length > 0) {
      setActiveSubTab(currentRegions[0]?.regionName || '')
    } else {
      setActiveSubTab('')
    }
  }, [activeMainTab, currentRegions])

  // Get current active Sub-Region Object
  const currentRegion =
    currentRegions.find((r) => r.regionName === activeSubTab) || currentRegions[0]

  const getMediaUrl = (img?: { url?: string } | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  const handleStickyScroll = () => {
    const section = document.querySelector('.entirelearingsection')
    if (section) {
      const top = section.getBoundingClientRect().top
      setIsSticky(top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleStickyScroll)
    return () => window.removeEventListener('scroll', handleStickyScroll)
  }, [])

  if (safeMainTabs.length === 0) return null

  return (
    <div className="educationalPageStyle">
      <div className="relative entirelearingsection">
        {/* LEVEL 1: Main Parent Tabs Header */}
        {/* <div className="w-full bg-gray-100 border-b border-gray-200 py-4 mb-4">
          <div className="container max-w-7xl mx-auto px-4 flex justify-center gap-8">
            {safeMainTabs.map((mainTab, idx) => (
              <button
                key={mainTab.id || idx}
                onClick={() => setActiveMainTab(mainTab.tabTitle)}
                className={`text-lg font-bold pb-1 border-b-2 transition-all cursor-pointer ${
                  activeMainTab === mainTab.tabTitle
                    ? 'border-[#a44294] text-[#a44294]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {mainTab.tabTitle}
              </button>
            ))}
          </div>
        </div> */}

        <div className="flex justify-center mb-8 chennaiInvestmentsButtons">
          {/* <button
              className={`newsLetterButton ${tab === "active" ? "active" : ""}`}
              onClick={() => {
                setTab("active");
                setTab1("");
              }}
            >
              Schools
            </button>

            <button
              className={`newsLetterButton ${
                tab1 === "active" ? "active" : ""
              }`}
              onClick={() => {
                setTab1("active");
                setTab("");
              }}
            >
              Colleges
            </button> */}

          {safeMainTabs.map((mainTab, idx) => (
            <button
              key={mainTab.id || idx}
              onClick={() => setActiveMainTab(mainTab.tabTitle)}
              className={`newsLetterButton ${activeMainTab === mainTab.tabTitle ? 'active' : ''}`}
            >
              {mainTab.tabTitle}
            </button>
          ))}
        </div>

        {/* LEVEL 2: Sub-Tab / Region Buttons (Sticky UI) */}
        {currentRegions.length > 0 && (
          <div className="container max-w-7xl mx-auto px-4 pb-[25px]">
            <div
              className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${
                isSticky ? 'fixed top-0 left-0 z-50 bg-white shadow-md py-2 bgggg' : 'relative'
              }`}
            >
              {/* <div className="flex flex-wrap gap-4 justify-center mb-6">
                {currentRegions.map((region, idx) => (
                  <button
                    key={region.id || idx}
                    onClick={() => setActiveSubTab(region.regionName)}
                    className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSubTab === region.regionName
                        ? '!bg-[#a44294] text-white !font-medium'
                        : 'bg-gray-200 text-gray-800 !font-medium'
                    }`}
                  >
                    {region.regionName}
                  </button>
                ))}
              </div> */}

              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {currentRegions.map((region, idx) => (
                  <button
                    key={region.id || idx}
                    onClick={() => {
                      setActiveSubTab(region.regionName)

                      // Smooth scroll to top of section or window
                      const targetElement = document.querySelector('.entirelearingsection')
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
                    className={`cursor-pointer tabButton px-4 py-2 rounded font-semibold transition ${
                      activeSubTab === region.regionName
                        ? '!bg-[#a44294] text-white !font-medium'
                        : 'bg-gray-200 text-gray-800 !font-medium'
                    }`}
                  >
                    {region.regionName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Content Layout based on Sub-Tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMainTab}-${activeSubTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {currentRegion?.contentLayout?.map((block, index) => {
              return (
                <div key={block.id || index}>
                  <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec">
                    {/* A. Info Section Block */}
                    {/* {block.blockType === 'infoSectionBlock' && (
                      <section
                        className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 my-4 learninglinkpading ${
                          index % 2 === 0 ? 'bg-white whitebgsec' : ''
                        }`}
                      >
                        <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                          <div
                            className="clcboxItemss flex mb-4 learninglinkpading"
                            style={{ paddingBottom: '0' }}
                          >
                            {block.icon && (
                              <div className="clcboxIImg flex-shrink-0 mr-4">
                                <img
                                  src={getMediaUrl(block.icon)}
                                  alt={block.title}
                                  className="w-12 h-12"
                                />
                              </div>
                            )}
                            <div className="clcboxICont">
                              <h3 className="text-lg font-semibold mb-2">{block.title}</h3>
                              {block.description && (
                                <p className="mb-2 text-gray-700">{block.description}</p>
                              )}
                              {block.points && block.points.length > 0 && (
                                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                  {block.points.map((pt, k) => (
                                    <li key={k}>{pt.point}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </section>
                    )} */}

                    {block.blockType === 'infoSectionBlock' && (
                      <section
                        className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 my-4 learninglinkpading ${
                          index % 2 === 0 ? 'bg-white whitebgsec' : ''
                        }`}
                      >
                        <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                          <div
                            className="clcboxItemss flex mb-4 learninglinkpading"
                            style={{ paddingBottom: '0' }}
                          >
                            {block.icon && (
                              <div className="clcboxIImg flex-shrink-0 mr-4">
                                <img
                                  src={getMediaUrl(block.icon)}
                                  alt={block.title}
                                  className="w-12 h-12"
                                />
                              </div>
                            )}
                            <div className="clcboxICont">
                              <h3 className="text-lg font-semibold mb-2">{block.title}</h3>

                              {/* Description Render */}
                              {block.description && (
                                <p
                                  className="mb-2 text-gray-700 whitespace-pre-line"
                                  dangerouslySetInnerHTML={{ __html: block.description }}
                                />
                              )}

                              {/* Points Array Render */}
                              {block.points && block.points.length > 0 && (
                                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                  {block.points.map((pt, k) => (
                                    <li key={k} dangerouslySetInnerHTML={{ __html: pt.point }} />
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </section>
                    )}

                    {/* B. Table Block */}
                    {block.blockType === 'tableBlock' && (
                      <div className="overflow-x-auto my-8">
                        <h2 className="text-2xl font-bold mb-4">{block.tableTitle}</h2>
                        <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                          <thead className="bg-gray-100">
                            <tr>
                              {block.headers?.map((hdr, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="px-4 py-3 text-sm font-semibold text-gray-700"
                                >
                                  {hdr.headerName}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {block.rows?.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="hover:bg-gray-50 transition-colors duration-200"
                              >
                                {row.cells?.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className="px-4 py-3 text-gray-800 text-sm md:text-base"
                                  >
                                    {cell.value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* C. Category Cards Block */}
                    {block.blockType === 'categoryBlock' && (
                      <div className="nightlifesecIn my-10">
                        <h2 className="text-2xl font-semibold mb-2">{block.categoryName}</h2>
                        {block.categoryDesc && (
                          <p className="mx-0 my-3 mb-8 text-gray-600">{block.categoryDesc}</p>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {block.items?.map((item, iIdx) => (
                            <motion.div
                              key={iIdx}
                              className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                              layout
                            >
                              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                              {item.desc && <p className="text-gray-700 mb-3">{item.desc}</p>}
                              {item.locations && item.locations.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2 overflow-y-auto transition-all duration-300 max-h-20 custom-scrollbar">
                                  {item.locations.map((loc, lIdx) =>
                                    loc.link ? (
                                      <a
                                        key={lIdx}
                                        href={loc.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm bg-blue-50 px-2 py-1 rounded locicon"
                                      >
                                        {loc.name}
                                      </a>
                                    ) : (
                                      <span
                                        key={lIdx}
                                        className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                                      >
                                        📍 {loc.name}
                                      </span>
                                    ),
                                  )}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* D. Image Title Banner Block */}
                  {block.blockType === 'imageTitleBlock' && (
                    <div className="foodlistsec">
                      <section
                        style={{ paddingBottom: '50px' }}
                        className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 learninglinkpading ${
                          index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'
                        }`}
                      >
                        <div className="imgLeft">
                          <img
                            src={getMediaUrl(block.image)}
                            alt={block.imgAlt || block.sectionTitle}
                          />
                        </div>
                        <div className="imgText flex items-center">
                          <div className="imgcolTitle bg-[#682865] relative">
                            <h2 className="flex flex-col text-white">
                              <small>{block.sectionTitle}</small>
                            </h2>
                          </div>
                        </div>
                      </section>
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
