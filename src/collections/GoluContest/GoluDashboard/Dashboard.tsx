
'use client'

import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import './Dashboard.css'

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
  const [activeTab, setActiveTab] = useState<'submissions' | 'broadcast'>('submissions')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Selection & Broadcast States
  const [selectedParticipantIds, setSelectedParticipantIds] = useState<(number | string)[]>([])
  const [emailSubject, setEmailSubject] = useState<string>('Super Chennai Golu Contest Update')
  const [emailMessage, setEmailMessage] = useState<string>('')
  const [sendingEmail, setSendingEmail] = useState<boolean>(false)
  const [emailStatusMsg, setEmailStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/golu-submissions?depth=2&limit=200')
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
      sub.participant?.email?.toLowerCase().includes(query) ||
      sub.participant?.localityArea?.toLowerCase().includes(query)
    return matchesStatus && matchesSearch
  })

  // Select All Checkbox Handler
  const toggleSelectAll = () => {
    if (selectedParticipantIds.length === filteredSubmissions.length) {
      setSelectedParticipantIds([])
    } else {
      setSelectedParticipantIds(filteredSubmissions.map((s) => s.id))
    }
  }

  // Custom Individual Checkbox Handler
  const toggleSelectOne = (id: number | string) => {
    setSelectedParticipantIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Send Broadcast Mail Handler
  const handleSendBroadcast = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedParticipantIds.length === 0) {
      setEmailStatusMsg({ type: 'error', text: 'Please select at least one user from the list.' })
      return
    }
    if (!emailMessage.trim()) {
      setEmailStatusMsg({ type: 'error', text: 'Message body cannot be empty.' })
      return
    }

    try {
      setSendingEmail(true)
      setEmailStatusMsg(null)

      const targetEmails = submissions
        .filter((sub) => selectedParticipantIds.includes(sub.id))
        .map((sub) => sub.participant?.email)
        .filter(Boolean)

      // const res = await fetch('/api/golu-submissions/bulk-email', {
      const res = await fetch('/api/golu/bulk-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: targetEmails,
          subject: emailSubject,
          message: emailMessage,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setEmailStatusMsg({ type: 'success', text: data.message })
        setEmailMessage('')
        setSelectedParticipantIds([])
      } else {
        setEmailStatusMsg({ type: 'error', text: data.message || 'Failed to send emails.' })
      }
    } catch (err: any) {
      setEmailStatusMsg({ type: 'error', text: err?.message || 'Network error occurred.' })
    } finally {
      setSendingEmail(false)
    }
  }

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
            Manage submissions, review status tracking, and send bulk notification emails.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`filterBtn ${activeTab === 'submissions' ? 'filterBtnActive' : ''}`}
          >
            📋 Submissions List
          </button>
          <button
            onClick={() => setActiveTab('broadcast')}
            className={`filterBtn ${activeTab === 'broadcast' ? 'filterBtnActive' : ''}`}
          >
            ✉️ Bulk Email Center ({selectedParticipantIds.length} Selected)
          </button>
          <button onClick={exportToExcel} className="exportBtn">
            📊 Export Excel
          </button>
        </div>
      </div>

      {activeTab === 'submissions' ? (
        <>
          {/* TOOLBAR */}
          <div className="toolbarCard">
            <input
              type="text"
              placeholder="Search by name, email, phone, locality..."
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

          {/* SELECT ALL CONTROLS */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={filteredSubmissions.length > 0 && selectedParticipantIds.length === filteredSubmissions.length}
                onChange={toggleSelectAll}
                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
              />
              Select All Filtered Users ({filteredSubmissions.length} available)
            </label>
            {selectedParticipantIds.length > 0 && (
              <button
                onClick={() => setActiveTab('broadcast')}
                style={{ background: '#7c3aed', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
              >
                Send Mail to Selected ({selectedParticipantIds.length}) →
              </button>
            )}
          </div>

          {/* SUBMISSIONS LIST WITH CHECKBOXES ON THE LEFT */}
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

                const isChecked = selectedParticipantIds.includes(sub.id)

                return (
                  <div key={sub.id} className="submissionCard" style={{ borderLeft: isChecked ? '4px solid #7c3aed' : '1px solid #e2e8f0' }}>
                    <div className="cardHeader">
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        {/* Custom Select Checkbox on Left */}
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleSelectOne(sub.id)}
                          style={{ width: '18px', height: '18px', marginTop: '4px', cursor: 'pointer' }}
                        />
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                            <h2 className="participantName">{sub.participant?.fullName || 'Unknown'}</h2>
                            <span className={`statusBadge ${badgeClass}`}>{sub.status}</span>
                          </div>
                          <p className="participantMeta">
                            📱 +91 {sub.participant?.mobileNumber} | ✉️ {sub.participant?.email} | 📍{' '}
                            <span className="participantLocality">{sub.participant?.localityArea}</span> |
                            IG: {sub.participant?.instagramHandle || 'N/A'}
                          </p>
                        </div>
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
        </>
      ) : (
        /* BROADCAST MAIL TAB */
        <div className="toolbarCard" style={{ display: 'block', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
            ✉️ Custom Email Broadcast Center
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
            You have selected <strong style={{ color: '#7c3aed' }}>{selectedParticipantIds.length}</strong> participants to email.
          </p>

          {emailStatusMsg && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '16px',
                backgroundColor: emailStatusMsg.type === 'success' ? '#dcfce7' : '#fee2e2',
                color: emailStatusMsg.type === 'success' ? '#15803d' : '#b91c1c',
              }}
            >
              {emailStatusMsg.text}
            </div>
          )}

          <form onSubmit={handleSendBroadcast}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: '#334155' }}>
                Email Subject
              </label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="searchInput"
                style={{ width: '100%', boxSizing: 'border-box' }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: '#334155' }}>
                Email Message Content
              </label>
              <textarea
                rows={6}
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
                placeholder="Type your custom email message here..."
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
                required
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                disabled={sendingEmail || selectedParticipantIds.length === 0}
                className="exportBtn"
                style={{ opacity: sendingEmail || selectedParticipantIds.length === 0 ? 0.6 : 1, cursor: 'pointer' }}
              >
                {sendingEmail ? 'Sending Emails...' : `🚀 Send Mail to ${selectedParticipantIds.length} Users`}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('submissions')}
                className="filterBtn"
                style={{ padding: '10px 18px' }}
              >
                Back to Submissions
              </button>
            </div>
          </form>
        </div>
      )}

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