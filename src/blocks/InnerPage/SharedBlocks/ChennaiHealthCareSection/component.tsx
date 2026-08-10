// 'use client'

// import React, { useState, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// type LocationItem = {
//   id?: string
//   name: string
//   link?: string
// }

// type PlaceItem = {
//   id?: string
//   name: string
//   desc?: string
//   locations?: LocationItem[]
// }

// type CategoryItem = {
//   id?: string
//   category: string
//   categoryParaGraph?: string
//   places?: PlaceItem[]
// }

// type ChennaiHealthCareProps = {
//   mainTitle?: string
//   categories?: CategoryItem[]
//   Multispeciality?: CategoryItem[]
// }

// function ExpandableList({
//   items,
//   maxVisible = 2,
// }: {
//   items: { label: string; link?: string }[]
//   maxVisible?: number
// }) {
//   const [isExpanded, setIsExpanded] = useState(false)

//   if (!items || items.length === 0) return null

//   const visibleItems = isExpanded ? items : items.slice(0, maxVisible)
//   const hasMore = items.length > maxVisible

//   return (
//     <div className="mt-3 pt-3 border-t border-gray-100">
//       <div className="flex flex-wrap gap-2">
//         {visibleItems.map((loc, idx) =>
//           loc.link ? (
//             <a
//               key={idx}
//               href={loc.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full hover:bg-blue-100 transition"
//             >
//               📍 {loc.label.trim()}
//             </a>
//           ) : (
//             <span
//               key={idx}
//               className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
//             >
//               📍 {loc.label.trim()}
//             </span>
//           ),
//         )}
//       </div>

//       {hasMore && (
//         <button
//           type="button"
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-xs font-semibold text-[#995098] hover:underline mt-2 inline-block focus:outline-none cursor-pointer"
//         >
//           {isExpanded ? 'Show Less ↑' : `+${items.length - maxVisible} More Locations ↓`}
//         </button>
//       )}
//     </div>
//   )
// }

// function HealthCareCategoryBlock({ section }: { section: CategoryItem }) {
//   const [showAll, setShowAll] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   const placesList = section.places || []
//   const visiblePlaces = showAll ? placesList : placesList.slice(0, 6)

//   const handleToggle = () => {
//     if (showAll && sectionRef.current) {
//       sectionRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       })
//     }
//     setShowAll((prev) => !prev)
//   }

//   return (
//     <div ref={sectionRef} className="nightlifesecIn mb-10">
//       <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>

//       {section.categoryParaGraph && (
//         <p className="mx-0 my-5 mb-9 text-gray-600">{section.categoryParaGraph}</p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence>
//           {visiblePlaces.map((place, idx) => (
//             <motion.div
//               key={place.id || idx}
//               className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               layout
//             >
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
//                 {place.desc && <p className="text-gray-700 mb-2">{place.desc}</p>}
//               </div>

//               {place.locations && place.locations.length > 0 && (
//                 <ExpandableList
//                   items={place.locations.map((loc) => ({
//                     label: loc.name,
//                     link: loc.link,
//                   }))}
//                   maxVisible={2}
//                 />
//               )}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {placesList.length > 6 && (
//         <div className="mt-6 text-center">
//           <button
//             type="button"
//             onClick={handleToggle}
//             className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
//           >
//             {showAll ? 'Show Less' : 'Show More'}
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default function ChennaiHealthCareComponent(props: ChennaiHealthCareProps) {
//   // Console log payload data for debugging
//   console.log('ChennaiHealthCareComponent Props Data:', props)

//   const activeCategories = props.categories || props.Multispeciality || []

//   // Fallback visual check if data is empty or missing
//   if (!activeCategories || activeCategories.length === 0) {
//     return (
//       <div className="p-4 my-4 text-center border border-dashed border-gray-400 text-gray-500 rounded-lg">
//         <p>ChennaiHealthCareComponent: No category data provided from Payload CMS.</p>
//       </div>
//     )
//   }

//   return (
//     <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife cmssectionss my-8">
//       {props.mainTitle && <h1 className="text-3xl font-bold mb-8">{props.mainTitle}</h1>}

//       {activeCategories.map((section, sectionIdx) => (
//         <HealthCareCategoryBlock key={section.id || sectionIdx} section={section} />
//       ))}
//     </div>
//   )
// }

'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type LocationItem = {
  id?: string
  name: string
  link?: string
}

type PlaceItem = {
  id?: string
  name: string
  desc?: string
  locations?: LocationItem[]
}

type CategoryItem = {
  id?: string
  category: string
  categoryParaGraph?: string
  places?: PlaceItem[]
}

type ChennaiHealthCareProps = {
  mainTitle?: string
  categories?: CategoryItem[]
}

function ExpandableList({
  items,
  maxVisible = 2,
}: {
  items: { label: string; link?: string }[]
  maxVisible?: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!items || items.length === 0) return null

  const visibleItems = isExpanded ? items : items.slice(0, maxVisible)

  const hasMore = items.length > maxVisible

  return (
    <div>
      <div className="space-y-1">
        {visibleItems.map((loc, idx) =>
          loc.link ? (
            <a
              key={idx}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-700 hover:text-[#995098]"
            >
              📍 {loc.label.trim()}
            </a>
          ) : (
            <span key={idx} className="block text-sm text-gray-700">
              📍 {loc.label.trim()}
            </span>
          ),
        )}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-[#995098] hover:underline mt-2 cursor-pointer"
        >
          {isExpanded ? 'Show Less ↑' : `+${items.length - maxVisible} More Locations ↓`}
        </button>
      )}
    </div>
  )
}

function HealthCareCategoryBlock({ section }: { section: CategoryItem }) {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const placesList = section.places || []

  const visiblePlaces = showAll ? placesList : placesList.slice(0, 6)

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setShowAll((prev) => !prev)
  }

  return (
    <div ref={sectionRef} className="mb-12">
      <h2 className="text-2xl font-bold">{section.category}</h2>

      {section.categoryParaGraph && (
        <p className="mx-0 my-5 mb-9 text-gray-600">{section.categoryParaGraph}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visiblePlaces.map((place, idx) => (
            <motion.div
              key={place.id || idx}
              className="p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>

                {place.desc && <p className="text-gray-700 mb-2">{place.desc}</p>}
              </div>

              {place.locations && place.locations.length > 0 && (
                <ExpandableList
                  items={place.locations.map((loc) => ({
                    label: loc.name,
                    link: loc.link,
                  }))}
                  maxVisible={2}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {placesList.length > 6 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleToggle}
            className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default function ChennaiHealthCareComponent(props: ChennaiHealthCareProps) {
  console.log('HEALTHCARE PAYLOAD DATA:', props)

  const activeCategories = props.categories || []

  if (activeCategories.length === 0) {
    return (
      <div className="py-10 text-center">
        ChennaiHealthCareComponent: No category data provided from Payload CMS.
      </div>
    )
  }

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        {props.mainTitle && <h2 className="text-3xl font-bold mb-10">{props.mainTitle}</h2>}

        {activeCategories.map((section, sectionIdx) => (
          <HealthCareCategoryBlock key={section.id || sectionIdx} section={section} />
        ))}
      </div>
    </section>
  )
}
