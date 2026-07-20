import { renderText } from './renderText'

import AwardsBlockComponent from '@/app/(frontend)/icon-of-the-month/blocks/AwardsBlock/Component'
import IconOfMonthDetails from '@/app/(frontend)/icon-of-the-month/blocks/EventsDetails/Component'
import InspiresBlockComponent from '@/app/(frontend)/icon-of-the-month/blocks/InspiresBlock/Component'
import IntroTextLisingPage from '@/app/(frontend)/icon-of-the-month/blocks/IntroSection/Component'
import SocialChennai from '@/blocks/HomePage/SocialChennai/Component'
import IntroText from '@/blocks/InnerPage/SharedBlocks/IntroText/Components'
import CodeBlock from './blocks/CodeBlock'
import ImageBlock from './blocks/ImageBlock'
import MediaBlock from './blocks/MediaBlock'
import VideoBlock from './blocks/VideoBlock'
import BecameAVolunteer from '@/blocks/HomePage/Volunteer/Component'
import FeatureListBlockComponent from '@/app/(frontend)/icon-of-the-month/blocks/FeatureListBlock/Component'
import NaturalsBlockComponent from '@/app/(frontend)/icon-of-the-month/blocks/NaturalsSection/Component'
import GallerySliderComponent from '@/app/(frontend)/icon-of-the-month/blocks/GallerySliderBlock/Component'
import ArattaiBlockComponent from '@/collections/Arrattai/components/RegistrationForm/coponents'

export function renderNode(node: any, idx: number, arattaiData?: any): React.ReactNode {
  /* ------------------------------------------------
   DEBUG
  ------------------------------------------------ */
  // console.log('LEXICAL NODE =>', node)

  switch (node.type) {
    /* ------------------------------------------------
     PARAGRAPH
    ------------------------------------------------ */
    case 'paragraph':
      return (
        <p key={idx} className="mb-5 text-lg leading-8 text-gray-700">
          {renderText(node.children)}
        </p>
      )

    /* ------------------------------------------------
     HEADING
    ------------------------------------------------ */
    case 'heading': {
      const Tag = (node.tag || 'h2') as React.ElementType

      return (
        <Tag key={idx} className={`blog-${node.tag || 'h2'}`}>
          {renderText(node.children)}
        </Tag>
      )
    }

    /* ------------------------------------------------
     LIST
    ------------------------------------------------ */
    case 'list': {
      const ListTag = node.listType === 'number' ? 'ol' : 'ul'

      return (
        <ListTag
          key={idx}
          className={`pl-6 mb-6 ${node.listType === 'number' ? 'list-decimal' : 'list-disc'}`}
        >
          {node.children?.map((child: any, i: number) => (
            <li key={i}>{renderText(child.children)}</li>
          ))}
        </ListTag>
      )
    }

    /* -----------------------------------------------
     IMAGE / UPLOAD
    ------------------------------------------------ */
    case 'upload':
      return <ImageBlock key={idx} node={node} />

    /* -----------------------------------------------
     BLOCKS
    ------------------------------------------------ */
    case 'block': {
      const blockType = node.fields?.blockType

      // console.log('BLOCK TYPE =>', blockType)

      /* ---------------- CODE BLOCK ---------------- */
      if (blockType === 'code' || blockType === 'codeBlock') {
        return <CodeBlock key={idx} node={node} />
      }

      /* ---------------- VIDEO BLOCK ---------------- */
      if (blockType === 'video' || blockType === 'videoBlock') {
        return <VideoBlock key={idx} node={node} />
      }

      /* ---------------- MEDIA BLOCK ---------------- */
      if (blockType === 'media' || blockType === 'mediaBlock') {
        return <MediaBlock key={idx} node={node} />
      }

      /* =========================================================
         NEW  BLOCK
      ========================================================= */

      if (blockType === 'detailsBlock') {
        return <IconOfMonthDetails key={idx} {...node.fields} />
      }

      if (blockType === 'introText') {
        return <IntroText key={idx} {...node.fields} />
      }

      if (blockType === 'introTextListingPage') {
        return <IntroTextLisingPage key={idx} {...node.fields} />
      }

      if (blockType === 'awardsBlock') {
        return <AwardsBlockComponent key={idx} {...node.fields} />
      }

      if (blockType === 'inspiresBlock') {
        return <InspiresBlockComponent key={idx} {...node.fields} />
      }

      if (blockType === 'socialReelSlider') {
        return <SocialChennai key={idx} {...node.fields} />
      }

      if (blockType === 'becameAVolunteer') {
        return <BecameAVolunteer key={idx} {...node.fields} />
      }

      if (blockType === 'featureListBlock') {
        return <FeatureListBlockComponent key={idx} {...node.fields} />
      }

      if (blockType === 'naturals-block') {
        return <NaturalsBlockComponent key={idx} {...node.fields} />
      }

      if (blockType === 'gallery-slider-block') {
        return <GallerySliderComponent key={idx} {...node.fields} />
      }

      if (blockType === 'eventRegistrationFormBlock') {
        return <ArattaiBlockComponent key={idx} block={node.fields} arattaiData={arattaiData} />
      }

      return null
    }

    /* ------------------------------------------------
     DEFAULT
    ------------------------------------------------ */
    default:
      return null
  }
}
