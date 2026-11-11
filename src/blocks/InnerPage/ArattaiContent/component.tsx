import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface ArrataiContentProps {
  heading: string
  content: DefaultTypedEditorState
  registerRef?: React.Ref<HTMLParagraphElement>
}

export const ArrataiContentComponent: React.FC<ArrataiContentProps> = ({
  heading,
  content,
  registerRef,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="InvestChennaiContent-conclaves">
            <h1 className="text-center hidden">{heading}</h1>
            <h3 className="text-center">{heading}</h3>

            {/* Rich Text Renderer handles paragraphs and strong tags automatically */}
            <div className="text-gray-600 leading-relaxed space-y-6 poppinsfamilyyy">
              <RichText data={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArrataiContentComponent
