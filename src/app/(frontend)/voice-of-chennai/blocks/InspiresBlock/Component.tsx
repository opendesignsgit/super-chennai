import React from 'react'

type InspiresBlockProps = {
  titlePrefix: string
  titleHighlight: string
  columns: {
    id?: string
    points: { line: string; id?: string }[]
  }[]
}

export default function InspiresBlockComponent({
  titlePrefix,
  titleHighlight,
  columns,
}: InspiresBlockProps) {
  return (
    <section className="awards-section expandingBrand septemeberIconoftheMonth">
      <div className="awards-container">
        <h2 className="section-title">
          {titlePrefix}
          <br />
          <span>{titleHighlight}</span>
        </h2>

        <div className="awards-list">
          {columns?.map((col) => (
            <div key={col.id} className="awards-item">
              {col.points?.map((p) => (
                <p key={p.id} className="award-description">
                  {p.line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
