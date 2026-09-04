'use client'

import React, { useState } from 'react'

export interface SubmissionItem {
  id: string
  participant: {
    fullName: string
    mobileNumber: string
    localityArea: string
    email: string
  }
  goluPhotographs: { image?: { url?: string } }[]
  superChennaiCornerPhotographs: { image?: { url?: string } }[]
  status: 'pendingReview' | 'approved' | 'rejected' | 'shortlisted' | 'finalist' | 'winner'
  createdAt: string
  aboutYourGolu?: any
}

interface AdminSubmissionsListProps {
  submissions: SubmissionItem[]
  onSelectSubmission: (submission: SubmissionItem) => void
  onUpdateStatus: (submissionId: string, newStatus: SubmissionItem['status']) => void
}

const STATUS_TABS = [
  { label: 'All', value: 'all' },
  { label: 'Pending Review', value: 'pendingReview' },
  { label: 'Approved', value: 'approved' },
  { label: 'Shortlisted', value: 'shortlisted' },
  { label: 'Finalist', value: 'finalist' },
  { label: 'Winner', value: 'winner' },
  { label: 'Rejected', value: 'rejected' },
]

const STATUS_BADGES: Record<SubmissionItem['status'], { label: string; bg: string; text: string }> = {
  pendingReview: { label: 'Pending Review', bg: 'bg-amber-100', text: 'text-amber-800' },
  approved: { label: 'Approved', bg: 'bg-emerald-100', text: 'text-emerald-800' },
  shortlisted: { label: 'Shortlisted', bg: 'bg-blue-100', text: 'text-blue-800' },
  finalist: { label: 'Finalist', bg: 'bg-purple-100', text: 'text-purple-800' },
  winner: { label: 'Winner 🏆', bg: 'bg-amber-300', text: 'text-amber-950' },
  rejected: { label: 'Rejected', bg: 'bg-rose-100', text: 'text-rose-800' },
}

export const AdminSubmissionsList: React.FC<AdminSubmissionsListProps> = ({
  submissions,
  onSelectSubmission,
  onUpdateStatus,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSubmissions = submissions.filter((item) => {
    const matchesTab = activeTab === 'all' || item.status === activeTab
    const matchesSearch =
      item.participant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.participant.localityArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.participant.mobileNumber.includes(searchQuery)
    return matchesTab && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-white p-4 rounded-2xl border border-stone-200">
        <input
          type="text"
          placeholder="Search by participant name, locality, or mobile..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-96 px-4 py-2 border border-stone-300 rounded-xl text-sm outline-none focus:border-[#8B3C82]"
        />
        <div className="text-sm font-semibold text-stone-500">
          Showing {filteredSubmissions.length} of {submissions.length} Submissions
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex gap-2 border-b border-stone-200 overflow-x-auto pb-2">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-colors ${
              activeTab === tab.value
                ? 'bg-[#8B3C82] text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Submissions Table / Cards */}
      {filteredSubmissions.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-stone-500 border border-stone-200">
          No submissions match the current filter.
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500">
                <th className="p-4">Cover Image</th>
                <th className="p-4">Participant Details</th>
                <th className="p-4">Locality</th>
                <th className="p-4">Photos Count</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-sm">
              {filteredSubmissions.map((item) => {
                const coverImage =
                  item.goluPhotographs[0]?.image?.url ||
                  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400'
                const badge = STATUS_BADGES[item.status]

                return (
                  <tr key={item.id} className="hover:bg-stone-50/80 transition-colors">
                    <td className="p-4">
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                        <img
                          src={coverImage}
                          alt="Golu preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-stone-900">{item.participant.fullName}</div>
                      <div className="text-xs text-stone-500">+91 {item.participant.mobileNumber}</div>
                    </td>
                    <td className="p-4 font-medium text-stone-700">{item.participant.localityArea}</td>
                    <td className="p-4 text-xs font-medium text-stone-600">
                      Golu: {item.goluPhotographs.length} | Super Chennai: {item.superChennaiCornerPhotographs.length}
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-stone-500">
                      {new Date(item.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <select
                        value={item.status}
                        onChange={(e) =>
                          onUpdateStatus(item.id, e.target.value as SubmissionItem['status'])
                        }
                        className="text-xs border border-stone-300 rounded-lg px-2 py-1 bg-white font-medium text-stone-700 outline-none focus:border-[#8B3C82]"
                      >
                        <option value="pendingReview">Pending</option>
                        <option value="approved">Approve</option>
                        <option value="shortlisted">Shortlist</option>
                        <option value="finalist">Finalist</option>
                        <option value="winner">Winner</option>
                        <option value="rejected">Reject</option>
                      </select>

                      <button
                        onClick={() => onSelectSubmission(item)}
                        className="text-xs font-bold px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}