'use client'

import React, { useEffect, useState } from 'react'
import { AdminSubmissionsList, SubmissionItem } from './AdminSubmissionsList'
import { AdminSubmissionDetail } from './AdminSubmissionDetail'

export const mockSubmissionsList = [
  {
    id: 'sub_001',
    participant: {
      fullName: 'Lakshmi Narayanan',
      mobileNumber: '9876543210',
      localityArea: 'Mylapore',
      email: 'lakshmi@example.com',
    },
    goluPhotographs: [
      { image: { url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800' } },
      { image: { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' } },
    ],
    superChennaiCornerPhotographs: [
      { image: { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' } },
    ],
    status: 'pendingReview',
    createdAt: '2026-09-02T12:00:00.000Z',
    aboutYourGolu: {
      root: {
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Our Golu features traditional Marapachi dolls alongside a handmade replica of Chennai Central station.',
              },
            ],
          },
        ],
      },
    },
  },
]

export interface Participant {
  id: string
  fullName: string
  mobileNumber: string
  email: string
  localityArea: string
  instagramHandle?: string
  registrationDate: string
  termsAccepted: boolean
  isVerified: boolean
}

export const mockContestSettings = {
  contestName: 'Super Chennai Golu Contest 2026',
  contestSlug: 'golu-contest-2026',
  contestYear: 2026,
  heroTitle: 'SUPER CHENNAI GOLU CONTEST 2026',
  heroSubtitle: 'Celebrate Chennai Navratri Traditions & Win Exciting Prizes',
  heroDescription:
    'Decorate your traditional Golu display, add a special Super Chennai touch, upload photographs, and share your cultural passion with the city!',
  heroImage: '/media/golu-banner.jpg',
  registrationStartDate: '2026-09-01T00:00:00.000Z',
  registrationEndDate: '2026-10-15T23:59:59.000Z',
  submissionStartDate: '2026-09-15T00:00:00.000Z',
  submissionEndDate: '2026-10-25T23:59:59.000Z',
  goluMinImages: 2,
  goluMaxImages: 5,
  superChennaiMinImages: 1,
  superChennaiMaxImages: 3,
  maxImageSizeMB: 10,
  registrationEnabled: true,
  submissionEnabled: true,
}

export const mockParticipant: Participant = {
  id: 'part_987654321',
  fullName: 'Lakshmi Narayanan',
  mobileNumber: '9876543210',
  email: 'lakshmi@example.com',
  localityArea: 'Mylapore',
  instagramHandle: '@lakshmi_golu',
  registrationDate: '2026-09-02T10:00:00.000Z',
  termsAccepted: true,
  isVerified: true,
}

interface Stats {
  totalRegistered: number
  totalSubmissions: number
  pendingReview: number
  approved: number
  shortlisted: number
  rejected: number
}

export const GoluAdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [submissions, setSubmissions] = useState<SubmissionItem[]>(mockSubmissionsList as any[])
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionItem | null>(null)

  useEffect(() => {
    fetch('/api/golu/admin/dashboard')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setStats(data.stats)
      })
      .catch(() => {
        // Fallback default stats for simulation
        setStats({
          totalRegistered: 142,
          totalSubmissions: 86,
          pendingReview: 12,
          approved: 54,
          shortlisted: 14,
          rejected: 6,
        })
      })
      .finally(() => setLoading(false))
  }, [])

  const handleUpdateStatus = (submissionId: string, newStatus: SubmissionItem['status']) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === submissionId ? { ...sub, status: newStatus } : sub)),
    )
    if (selectedSubmission && selectedSubmission.id === submissionId) {
      setSelectedSubmission((prev) => (prev ? { ...prev, status: newStatus } : null))
    }
  }

  if (loading)
    return <div className="p-8 text-stone-500 font-medium">Loading Golu admin dashboard...</div>

  return (
    <div className="p-6 space-y-8 bg-stone-50/50 min-h-screen">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          🪔 Golu Contest Admin
        </h1>
        <p className="text-sm text-stone-500">
          Manage participant entries, review photographs, and shortlist winners.
        </p>
      </div>

      {/* Metrics Header */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          {
            label: 'Total Registered',
            val: stats?.totalRegistered,
            color: 'bg-blue-50 text-blue-800',
          },
          {
            label: 'Submissions',
            val: stats?.totalSubmissions,
            color: 'bg-purple-50 text-purple-800',
          },
          {
            label: 'Pending Review',
            val: stats?.pendingReview,
            color: 'bg-amber-50 text-amber-800',
          },
          { label: 'Approved', val: stats?.approved, color: 'bg-emerald-50 text-emerald-800' },
          { label: 'Shortlisted', val: stats?.shortlisted, color: 'bg-indigo-50 text-indigo-800' },
          { label: 'Rejected', val: stats?.rejected, color: 'bg-rose-50 text-rose-800' },
        ].map((item, idx) => (
          <div key={idx} className={`p-4 rounded-2xl border border-stone-200/80 ${item.color}`}>
            <span className="block text-xs uppercase tracking-wider font-semibold opacity-80">
              {item.label}
            </span>
            <span className="text-3xl font-bold mt-1 block">{item.val ?? 0}</span>
          </div>
        ))}
      </div>

      {/* Submissions Management List */}
      <AdminSubmissionsList
        submissions={submissions}
        onSelectSubmission={(sub) => setSelectedSubmission(sub)}
        onUpdateStatus={handleUpdateStatus}
      />

      {/* Submissions Detail Overlay */}
      {selectedSubmission && (
        <AdminSubmissionDetail
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </div>
  )
}
