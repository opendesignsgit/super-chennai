// 'use client'

// import { useRouter, useSearchParams } from 'next/navigation'
// import { useState } from 'react'
// import { ChevronDown, ChevronUp } from 'lucide-react'

// type Category = {
//   id: string | number
//   title: string
// }

// type Language = {
//   label: string
//   value: string
// }

// type Props = {
//   categories: Category[]
//   languages: Language[]
// }

// export const EventFiltersSidebar = ({ categories = [], languages = [] }: Props) => {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const [openSections, setOpenSections] = useState({
//     categories: true,
//     languages: true,
//     moreFilters: true,
//     date: true,
//   })

//   const initialFree = searchParams.get('free') === 'true'
//   const initialFamily = searchParams.get('family') === 'true'

//   const [free, setFree] = useState(initialFree)
//   const [family, setFamily] = useState(initialFamily)

//   const [showAllCategories, setShowAllCategories] = useState(false)
//   const [showAllLanguages, setShowAllLanguages] = useState(false)

//   /*
//    * URL values
//    *
//    * category=1,2,3
//    * language=Tamil,English
//    */
//   const selectedCategories = searchParams.get('category')?.split(',').filter(Boolean) || []

//   const selectedLanguages = searchParams.get('language')?.split(',').filter(Boolean) || []

//   const startDate = searchParams.get('startDate') || ''
//   const endDate = searchParams.get('endDate') || ''

//   /*
//    * Update URL
//    */
//   const updateParams = (updates: Record<string, string | string[] | boolean | null>) => {
//     const params = new URLSearchParams(searchParams.toString())

//     Object.entries(updates).forEach(([key, value]) => {
//       if (
//         value === null ||
//         value === false ||
//         value === '' ||
//         (Array.isArray(value) && value.length === 0)
//       ) {
//         params.delete(key)
//         return
//       }

//       if (Array.isArray(value)) {
//         params.set(key, value.join(','))
//       } else {
//         params.set(key, String(value))
//       }
//     })

//     const query = params.toString()

//     router.push(query ? `/events?${query}` : '/events')
//   }

//   /*
//    * Toggle section
//    */
//   const toggleSection = (section: keyof typeof openSections) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }))
//   }

//   /*
//    * Category change
//    */
//   const handleCategoryChange = (id: string) => {
//     let updated = [...selectedCategories]

//     if (updated.includes(id)) {
//       updated = updated.filter((category) => category !== id)
//     } else {
//       updated.push(id)
//     }

//     updateParams({
//       category: updated,
//     })
//   }

//   /*
//    * Language change
//    */
//   const handleLanguageChange = (value: string) => {
//     let updated = [...selectedLanguages]

//     if (updated.includes(value)) {
//       updated = updated.filter((language) => language !== value)
//     } else {
//       updated.push(value)
//     }

//     updateParams({
//       language: updated,
//     })
//   }

//   /*
//    * Clear categories
//    */
//   const clearCategories = () => {
//     updateParams({
//       category: null,
//     })
//   }

//   /*
//    * Clear languages
//    */
//   const clearLanguages = () => {
//     updateParams({
//       language: null,
//     })
//   }

//   /*
//    * Clear more filters
//    */
//   const clearMoreFilters = () => {
//     setFree(false)
//     setFamily(false)

//     updateParams({
//       free: null,
//       family: null,
//     })
//   }

//   /*
//    * Clear date
//    */
//   const clearDate = () => {
//     updateParams({
//       startDate: null,
//       endDate: null,
//     })
//   }

//   /*
//    * Clear everything
//    */
//   const clearAllFilters = () => {
//     setFree(false)
//     setFamily(false)

//     router.push('/events')
//   }

//   /*
//    * Visible categories
//    */
//   const visibleCategories = showAllCategories ? categories : categories.slice(0, 3)

//   /*
//    * Visible languages
//    */
//   const visibleLanguages = showAllLanguages ? languages : languages.slice(0, 3)

