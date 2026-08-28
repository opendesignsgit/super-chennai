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

type ContentLayoutBlock = InfoSectionData | TableData | CategoryData

type RegionItem = {
  id?: string
  regionName: string
  heroImage?: { url?: string } | string
  contentLayout?: ContentLayoutBlock[]
}

export default function LearningLivePageComponent({ regions = [] }: { regions?: RegionItem[] }) {
  const [activeTab, setActiveTab] = useState<string>('')
  const safeRegions = regions || []

  useEffect(() => {
    if (safeRegions.length > 0 && !activeTab) {
      setActiveTab(safeRegions[0]?.regionName || '')
    }
  }, [safeRegions, activeTab])

  if (safeRegions.length === 0) return null
  const currentRegion = safeRegions.find((r) => r.regionName === activeTab) || safeRegions[0]
  if (!currentRegion) return null

  const getMediaUrl = (img?: { url?: string } | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  return (
    <div className="w-full">
      {/* 1. Region Tabs */}
      <div className="flex flex-wrap justify-center gap-3 py-6 bg-white border-b sticky top-0 z-10 shadow-sm">
        {safeRegions.map((region, idx) => (
          <button
            key={region.id || idx}
            onClick={() => setActiveTab(region.regionName)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === region.regionName
                ? 'bg-[#682865] text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {region.regionName}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRegion.regionName}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec">
            {/* Dynamic Content Loop based on Payload order */}
            {currentRegion.contentLayout?.map((block, index) => {
              // A. Render Info Section Block
              if (block.blockType === 'infoSectionBlock') {
                return (
                  <section
                    key={block.id || index}
                    className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 my-4 ${
                      index % 2 === 0 ? 'bg-white whitebgsec' : ''
                    } ${
                      index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-c' : 'pattern-c'
                    }`}
                  >
                    <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                      <div className="clcboxItemss flex mb-4" style={{ paddingBottom: '0' }}>
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
                )
              }

              // B. Render Table Block
              if (block.blockType === 'tableBlock') {
                return (
                  <div key={block.id || index} className="overflow-x-auto my-8">
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
                )
              }

              // C. Render Category Cards Block
              if (block.blockType === 'categoryBlock') {
                return (
                  <div key={block.id || index} className="nightlifesecIn my-10">
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
                            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                              {item.locations.map((loc, lIdx) =>
                                loc.link ? (
                                  <a
                                    key={lIdx}
                                    href={loc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-xs font-medium text-[#995098] bg-[#995098]/10 hover:bg-[#995098] hover:text-white px-2.5 py-1 rounded-md transition-all"
                                  >
                                    📍 {loc.name}
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
                )
              }

              return null
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
