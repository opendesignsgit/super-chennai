import React from 'react'

export const PropertiesBanner: React.FC = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#A44294] via-[#8D347D] to-[#752666] px-8 py-8 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
        <div className="flex-1 z-10">
          <span className="text-white/90 text-sm font-medium">Looking to Buy / Rent?</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
            Explore properties in Chennai
          </h2>
          <p className="text-white/80 text-sm">
            Find homes near top schools, hospitals, metro & more.
          </p>
        </div>

        <div className="z-10 shrink-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.superchennai.com/properties"
            className="group inline-flex items-center justify-between bg-white text-[#a44294] font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-purple-50 transition-all"
          >
            <span>Explore Properties</span>
            <span className="ml-4 pl-4 border-l border-purple-100 group-hover:translate-x-1 transition-transform">
              ➔
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}