//   return (
//     <aside
//       className="
//         sidebarEvent-scrollbar
//         w-[280px]
//         bg-[#ffffff99]
//         rounded-2xl
//         p-4
//         overflow-y-auto
//         max-h-[85vh]
//         scrollbar-thin
//         scrollbar-thumb-pink-500
//         scrollbar-track-gray-200
//       "
//       style={{
//         scrollbarWidth: 'thin',
//         scrollbarColor: '#af1c6683 #f3f4f6',
//       }}
//     >
//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-xl font-semibold text-gray-800">Filters</h3>

//         <button
//           onClick={clearAllFilters}
//           className="text-sm font-medium text-pink-600 hover:text-pink-700"
//         >
//           Clear All
//         </button>
//       </div>

//       {/* ================= CATEGORIES ================= */}

//       <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
//         <div className="flex justify-between items-center mb-3">
//           <button
//             onClick={() => toggleSection('categories')}
//             className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
//           >
//             <span className="font-bold categoryname">Categories</span>

//             {openSections.categories ? (
//               <ChevronUp className="w-4 h-4 text-gray-500" />
//             ) : (
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             )}
//           </button>

//           <button
//             onClick={clearCategories}
//             className="text-sm text-pink-600 hover:text-pink-700 font-medium"
//           >
//             Clear
//           </button>
//         </div>

//         {openSections.categories && (
//           <>
//             {visibleCategories.map((cat) => {
//               const id = String(cat.id)

//               return (
//                 <label
//                   key={cat.id}
//                   className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     className="accent-pink-600 cursor-pointer"
//                     checked={selectedCategories.includes(id)}
//                     onChange={() => handleCategoryChange(id)}
//                   />

//                   {cat.title}
//                 </label>
//               )
//             })}

//             {categories.length > 3 && (
//               <button
//                 onClick={() => setShowAllCategories(!showAllCategories)}
//                 className="text-sm text-pink-600 font-medium mt-1"
//               >
//                 {showAllCategories ? 'Show Less' : 'Show More'}
//               </button>
//             )}
//           </>
//         )}
//       </div>

//       {/* ================= LANGUAGES ================= */}

//       <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
//         <div className="flex justify-between items-center mb-3">
//           <button
//             onClick={() => toggleSection('languages')}
//             className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
//           >
//             <span className="font-bold categoryname">Languages</span>

//             {openSections.languages ? (
//               <ChevronUp className="w-4 h-4 text-gray-500" />
//             ) : (
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             )}
//           </button>

//           <button
//             onClick={clearLanguages}
//             className="text-sm text-pink-600 hover:text-pink-700 font-medium"
//           >
//             Clear
//           </button>
//         </div>

//         {openSections.languages && (
//           <>
//             {visibleLanguages.map((lang) => (
//               <label
//                 key={lang.value}
//                 className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   className="accent-pink-600 cursor-pointer"
//                   checked={selectedLanguages.includes(lang.value)}
//                   onChange={() => handleLanguageChange(lang.value)}
//                 />

//                 {lang.label}
//               </label>
//             ))}

//             {languages.length > 3 && (
//               <button
//                 onClick={() => setShowAllLanguages(!showAllLanguages)}
//                 className="text-sm text-pink-600 font-medium mt-1"
//               >
//                 {showAllLanguages ? 'Show Less' : 'Show More'}
//               </button>
//             )}
//           </>
//         )}
//       </div>

//       {/* ================= MORE FILTERS ================= */}

//       <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
//         <div className="flex justify-between items-center mb-3">
//           <button
//             onClick={() => toggleSection('moreFilters')}
//             className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
//           >
//             <span className="font-bold categoryname">More Filters</span>

//             {openSections.moreFilters ? (
//               <ChevronUp className="w-4 h-4 text-gray-500" />
//             ) : (
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             )}
//           </button>

//           <button
//             onClick={clearMoreFilters}
//             className="text-sm text-pink-600 hover:text-pink-700 font-medium"
//           >
//             Clear
//           </button>
//         </div>

//         {openSections.moreFilters && (
//           <>
//             {/* Free Entry */}
//             <label className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="accent-pink-600 cursor-pointer"
//                 checked={free}
//                 onChange={(e) => {
//                   const checked = e.target.checked

//                   setFree(checked)

//                   updateParams({
//                     free: checked,
//                   })
//                 }}
//               />
//               Free Entry
//             </label>

