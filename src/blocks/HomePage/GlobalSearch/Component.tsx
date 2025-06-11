

'use client'
import './style.css'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Loader from 'src/components/Loader/loader'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
import Link from 'next/link'

type Props = {
  placeholderText: string
  buttonText: string
  enableFilters?: boolean
  filters?: {
    label: string
    options: {
      value: string
      label: string
    }[]
  }[]
}

type SuggestionItem = {
  title: string
  description?: string
  slug: string
  collection: string
}

declare global {
  interface Window {
    webkitSpeechRecognition: any
    SpeechRecognition: any
  }

  interface SpeechRecognition extends EventTarget {
    start(): void
    stop(): void
    abort(): void
    lang: string
    continuous: boolean
    interimResults: boolean
    onaudioend: (event: Event) => void
    onend: (event: Event) => void
    onerror: (event: any) => void
    onnomatch: (event: Event) => void
    onresult: (event: SpeechRecognitionEvent) => void
    onsoundstart: (event: Event) => void
    onspeechend: (event: Event) => void
    onstart: (event: Event) => void
  }

  interface SpeechRecognitionResult {
    readonly isFinal: boolean
    readonly length: number
    item(index: number): SpeechRecognitionAlternative
    [index: number]: SpeechRecognitionAlternative
  }

  interface SpeechRecognitionResultList {
    readonly length: number
    item(index: number): SpeechRecognitionResult
    [index: number]: SpeechRecognitionResult
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string
    readonly confidence: number
  }

  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number
    readonly results: SpeechRecognitionResultList
  }
}

export default function GlobalSearch({
  placeholderText,
  buttonText,
  enableFilters = false,
  filters = [],
}: Props) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const [popupMessage, setPopupMessage] = useState<string | null>(null)

  // SUGGESTION STATE ###
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([])
  const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestionItem[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    const SpeechRecognition =
      typeof window !== 'undefined' &&
      (window.SpeechRecognition || (window as any).webkitSpeechRecognition)
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition()
      const supportedLangs = ['en-US', 'hi-IN', 'ta-IN', 'te-IN', 'ml-IN', 'kn-IN']
      const browserLang = navigator.language
      const selectedLang = supportedLangs.includes(browserLang) ? browserLang : 'en-US'
      recognition.lang = selectedLang
      recognition.interimResults = false
      recognition.continuous = false

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results?.[0]?.[0]?.transcript
        if (transcript) {
          setSearchTerm(transcript)
          inputRef.current?.focus()
          setTimeout(() => {
            formRef.current?.requestSubmit()
          }, 500)
        }
        setIsListening(false)
      }
      recognition.onerror = (e: any) => {
        console.error('Speech recognition error:', e)
        setIsListening(false)
      }
      recognition.onend = () => setIsListening(false)
      recognitionRef.current = recognition
    }

    fetch('/api/getAllSuggestions')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch suggestions')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data.suggestions)) {
          setSuggestions(data.suggestions)
        } else {
          console.warn('Invalid data format:', data)
        }
      })
      .catch((err) => {
        console.error('Error fetching suggestions:', err)
      })
  }, [])


  function playSound(action: 'start' | 'stop') {
    try {
      const soundUrl = action === 'start' ? '/sounds/start.mp3' : '/sounds/stop.mp3'
      const audio = new Audio(soundUrl)
      audio.play().catch((err) => console.error(`Error playing ${action} sound:`, err))
    } catch (error) {
      console.error('Audio play error:', error)
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value
    setSearchTerm(input)
    if (input.length > 0) {
      const matches = suggestions.filter(
        (s) =>
          s.title.toLowerCase().includes(input.toLowerCase()) ||
          (s.description && s.description.toLowerCase().includes(input.toLowerCase())),
      )
      setFilteredSuggestions(matches)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>, label: string) {
    setSelectedFilters((prev) => ({
      ...prev,
      [label]: e.target.value,
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const params = new URLSearchParams()

    if (searchTerm.trim()) {
      params.append('q', searchTerm.trim())
    }

    if (enableFilters) {
      Object.entries(selectedFilters).forEach(([key, value]) => {
        if (value) params.append(key, value)
      })
    }

    router.push(`/search?${params.toString()}`)
  }

  function toggleListening() {
    if (!recognitionRef.current) return

    if (isListening) {
      recognitionRef.current.stop()
      setPopupMessage('Voice recognition stopped')
      playSound('stop')
    } else {
      recognitionRef.current.start()
      inputRef.current?.focus()
      setPopupMessage("I'm listening... Tell me what you need")
      playSound('start')
    }
    setIsListening(!isListening)
    setTimeout(() => setPopupMessage(null), 2500)
  }

  function handleSuggestionClick(suggestion: string) {
    setSearchTerm(suggestion)
    setShowSuggestions(false)
    setTimeout(() => {
      formRef.current?.requestSubmit()
    }, 300)
  }

  return (
    <div className="formsSection">
      <div className="searchInputFormbanner mobileSearchContainer">
        <form className="searchInputForm" onSubmit={handleSubmit} ref={formRef}>
          <input
            ref={inputRef}
            placeholder={placeholderText}
            value={searchTerm}
            onChange={handleInputChange}
          />

          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="suggestionsList">
              {filteredSuggestions.map((sugg) => {
                const url = sugg.slug === 'home' ? '/' : `/${sugg.collection}/${sugg.slug}`

                return (
                  <li key={`${sugg.collection}-${sugg.slug}`}>
                    <Link href={url}>
                      <div className="block" onClick={() => handleSuggestionClick(sugg.title)}>
                        {sugg.description && (
                          <div className="suggestion-description">
                            {sugg.description}
                            <hr className="border-t border-gray-300 mt-2 mb-2" />
                          </div>
                        )}
                        <strong className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                          {sugg.title}
                        </strong>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}

          {enableFilters && filters.length > 0 && (
            <div className="filtersContainer">
              {filters.map((filter, index) => (
                <div key={index} className="filterGroup">
                  <label>{filter.label}</label>
                  <select
                    value={selectedFilters[filter.label] || ''}
                    onChange={(e) => handleFilterChange(e, filter.label)}
                  >
                    <option value="">All</option>
                    {filter.options.map((option, i) => (
                      <option key={i} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          <div className="buttonGroup">
            <button type="submit" disabled={loading}>
              {loading ? <Loader /> : buttonText}
            </button>
          </div>
          <span
            className={`micButton ${isListening ? 'listening' : ''}`}
            onClick={toggleListening}
            title="Voice Search"
          >
            {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
            {popupMessage && <div className="voice-popup">{popupMessage}</div>}
          </span>
        </form>
      </div>
    </div>
  )
}
