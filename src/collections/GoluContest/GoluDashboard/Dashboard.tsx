'use client'

import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import './Dashboard.css' // 👈 Custom CSS கோப்பை இணைத்துள்ளோம்

interface Participant {
  id: number | string
  fullName: string
  mobileNumber: string
  email: string
  localityArea: string
  instagramHandle?: string
  registrationDate: string
}

interface MediaItem {
  id: string | number
  image?: {
    url?: string
    filename?: string
  }
}

interface SubmissionDoc {
  id: number | string
  participant: Participant
  goluPhotographs: MediaItem[]
  superChennaiCornerPhotographs: MediaItem[]
  status: 'pendingReview' | 'approved' | 'shortlisted' | 'rejected'
  createdAt: string
  aboutYourGolu?: {
    root?: {
      children?: Array<{
        children?: Array<{ text?: string }>
      }>
    }
  }
}

const getFullMediaUrl = (fileUrl?: string) => {
  if (!fileUrl) return ''
  if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) return fileUrl
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return `${baseUrl.replace(/\/$/, '')}${fileUrl.startsWith('/') ? '' : '/'}${fileUrl}`
}

export default function GoluDashboard() {
  const [submissions, setSubmissions] = useState<SubmissionDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/golu-submissions?depth=2&limit=100')
      const data = await res.json()
      if (data && data.docs) {
        setSubmissions(data.docs)
      }
    } catch (err) {
      console.error('Failed to fetch submissions', err)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: number | string, newStatus: string) => {
    try {
      const res = await fetch(`/api/golu-submissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus as any } : sub)),
        )
      }
    } catch (err) {
      console.error('Failed to update status', err)
    }
  }

  const exportToExcel = () => {
    const dataToExport = submissions.map((sub) => ({
      'Participant Name': sub.participant?.fullName || 'N/A',
      'Mobile Number': sub.participant?.mobileNumber || 'N/A',
      Email: sub.participant?.email || 'N/A',
      'Locality Area': sub.participant?.localityArea || 'N/A',
      Instagram: sub.participant?.instagramHandle || 'N/A',
      Status: sub.status,
      'Submission Date': new Date(sub.createdAt).toLocaleDateString(),
    }))

    const worksheet = XLSX.utils.json_to_sheet(dataToExport)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Golu Submissions')
    XLSX.writeFile(workbook, 'Super_Chennai_Golu_Submissions.xlsx')
  }

  const filteredSubmissions = submissions.filter((sub) => {
    const matchesStatus = filterStatus === 'all' || sub.status === filterStatus
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      sub.participant?.fullName?.toLowerCase().includes(query) ||
      sub.participant?.mobileNumber?.includes(query) ||
      sub.participant?.localityArea?.toLowerCase().includes(query)
    return matchesStatus && matchesSearch
  })

  const extractAboutText = (aboutObj: any) => {
    try {
      return aboutObj?.root?.children?.[0]?.children?.[0]?.text || 'No description provided.'
    } catch {
      return 'No description provided.'
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontSize: '16px' }}>
        Loading Golu Contest Dashboard...
      </div>
    )
  }

  return (
    <div className="goluDashboardContainer">
      {/* HEADER */}
      <div className="dashboardHeader">
        <div>
          <h1 className="dashboardTitle">🪔 Super Chennai Golu Dashboard</h1>
          <p className="dashboardSubtitle">
            Manage all participant entries, photographs, and review statuses.
          </p>
        </div>
        <button onClick={exportToExcel} className="exportBtn">
          📊 Export to Excel
        </button>
      </div>

      {/* TOOLBAR */}
      <div className="toolbarCard">
        <input
          type="text"
          placeholder="Search by name, mobile, or locality..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        />

        <div className="filterButtonsGroup">
          {['all', 'pendingReview', 'approved', 'shortlisted', 'rejected'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`filterBtn ${filterStatus === st ? 'filterBtnActive' : ''}`}
            >
              {st === 'all' ? 'All Entries' : st}
            </button>
          ))}
        </div>
      </div>

      {/* SUBMISSIONS LIST */}
      <div>
        {filteredSubmissions.length === 0 ? (
          <div className="emptyState">No submissions found matching your filters.</div>
        ) : (
          filteredSubmissions.map((sub) => {
            const badgeClass =
              sub.status === 'approved'
                ? 'statusApproved'
                : sub.status === 'shortlisted'
                  ? 'statusShortlisted'
                  : sub.status === 'rejected'
                    ? 'statusRejected'
                    : 'statusPending'

            return (
              <div key={sub.id} className="submissionCard">
                <div className="cardHeader">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <h2 className="participantName">{sub.participant?.fullName || 'Unknown'}</h2>
                      <span className={`statusBadge ${badgeClass}`}>{sub.status}</span>
                    </div>
                    <p className="participantMeta">
                      📱 +91 {sub.participant?.mobileNumber} | ✉️ {sub.participant?.email} | 📍{' '}
                      <span className="participantLocality">{sub.participant?.localityArea}</span> |
                      IG: {sub.participant?.instagramHandle || 'N/A'}
                    </p>
                  </div>

                  <div className="statusActionContainer">
                    <span className="statusLabelText">Change Status:</span>
                    <select
                      value={sub.status}
                      onChange={(e) => updateStatus(sub.id, e.target.value)}
                      className="statusSelect"
                    >
                      <option value="pendingReview">Pending Review</option>
                      <option value="approved">Approved</option>
                      <option value="shortlisted">Shortlisted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>

                <div className="descriptionBox">
                  <strong className="descriptionTitle">About Golu:</strong>
                  {extractAboutText(sub.aboutYourGolu)}
                </div>

                <div className="photosGrid">
                  <div>
                    <h3 className="photoSectionTitle">
                      Golu Photographs ({sub.goluPhotographs?.length || 0})
                    </h3>
                    <div className="thumbnailContainer">
                      {sub.goluPhotographs?.map((item, idx) => {
                        const imgUrl = getFullMediaUrl(item.image?.url)
                        return (
                          imgUrl && (
                            <img
                              key={idx}
                              src={imgUrl}
                              alt="Golu"
                              onClick={() => setSelectedImage(imgUrl)}
                              className="thumbnailImage"
                            />
                          )
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="photoSectionTitle">
                      Super Chennai Corner ({sub.superChennaiCornerPhotographs?.length || 0})
                    </h3>
                    <div className="thumbnailContainer">
                      {sub.superChennaiCornerPhotographs?.map((item, idx) => {
                        const imgUrl = getFullMediaUrl(item.image?.url)
                        return (
                          imgUrl && (
                            <img
                              key={idx}
                              src={imgUrl}
                              alt="Super Chennai"
                              onClick={() => setSelectedImage(imgUrl)}
                              className="thumbnailImage"
                            />
                          )
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* MODAL PREVIEW */}
      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="modalBackdrop">
          <div className="modalContent">
            <img src={selectedImage} alt="Enlarged view" className="modalImage" />
            <button onClick={() => setSelectedImage(null)} className="modalCloseBtn">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