//             {/* Family Friendly */}
//             <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="accent-pink-600 cursor-pointer"
//                 checked={family}
//                 onChange={(e) => {
//                   const checked = e.target.checked

//                   setFamily(checked)

//                   updateParams({
//                     family: checked,
//                   })
//                 }}
//               />
//               Family Friendly
//             </label>
//           </>
//         )}
//       </div>

//       {/* ================= DATE ================= */}

//       <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
//         <div className="flex justify-between items-center mb-3">
//           <button
//             onClick={() => toggleSection('date')}
//             className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
//           >
//             <span className="font-bold categoryname">Date Range</span>

//             {openSections.date ? (
//               <ChevronUp className="w-4 h-4 text-gray-500" />
//             ) : (
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             )}
//           </button>

//           <button
//             onClick={clearDate}
//             className="text-sm text-pink-600 hover:text-pink-700 font-medium"
//           >
//             Clear
//           </button>
//         </div>

//         {openSections.date && (
//           <>
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) =>
//                 updateParams({
//                   startDate: e.target.value,
//                 })
//               }
//               className="border p-2 w-full mb-2 rounded-[5px] bordertranspertant"
//             />

//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) =>
//                 updateParams({
//                   endDate: e.target.value,
//                 })
//               }
//               className="border p-2 w-full rounded-[5px] bordertranspertant "
//             />
//           </>
//         )}
//       </div>

//       {/* ================= RESET ================= */}

//       {/* <button
//         className="
//           w-full
//           px-4
//           py-2
//           rounded-full
//           text-sm
//           font-medium
//           border
//           transition-all
//           duration-200
//           cursor-pointer
//           text-white
//           shadow-md
//         "
//         style={{
//           background: 'rgb(164, 66, 148)',
//           borderColor: 'rgb(164, 66, 148)',
//         }}
//         onClick={clearAllFilters}
//       >
//         Reset Filters
//       </button> */}
//     </aside>
//   )
// }

'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Category = {
  id: string | number
  title: string
}

type Language = {
  label: string
  value: string
}

type Props = {
  categories: Category[]
  languages: Language[]
}

export const EventFiltersSidebar = ({ categories = [], languages = [] }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [openSections, setOpenSections] = useState({
    categories: true,
    languages: true,
    moreFilters: true,
    date: true,
  })

  const initialFree = searchParams.get('free') === 'true'
  const initialFamily = searchParams.get('family') === 'true'

  const [free, setFree] = useState(initialFree)
  const [family, setFamily] = useState(initialFamily)

  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllLanguages, setShowAllLanguages] = useState(false)

  const selectedCategories = searchParams.get('category')?.split(',').filter(Boolean) || []
  const selectedLanguages = searchParams.get('language')?.split(',').filter(Boolean) || []

  const startDate = searchParams.get('startDate') || ''
  const endDate = searchParams.get('endDate') || ''

  const updateParams = (updates: Record<string, string | string[] | boolean | null>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (
        value === null ||
        value === false ||
        value === '' ||
        (Array.isArray(value) && value.length === 0)
      ) {
        params.delete(key)
        return
      }

      if (Array.isArray(value)) {
        params.set(key, value.join(','))
      } else {
        params.set(key, String(value))
      }
    })

    const query = params.toString()
    router.push(query ? `/events?${query}` : '/events')
  }

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCategoryChange = (id: string) => {
    let updated = [...selectedCategories]
    if (updated.includes(id)) {
      updated = updated.filter((category) => category !== id)
    } else {
      updated.push(id)
    }
    updateParams({ category: updated })
  }

  const handleLanguageChange = (value: string) => {
    let updated = [...selectedLanguages]
    if (updated.includes(value)) {
      updated = updated.filter((language) => language !== value)
    } else {
      updated.push(value)
    }
    updateParams({ language: updated })
  }

  const clearCategories = () => updateParams({ category: null })
  const clearLanguages = () => updateParams({ language: null })
  const clearMoreFilters = () => {
    setFree(false)
    setFamily(false)
    updateParams({ free: null, family: null })
  }
  const clearDate = () => updateParams({ startDate: null, endDate: null })
  const clearAllFilters = () => {
    setFree(false)
    setFamily(false)
    router.push('/events')
  }

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 3)
  const visibleLanguages = showAllLanguages ? languages : languages.slice(0, 3)

  return (
    <aside
      className="sidebarEvent-scrollbar w-full lg:w-[280px] bg-[#ffffff99] lg:bg-white rounded-2xl p-4 overflow-y-auto max-h-full lg:max-h-[85vh]"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#af1c6683 #f3f4f6',
      }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm font-medium text-pink-600 hover:text-pink-700 cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* CATEGORIES */}
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
          >
            <span className="font-bold categoryname">Categories</span>
            {openSections.categories ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>
          <button
            onClick={clearCategories}
            className="text-sm text-pink-600 hover:text-pink-700 font-medium cursor-pointer"
          >
            Clear
          </button>
        </div>

        {openSections.categories && (
          <>
            {visibleCategories.map((cat) => {
              const id = String(cat.id)
              return (
                <label
                  key={cat.id}
                  className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    className="accent-pink-600 cursor-pointer"
                    checked={selectedCategories.includes(id)}
                    onChange={() => handleCategoryChange(id)}
                  />
                  {cat.title}
                </label>
              )
            })}
            {categories.length > 3 && (
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-sm text-pink-600 font-medium mt-1 cursor-pointer"
              >
                {showAllCategories ? 'Show Less' : 'Show More'}
              </button>
            )}
          </>
        )}
      </div>

      {/* LANGUAGES */}
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => toggleSection('languages')}
            className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
          >
            <span className="font-bold categoryname">Languages</span>
            {openSections.languages ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>
          <button
            onClick={clearLanguages}
            className="text-sm text-pink-600 hover:text-pink-700 font-medium cursor-pointer"
          >
            Clear
          </button>
        </div>

        {openSections.languages && (
          <>
            {visibleLanguages.map((lang) => (
              <label
                key={lang.value}
                className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  className="accent-pink-600 cursor-pointer"
                  checked={selectedLanguages.includes(lang.value)}
                  onChange={() => handleLanguageChange(lang.value)}
                />
                {lang.label}
              </label>
            ))}
            {languages.length > 3 && (
              <button
                onClick={() => setShowAllLanguages(!showAllLanguages)}
                className="text-sm text-pink-600 font-medium mt-1 cursor-pointer"
              >
                {showAllLanguages ? 'Show Less' : 'Show More'}
              </button>
            )}
          </>
        )}
      </div>

      {/* MORE FILTERS */}
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => toggleSection('moreFilters')}
            className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
          >
            <span className="font-bold categoryname">More Filters</span>
            {openSections.moreFilters ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>
          <button
            onClick={clearMoreFilters}
            className="text-sm text-pink-600 hover:text-pink-700 font-medium cursor-pointer"
          >
            Clear
          </button>
        </div>

        {openSections.moreFilters && (
          <>
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="accent-pink-600 cursor-pointer"
                checked={free}
                onChange={(e) => {
                  const checked = e.target.checked
                  setFree(checked)
                  updateParams({ free: checked })
                }}
              />
              Free Entry
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
              <input
                type="checkbox"
                className="accent-pink-600 cursor-pointer"
                checked={family}
                onChange={(e) => {
                  const checked = e.target.checked
                  setFamily(checked)
                  updateParams({ family: checked })
                }}
              />
              Family Friendly
            </label>
          </>
        )}
      </div>

      {/* DATE RANGE */}
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => toggleSection('date')}
            className="flex items-center gap-2 font-medium text-gray-700 cursor-pointer"
          >
            <span className="font-bold categoryname">Date Range</span>
            {openSections.date ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>
          <button
            onClick={clearDate}
            className="text-sm text-pink-600 hover:text-pink-700 font-medium cursor-pointer"
          >
            Clear
          </button>
        </div>

        {openSections.date && (
          <div className="flex flex-col gap-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => updateParams({ startDate: e.target.value })}
              className="border p-2 w-full rounded-[5px] bg-white border-gray-200 text-sm"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => updateParams({ endDate: e.target.value })}
              className="border p-2 w-full rounded-[5px] bg-white border-gray-200 text-sm"
            />
          </div>
        )}
      </div>
    </aside>
  )
}
