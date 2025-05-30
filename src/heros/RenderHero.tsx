import React from 'react'
import type { Page } from '@/payload-types'
import { DefaultHeroBanner } from './DefaultHeroBanner/Component'

type Props = {
  slug?: string
  hero?: Page['hero']
}

export const RenderHero: React.FC<Props> = ({ slug, hero }) => {
  if (!hero || hero.type === 'none') return null

  const { heading, image, backgroundColor } = hero

  return (
    <DefaultHeroBanner
      heading={heading}
      image={image}
      backgroundColor={backgroundColor}
      type={'none'}
    />
  )
}
