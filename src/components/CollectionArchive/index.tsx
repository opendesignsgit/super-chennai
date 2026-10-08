import React from 'react'
import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
  relationTo?: string
}

export const CollectionArchive: React.FC<Props> = ({ posts, relationTo = 'blog' }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-muted-foreground">Please check back later.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="visitIntroParaSection detailIntro !pb-0">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="CostOflivingBackground scroll-leftCostofLiving">
            <p>Blog &nbsp; in Chennai &nbsp; Blog &nbsp; in Chennai</p>
          </div>
          <div className="workIntro">
            <h3>Blog</h3>
            <p>
              Chennai’s startup ecosystem is booming, backed by skilled talent, strong industry
              knowledge, and rising investor interest, paving the way for global success stories.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto blogSectionNew">
        <div className="blog-grid-container blogSectionContiner">
          {posts.map((post, index) => (
            <Card key={index} className="h-full w-full" doc={post} relationTo={relationTo} />
          ))}
        </div>
      </div>
    </>
  )
}
