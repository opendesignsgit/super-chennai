'use client'

import React, { useState } from 'react'
import { SubmissionItem } from './AdminSubmissionsList'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'
// import { LexicalRenderer } from '../shared/LexicalRenderer'

interface AdminSubmissionDetailProps {
  submission: SubmissionItem
  onClose: () => void
  onUpdateStatus: (submissionId: string, newStatus: SubmissionItem['status']) => void
}

export const AdminSubmissionDetail: React.FC<AdminSubmissionDetailProps> = ({
  submission,
  onClose,
  onUpdateStatus,
}) => {
  const [internalNotes, setInternalNotes] = useState('')
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const allPhotos = [
    ...submission.goluPhotographs.map((p) => ({
      url: p.image?.url || 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
      type: 'Golu Display',
    })),
    ...submission.superChennaiCornerPhotographs.map((p) => ({
      url: p.image?.url || 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
      type: 'Super Chennai Corner',
    })),
  ]

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6 relative">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B3C82]">
              Submission ID: {submission.id}
            </span>
            <h2 className="text-2xl font-bold text-stone-900">{submission.participant.fullName}</h2>
            <p className="text-sm text-stone-500">
              {submission.participant.localityArea} | +91 {submission.participant.mobileNumber} |{' '}
              {submission.participant.email}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center font-bold"
          >
            ✕
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-between bg-stone-50 p-4 rounded-2xl border border-stone-200 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-600 uppercase">Current Status:</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8B3C82] text-white">
              {submission.status}
            </span>
          </div>

          <div className="flex gap-2">
            {(['approved', 'shortlisted', 'finalist', 'winner', 'rejected'] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => onUpdateStatus(submission.id, status)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl capitalize transition-colors ${
                    submission.status === status
                      ? 'bg-stone-900 text-white'
                      : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  Mark {status}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-stone-900">
            Photographs Submitted ({allPhotos.length})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {allPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(photo.url)}
                className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 cursor-pointer group bg-stone-100"
              >
                <img
                  src={photo.url}
                  alt={photo.type}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1 left-1 bg-stone-900/80 text-white text-[10px] px-2 py-0.5 rounded-md backdrop-blur-xs font-medium">
                  {photo.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Story / About Golu */}
        <div className="space-y-2 border-t border-stone-200 pt-6">
          <h3 className="text-base font-bold text-stone-900">About Their Golu</h3>
          {submission.aboutYourGolu ? (
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <LexicalRenderer content={submission.aboutYourGolu} />
            </div>
          ) : (
            <p className="text-sm italic text-stone-400">No story description provided.</p>
          )}
        </div>

        {/* Internal Admin Notes */}
        <div className="space-y-2 border-t border-stone-200 pt-6">
          <h3 className="text-base font-bold text-stone-900">Internal Admin Notes</h3>
          <textarea
            rows={3}
            value={internalNotes}
            onChange={(e) => setInternalNotes(e.target.value)}
            placeholder="Add notes visible only to contest managers..."
            className="w-full p-3 text-sm rounded-xl border border-stone-300 outline-none focus:border-[#8B3C82]"
          />
          <button className="px-4 py-2 bg-stone-800 text-white text-xs font-bold rounded-xl hover:bg-stone-700">
            Save Internal Note
          </button>
        </div>

        {/* Image Preview Overlay Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt="Expanded Golu"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </div>
        )}
      </div>
    </div>
  )
}
