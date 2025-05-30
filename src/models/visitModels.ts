import { Media } from '@/payload-types'

export type FoodListSectionType = {
  imageSections: {
    image: Media
    sectionTitle: string
    sectionDesc?: string
    tenantInfoSections: {
      points: {
        imgs: Media
        title: string
        para: string
        link?: string
      }[]
    }[]
  }[]
}
