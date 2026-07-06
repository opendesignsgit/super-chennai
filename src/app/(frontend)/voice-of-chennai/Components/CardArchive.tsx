import React from 'react'
import { ArticleCard } from './Card'

export const ArticlesArchive = ({ articles }: { articles: any[] }) => {
  if (!articles?.length) {
    return (
      <div className="text-center py-12 text-slate-500 font-medium">
        No articles found in this collection.
      </div>
    )
  }

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={article.id || index} doc={article} />
        ))}
      </div>
    </section>
  )
}