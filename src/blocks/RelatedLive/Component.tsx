// import clsx from 'clsx'
// import React from 'react'
// import RichText from 'src/components/RichText'

// import type { Post } from 'src/payload-types'

// import { Card } from '../../components/Card'
// import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

// export type RelatedLiveProps = {
//   className?: string
//   docs?: Post[]
//   introContent?: SerializedEditorState
// }

// export const RelatedLive: React.FC<RelatedLiveProps> = (props) => {
//   const { className, docs, introContent } = props

//   return (
//     <div className={clsx('lg:container', className)}>
//       {introContent && <RichText data={introContent} enableGutter={false} />}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
//         {docs?.map((doc, index) => {
//           if (typeof doc === 'string') return null

//           return <Card key={index} doc={doc} relationTo="posts" showCategories />
//         })}
//       </div>
//     </div>
//   )
// }
