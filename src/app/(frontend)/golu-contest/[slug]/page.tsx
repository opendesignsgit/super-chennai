/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const contests = await payload.find({
      collection: 'golu-contest',
      limit: 100,
    })

    return contests.docs.map((doc) => ({
      slug: doc.slug,
    }))
  } catch {
    return []
  }
}

export default async function GoluContestSlugPage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const contestQuery = await payload.find({
    collection: 'golu-contest',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  })

  const contest = contestQuery.docs[0]

  if (!contest) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <LexicalRenderer content={contest?.content} contest={contest} />
      </div>
    </div>
  )
}