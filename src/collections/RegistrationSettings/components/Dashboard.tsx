

'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './Dashboard.css'

type Registration = {
  id: number | string
  eventName?: string
  eventId?: string
  eventSlug?: string
  registrationSettings?: {
    id?: number | string
    name?: string
    [key: string]: any
  }
  values?: Record<string, any>
  attachments?: Array<{
    id: string | number
    fieldName?: string
    file?: {
      url?: string
      filename?: string
      mimeType?: string
    }
  }>
  status?: string
  createdAt?: string
}

const getFormName = (doc: Registration) =>
  doc.registrationSettings?.name?.trim() || 'Other Forms'

const formatLabel = (value: string) =>
  value
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/^./, (char) => char.toUpperCase())

const formatValue = (value: any): string => {
  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }

  if (Array.isArray(value)) {
    return value.map(formatValue).join(', ')
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

const getFileUrl = (url?: string) => {
  if (!url) return ''
  if (/^https?:\/\//i.test(url)) return url

  if (typeof window === 'undefined') return url

  return `${window.location.origin}${url.startsWith('/') ? '' : '/'}${url}`
}

const formatDate = (date?: string) => {
  if (!date) return '—'

  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) return '—'

  return parsedDate.toLocaleString()
}

export default function RegistrationDashboard() {
  const [docs, setDocs] = useState<Registration[]>([])
  const [activeForm, setActiveForm] = useState('All Forms')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchRegistrations = useCallback(async () => {
    try {
      setLoading(true)
      setError('')

      const allDocs: Registration[] = []
      let page = 1
      let totalPages = 1

      do {
        const response = await fetch(
          `/api/registration-submissions?depth=2&limit=100&page=${page}`,
          { cache: 'no-store' },
        )

        if (!response.ok) {
          throw new Error(
            `Failed to load registrations (${response.status})`,
          )
        }

        const data = await response.json()

        allDocs.push(...(data.docs || []))
        totalPages = data.totalPages || 1
        page += 1
      } while (page <= totalPages)

      setDocs(allDocs)
    } catch (err) {
      console.error('Registration dashboard error:', err)

      setError(
        err instanceof Error
          ? err.message
          : 'Failed to load registrations',
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchRegistrations()
  }, [fetchRegistrations])

  const formNames = useMemo(
    () => [
      'All Forms',
      ...Array.from(new Set(docs.map(getFormName))).sort((a, b) =>
        a.localeCompare(b),
      ),
    ],
    [docs],
  )

  const formCounts = useMemo(() => {
    const counts: Record<string, number> = {}

    docs.forEach((doc) => {
      const name = getFormName(doc)
      counts[name] = (counts[name] || 0) + 1
    })

    return counts
  }, [docs])

  const filteredDocs = useMemo(() => {
    const query = search.trim().toLowerCase()

    return docs.filter((doc) => {
      const matchesForm =
        activeForm === 'All Forms' || getFormName(doc) === activeForm

      const searchableText = [
        doc.eventName,
        doc.eventId,
        doc.eventSlug,
        getFormName(doc),
        doc.status,
        ...Object.entries(doc.values || {}).flatMap(([key, value]) => [
          key,
          formatValue(value),
        ]),
      ]
        .join(' ')
        .toLowerCase()

      return matchesForm && searchableText.includes(query)
    })
  }, [docs, activeForm, search])

  const exportCSV = () => {
    if (filteredDocs.length === 0) return

    const rows = filteredDocs.map((doc) => ({
      'Registration ID': doc.id,
      'Form Name': getFormName(doc),
      'Event Name': doc.eventName || '',
      ...Object.fromEntries(
        Object.entries(doc.values || {}).map(([key, value]) => [
          key,
          formatValue(value),
        ]),
      ),
      Attachments: (doc.attachments || [])
        .map((attachment) => attachment.file?.filename || attachment.fieldName)
        .filter(Boolean)
        .join(', '),
      Status: doc.status || 'pending',
      'Submitted At': formatDate(doc.createdAt),
    }))

    const columns = Array.from(
      new Set(rows.flatMap((row) => Object.keys(row))),
    )

    const escapeCSV = (value: any) =>
      `"${String(value ?? '').replace(/"/g, '""')}"`

    const csv = [
      columns.map(escapeCSV).join(','),
      ...rows.map((row) =>
        columns
          .map((key) =>
            escapeCSV(row[key as keyof typeof row]),
          )
          .join(','),
      ),
    ].join('\r\n')

    const blob = new Blob(['\uFEFF', csv], {
      type: 'text/csv;charset=utf-8;',
    })

    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')

    anchor.href = url
    anchor.download = 'registration-submissions.csv'

    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()

    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="rd-loading">
        <span>Loading registrations...</span>
      </div>
    )
  }

  return (
    <main className="registrationDashboard">
      <header className="rd-header">
        <div>
          <h1 className="rd-title">Registration</h1>
          <p className="rd-subtitle">View and manage registrations across all forms.</p>
        </div>

        <div className="rd-headerActions">
          <button type="button" className="rd-button" onClick={() => void fetchRegistrations()}>
            Refresh
          </button>

          <button
            type="button"
            className="rd-button rd-buttonPrimary"
            onClick={exportCSV}
            disabled={filteredDocs.length === 0}
          >
            Export CSV
          </button>
        </div>
      </header>
      {error && (
        <div className="rd-error" role="alert">
          <p>{error}</p>
          <button type="button" className="rd-button" onClick={() => void fetchRegistrations()}>
            Try again
          </button>
        </div>
      )}
      <section className="rd-statsGrid">
        <article className="rd-statCard">
          <span className="rd-statLabel">Total registrations</span>
          <div className="rd-statValue">{docs.length}</div>
          <span className="rd-statDescription">Across {formNames.length - 1} form settings</span>
          <div className="rd-statAccent" />
        </article>

        <article className="rd-statCard">
          <span className="rd-statLabel">Forms</span>
          <div className="rd-statValue">{formNames.length - 1}</div>
          <span className="rd-statDescription">Unique registration forms</span>
          <div className="rd-statAccent" />
        </article>

        <article className="rd-statCard">
          <span className="rd-statLabel">Filtered results</span>
          <div className="rd-statValue">{filteredDocs.length}</div>
          <span className="rd-statDescription">Matching your current search and tab</span>
          <div className="rd-statAccent" />
        </article>
      </section>
      <div className="rd-tabsWrapper">
        <nav className="rd-tabs" aria-label="Registration forms">
          {formNames.map((name) => {
            const isActive = activeForm === name
            const count = name === 'All Forms' ? docs.length : formCounts[name] || 0

            return (
              <button
                key={name}
                type="button"
                className={`rd-tab${isActive ? ' rd-tabActive' : ''}`}
                onClick={() => setActiveForm(name)}
                aria-pressed={isActive}
              >
                <span>{name}</span>
                <span className="rd-tabCount">{count}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="rd-toolbar">
        <div className="rd-searchWrapper">
          <span className="rd-searchIcon" aria-hidden="true">
            ⌕
          </span>

          <input
            className="rd-searchInput"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name, email, phone or any field..."
            aria-label="Search registrations"
          />
        </div>

        <span className="rd-resultsCount">{filteredDocs.length} results</span>
      </div>

      <section className="rd-submissionsList">
        {filteredDocs.map((doc) => {
          const personName = formatValue(doc.values?.name)
          const status = (doc.status || 'pending').toLowerCase()

          return (
            <article className="rd-submissionCard" key={doc.id}>
              <header className="rd-cardHeader">
                <div>
                  <h2 className="rd-personName">
                    {personName !== '—' ? personName : `Registration #${doc.id}`}
                  </h2>

                  <div className="rd-cardMeta">
                    <span className="rd-formName">{getFormName(doc)}</span>
                    <span>·</span>
                    <span>{doc.eventName || 'Event'}</span>
                  </div>
                </div>

                <span className="rd-statusBadge" data-status={status}>
                  {status.replace(/[_-]/g, ' ')}
                </span>
              </header>

              <div className="rd-valuesGrid">
                {Object.entries(doc.values || {}).map(([key, value]) => (
                  <div className="rd-valueItem" key={key}>
                    <div className="rd-valueLabel">{formatLabel(key)}</div>
                    <div className="rd-valueText">{formatValue(value)}</div>
                  </div>
                ))}

                <div className="rd-valueItem">
                  <div className="rd-valueLabel">Submitted</div>
                  <div className="rd-valueText">{formatDate(doc.createdAt)}</div>
                </div>

                <div className="rd-valueItem">
                  <div className="rd-valueLabel">Registration ID</div>
                  <div className="rd-valueText">{doc.id}</div>
                </div>
              </div>

              {doc.attachments && doc.attachments.length > 0 && (
                <section className="rd-attachments">
                  <h3 className="rd-sectionTitle">Attachments</h3>

                  <ul className="rd-attachmentList">
                    {doc.attachments.map((attachment) => {
                      const file = attachment.file
                      const url = getFileUrl(file?.url)

                      return (
                        <li key={attachment.id}>
                          {url ? (
                            <a
                              className="rd-attachmentLink"
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {attachment.fieldName || 'Attachment'}
                              {' — '}
                              {file?.filename || 'View file'}
                            </a>
                          ) : (
                            <span>
                              {attachment.fieldName || 'Attachment'}
                              {' — File URL unavailable'}
                            </span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </section>
              )}
            </article>
          )
        })}

        {filteredDocs.length === 0 && (
          <div className="rd-emptyState">
            <h3 className="rd-emptyTitle">No registrations found</h3>
            <p className="rd-emptyDescription">
              {search
                ? 'Try another search term or clear your search.'
                : 'There are no registrations for this form yet.'}
            </p>

            {(search || activeForm !== 'All Forms') && (
              <button
                type="button"
                className="rd-button"
                onClick={() => {
                  setSearch('')
                  setActiveForm('All Forms')
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  )
}
