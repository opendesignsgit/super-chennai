/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'

interface NeighbourhoodBannerProps {
  value: string
  setValue: (val: string) => void
  onSearch: (q: string) => void
  displayTags: string[]
}

export default function NeighbourhoodBanner({
  value,
  setValue,
  onSearch,
  displayTags,
}: NeighbourhoodBannerProps) {
  return (
    <section
      className="relative min-h-[550px] sm:min-h-[550px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1155 40%, #3b1a6b 60%, #1a1a4e 100%)',
      }}
    >
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <img
          src="/images/neighbourhood-main-image.jpeg"
          alt="Chennai Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="text-xs text-white/60 mb-4 neighbourtwoparagraph neighbourhoodbrudcrum">
          <div className="flex gap-2">
            <Link href="/">
              <span className="cursor-pointer">Home</span>
            </Link>
            <span>-</span>
            <span className="cursor-pointer">Neighbourhood</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          <div className="text-white lg:w-[40%]">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-3">
              Explore Chennai
              <br />
              <span className="text-[#a44294]">Neighbourhoods</span>
            </h1>
            <p className="text-white/70 text-sm leading-relaxed neighbourtwoheaidngssparagraph">
              Discover the best localities in Chennai. Find schools, hospitals, transport,
              lifestyle, food, real estate trends and everything you need to know about your
              neighbourhood.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-5 w-full lg:w-[60%] bannerseeachresulttt">
            <div className="flex border-b border-gray-200 mb-4">
              <button className="px-5 py-2 text-sm font-bold transition-colors neighbourtwoheaidngssparagraph text-[#a44294] border-b-2 border-[#a44294] -mb-px">
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
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onSearch(value)
                    }
                  }}
                />

                {value && (
                  <button
                    onClick={() => {
                      setValue('')
                      onSearch('')
                    }}
                    type="button"
                    className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-0.5 text-base font-bold rounded-full hover:bg-gray-100 flex items-center justify-center w-5 h-5 line-none"
                    title="Clear input"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={() => onSearch(value)}
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
                  onClick={() => {
                    setValue(tag)
                    onSearch(tag)
                  }}
                  className="cursor-pointer text-[#000] font-bold border border-[#00000040] hover:bg-purple-100 hover:text-[#a44294] px-3 py-1 rounded-full transition-colors neighbourtwoparagraph"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
