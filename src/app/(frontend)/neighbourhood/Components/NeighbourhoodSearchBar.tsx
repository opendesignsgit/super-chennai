/* eslint-disable @next/next/no-img-element */
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Fuse from 'fuse.js'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import Search from './Search'

interface LocationItem {
  id: string | number
  locality?: string
  title?: string
  name?: string
  label?: string
}

interface SubCategory {
  id: string | number
  title: string
  slug: string
}

interface Category {
  title: string
}

interface DataItem {
  id: string | number
  name?: string
  title?: string
  slug?: string
  description?: string
  category?: Category
  subCategories?: SubCategory[]
  locations?: LocationItem
  content?: any
  FeaturedImage?: {
    url?: string
  }
}

interface NeighbourhoodSearchBarProps {
  data?: DataItem[]
  locations?: LocationItem[]
  locationId?: string
  onSearch?: (query: string) => void
  showExplore?: boolean
}

export function NeighbourhoodSearchBar({
  data = [],
  locations = [],
  locationId = '',
  onSearch,
  showExplore = true,
}: NeighbourhoodSearchBarProps) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const [openLocationsModal, setOpenLocationsModal] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<DataItem[]>([])
  const [openSearchModal, setOpenSearchModal] = useState(false)

  // ####################################################################################################################
  // ################## ADVANCE SEARCH ALGORITHMS DONT CHANGE ANYTHING DONT REWRITE WITH AI TOOL #########################
  // ####################################################################################################################

  function extractTextFromLexical(content: any): string {
    if (!content?.root?.children) return ''

    let text = ''

    content.root.children.forEach((node: any) => {
      if (node.children) {
        node.children.forEach((child: any) => {
          if (child.text) {
            text += ' ' + child.text
          }
        })
      }
    })

    return text.toLowerCase()
  }

  const fuse = useMemo(() => {
    const filtered = data.filter((item) =>
      item?.locations?.locality
        ?.toLowerCase()
        .includes(decodeURIComponent(locationId || '').toLowerCase()),
    )

    const preparedData = filtered.map((item) => ({
      ...item,
      searchableText: `
      ${item.name || ''}
      ${item.title || ''}
      ${item.category?.title || ''}
      ${extractTextFromLexical(item.content)}
    `,
    }))

    return new Fuse(preparedData, {
      keys: ['searchableText'],
      threshold: 0.4,
      ignoreLocation: true,
    })
  }, [data, locationId])

  const handleSearch = () => {
    const query = search.toLowerCase().trim()
    if (!query) return
    const fuseResults = fuse.search(query)
    const finalResults = fuseResults.map((r) => r.item)
    setSearchResults(finalResults)
    setOpenSearchModal(true)
    if (onSearch) onSearch(query)
  }

  const location = data?.[0]?.locations
  const firstLetter = decodeURIComponent(locationId || '')
    ?.charAt(0)
    ?.toUpperCase()
  const sameLetterLocations = locations?.filter((loc) =>
    loc.locality?.toUpperCase().startsWith(firstLetter),
  )

  const grouped = useMemo(() => {
    return (
      data?.reduce<Record<string, DataItem[]>>((acc, item) => {
        const cat = item?.category?.title || 'Others'
        if (!acc[cat]) acc[cat] = []
        acc[cat].push(item)
        return acc
      }, {}) || {}
    )
  }, [data])

  const subCategoriesByCategory = useMemo(() => {
    const result: Record<string, Record<string | number, SubCategory>> = {}

    data?.forEach((item) => {
      const cat = item?.category?.title || 'Others'

      const categoryMap = result[cat] ?? (result[cat] = {})

      item?.subCategories?.forEach((sub) => {
        if (sub?.id && !categoryMap[sub.id]) {
          categoryMap[sub.id] = sub
        }
      })
    })

    return result
  }, [data])

  const categories = Object.keys(grouped)
  const activeCat = activeCategory || categories?.[0] || 'Others'

  const getSubCategorySlug = (item: DataItem) => {
    if (item?.subCategories && item.subCategories.length > 0) {
      return item.subCategories[0]?.slug || 'all'
    }
    return 'all'
  }

  const currentSubCategories = useMemo(() => {
    const catMap = subCategoriesByCategory?.[activeCat] || {}
    return Object.values(catMap).sort((a, b) => a.title.localeCompare(b.title))
  }, [subCategoriesByCategory, activeCat])

  return (
    <>
      <div className="flex items-center gap-3 max-w-xl w-full">
        <div className="flex-1 bg-white rounded-full flex items-center px-6 py-2.5 shadow-sm border border-gray-100 neighbourtwoheaidngssparagraph !text-[16px] zindexxmoreee">
          <div className="flex flex-1 items-center gap-1.5 min-w-[160px]">
            <span className="shrink-0">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </span>

            <select
              className="w-full bg-transparent border-none outline-none text-gray-600 font-medium cursor-pointer appearance-none pr-4 text-sm md:text-base capitalize"
              value={locationId}
              onChange={(e) => router.push(`/neighbourhood/${e.target.value}`)}
            >
              {sameLetterLocations?.map((loc) => (
                <option key={loc.id} value={loc.locality}>
                  {loc.locality}
                </option>
              ))}
            </select>

            <span
              className="text-gray-400 pointer-events-none text-xs ml-auto"
              style={{ marginTop: '2px' }}
            >
              ▼
            </span>
          </div>

          <div className="h-6 w-[1px] bg-gray-300 mx-3 shrink-0" />

          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base pr-2 text-[14px] inputseachhhssssss"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch()
            }}
          />
        </div>

        <button
          onClick={handleSearch}
          className="bannerrrsearchccc cursor-pointer bg-[#a44294] hover:bg-[#b84ca6] text-white !font-[500] px-6 py-2.5 rounded-full text-sm transition-all duration-300 whitespace-nowrap shrink-0 shadow-sm"
        >
          Search
        </button>

        {showExplore && (
          <button
            onClick={() => setOpen(true)}
            className="clickheretoexplorebuttons cursor-pointer bg-[#a44294] hover:bg-[#b84ca6] text-white !font-[500] px-6 py-2.5 rounded-full text-sm transition-all duration-300 whitespace-nowrap shrink-0 shadow-sm"
          >
            Click Here to Explore
          </button>
        )}
      </div>

      {openLocationsModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center animate-backdrop-fade">
          <div className="bg-white container max-w-5xl mx-auto px-4 relative popupseacrhinpout animate-modal-pop">
            <button
              onClick={() => setOpenLocationsModal(false)}
              className="absolute top-4 right-4 text-xl popupcloselocation group hover:scale-110 active:scale-95 transition-all duration-300 hover:rotate-90 hover:shadow-lg hover:shadow-[#8b3c82]/50"
            >
              <span className="relative z-10">✕</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b3c82]/30 to-[#a34493]/30 rounded-full opacity-0 group-hover:opacity-100 -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-all duration-600 blur-sm"></div>
            </button>
            <div className="workIntro animate-slide-down">
              <h1 className="animate-title-glow">Neighbourhood</h1>
              <p className="animate-fade-in-up">
                Public transportation in Chennai is managed by various government bodies...
              </p>
            </div>
            <div className="animate-slide-up">
              <Search
                onSearch={(q: string) => {
                  router.push(`/neighbourhood?search=${encodeURIComponent(q)}`)
                  setOpenLocationsModal(false)
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* EXPLORE MODAL */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
            <motion.div
              className="bg-white w-[95%] max-w-6xl overflow-hidden locationpopupmain"
              layout
              transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
            >
              <div className="grid grid-cols-12 popupneigbhbourh">
                <div className="col-span-4 bg-purple-600 text-white p-6 leftsidepopup">
                  <h2 className="text-2xl font-bold mb-6 locationname">{location?.locality}</h2>

                  <div className="space-y-3 leftsidescrolll">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`pointerdiv cursor-pointer transition ${
                          activeCat === cat
                            ? 'buttonactivated bg-white text-purple-600'
                            : 'buttonnonactivated'
                        }`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-8 p-6 relative rightsidepopup sisss">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-xl popupcloselocation"
                  >
                    ✕
                  </button>

                  <div className="popuprightsidecontent">
                    {currentSubCategories.length === 0 ? (
                      <div className="text-gray-500 text-center mt-10">
                        We couldn’t find anything here. Try exploring other categories.
                      </div>
                    ) : (
                      currentSubCategories.map((sub) => (
                        <div
                          key={sub.id}
                          onClick={() => {
                            const safeCategory = activeCat.toLowerCase().replace(/\s+/g, '-')
                            router.push(`/neighbourhood/${locationId}/${safeCategory}/${sub.slug}`)
                            setOpen(false)
                          }}
                          className="border butoonsearchbutton cursor-pointer hover:bg-gray-100 transition"
                        >
                          <div className="iconsimagelocation flex items-center gap-2">
                            <img src="https://dev.opendesignsin.com/svg-icon.svg" alt="" />
                            {sub.title}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SEARCH RESULTS MODAL */}
      {openSearchModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center searchpopupdivmain">
          <div className="bg-white w-[95%] max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 headingtop">
              <h2
                className="text-lg font-semibold"
                style={{ fontFamily: 'Poppins', fontWeight: 500 }}
              >
                Search Results ({searchResults.length})
              </h2>

              <button
                onClick={() => setOpenSearchModal(false)}
                className="cursor-pointer text-xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            <div className="p-5 max-h-[500px] overflow-y-auto space-y-4 bodycardsection">
              {searchResults.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg">😕 No results found</p>
                  <p className="text-sm text-gray-500 mt-2">Try different keywords or spelling</p>
                </div>
              ) : (
                searchResults.map((item) => {
                  const imageUrl = item?.FeaturedImage?.url
                    ? item.FeaturedImage.url.startsWith('/')
                      ? `${item.FeaturedImage.url}`
                      : `/${item.FeaturedImage.url}`
                    : '/images/locationdefult.png'

                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        const subSlug = getSubCategorySlug(item)
                        const safeCat = (item.category?.title || 'others')
                          .toLowerCase()
                          .replace(/\s+/g, '-')

                        router.push(
                          `/neighbourhood/${locationId}/${safeCat}/${subSlug}/${item.slug}`,
                        )
                        setOpenSearchModal(false)
                      }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 cardlocation"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 imagesecriorrss">
                        <img
                          src={imageUrl}
                          alt={item.name || 'Location image'}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>

                      <div className="flex-1 w-[100%]">
                        <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
                          {item.name}
                        </h3>

                        <h3 className="text-xs !text-[#000] leading-relaxed mb-3 neighbourtwoparagraph mt-2">
                          {item?.description && `${item.description.slice(0, 50)} ....`}
                        </h3>

                        <div className="flex gap-2 mt-2">
                          {item?.locations?.locality && (
                            <div className="flex gap-0.5 items-center itemslocatioss">
                              <img
                                className="locationimagess w-5 h-5"
                                src="/images/location-map-1.svg"
                                alt=""
                              />

                              <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition !mb-0">
                                {item.locations.locality}
                              </h3>
                            </div>
                          )}

                          <div className="text-gray-400 group-hover:text-purple-600 transition">
                            <img
                              className="imagepopupnws"
                              src="/images/location-arrow.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

interface SearchChennaiProps {
  onSearch?: (query: string) => void
  dataaa?: DataItem[]
}

export function SearchChennai({ onSearch, dataaa }: SearchChennaiProps) {
  const [value, setValue] = useState('')
  const [, setIsTop] = useState(false)
  const [activeTab, setActiveTab] = useState('search')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const getHeaderHeight = () => {
      const width = window.innerWidth
      if (width >= 1024) return 100
      if (width >= 768) return 280
      return 100
    }

    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const triggerPoint = getHeaderHeight()
      if (rect.top <= triggerPoint) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleReset = () => {
    setValue('')
    if (onSearch) {
      onSearch('')
    }
  }

  const handleTagClick = (tagName: string) => {
    setValue(tagName)
    if (onSearch) {
      onSearch(tagName)
    }
  }

  const getDynamicTags = () => {
    const fallbackTags = ['T Nagar', 'Anna Nagar', 'OMR', 'Velachery', 'Adyar']
    if (!dataaa || !Array.isArray(dataaa)) return fallbackTags
    const uniqueTags = new Set<string>()
    dataaa.forEach((item) => {
      const locationObj = item?.locations
      if (locationObj) {
        const locationName =
          typeof locationObj === 'object'
            ? locationObj.title || locationObj.name || locationObj.label
            : null

        if (locationName) {
          uniqueTags.add(locationName)
        }
      }
    })
    return uniqueTags.size > 0 ? Array.from(uniqueTags).slice(0, 6) : fallbackTags
  }

  const displayTags = getDynamicTags()

  return (
    <div
      ref={sectionRef}
      className="bg-white rounded-2xl shadow-2xl p-5 w-full lg:w-[60%] bannerseeachresulttt"
    >
      <div className="flex border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab('search')}
          className={`px-5 py-2 text-sm font-bold transition-colors neighbourtwoheaidngssparagraph ${
            activeTab === 'search'
              ? 'text-[#a44294] border-b-2 border-[#a44294] -mb-px'
              : 'text-gray-500'
          }`}
        >
          Search
        </button>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-3 gap-2 relative">
          <span className="text-gray-400 text-base neighebbbbbbbsss">
            <img src="/images/icons/location-output-neighbourhood.svg" alt="" />
          </span>
          <input
            type="text"
            placeholder="Search by Area, Locality, Landmark or Pincode"
            className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent pr-6 neighbourtwoparagraph"
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />

          {value && (
            <button
              onClick={handleReset}
              type="button"
              className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-0.5 text-base font-bold rounded-full hover:bg-gray-100 flex items-center justify-center w-5 h-5"
              title="Clear input"
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="bg-[#a44294] hover:bg-[#974189] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap neighbourtwoparagraph cursor-pointer"
        >
          Search
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#000] !font-semibold neighbourtwoparagraph">
          Popular Searches:
        </span>
        {displayTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="cursor-pointer text-[#000] font-bold border border-[#00000040] hover:bg-purple-100 hover:text-[#a44294] px-3 py-1 rounded-full transition-colors neighbourtwoparagraph"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NeighbourhoodSearchBar
