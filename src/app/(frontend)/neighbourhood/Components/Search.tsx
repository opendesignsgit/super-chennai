import React, { useState, KeyboardEvent, FormEvent } from 'react'

interface SearchProps {
  onSearch?: (term: string) => void
  onPress?: (event: KeyboardEvent<HTMLInputElement>, term: string) => void
  placeholder?: string
}

export default function Search({
  onSearch,
  onPress,
  placeholder = 'Search location, neighborhood, or keywords...',
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchTerm.trim())
    }
  }

  const handleClear = () => {
    setSearchTerm('')
    if (onSearch) {
      onSearch('')
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onPress) {
      onPress(e, searchTerm)
    }
  }

  return (
    <form onSubmit={handleSearchSubmit} className="w-full relative">
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2.5 shadow-sm focus-within:border-[#a44294] focus-within:ring-1 focus-within:ring-[#a44294] transition-all">
        <span className="text-gray-400 mr-3 shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-700 text-sm md:text-base placeholder-gray-400"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600 mr-2 text-sm font-bold p-1 rounded-full hover:bg-gray-100 transition"
          >
            ✕
          </button>
        )}

        <button
          type="submit"
          className="bg-[#a44294] hover:bg-[#b84ca6] text-white text-sm font-medium px-5 py-2 rounded-full transition duration-300 shrink-0 cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  )
}
