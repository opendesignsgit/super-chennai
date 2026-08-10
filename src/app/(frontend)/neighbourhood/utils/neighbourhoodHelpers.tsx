export function normalize(str: string = ''): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .replace(/aa|ah/g, 'a')
    .replace(/ee|eh/g, 'e')
    .replace(/oo|oh/g, 'o')
    .replace(/th/g, 't')
    .replace(/dh/g, 'd')
}

export function getDistance(a: string = '', b: string = ''): number {
  const matrix: number[][] = Array.from(
    { length: b.length + 1 },
    () => Array(a.length + 1).fill(0),
  )

  for (let i = 0; i <= b.length; i++) {
    matrix[i]![0] = i
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0]![j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i]![j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1]![j - 1]!
          : Math.min(
              matrix[i - 1]![j - 1]! + 1,
              matrix[i]![j - 1]! + 1,
              matrix[i - 1]![j]! + 1,
            )
    }
  }

  return matrix[b.length]![a.length]!
}

/**
 * Media URL Resolver Helper
 */
export const getMediaUrl = (imageField: any, fallbackUrl = '/images/no-image.png') => {
  if (!imageField) return fallbackUrl
  if (typeof imageField === 'string') {
    return imageField.trim() || fallbackUrl
  }
  if (imageField?.url && typeof imageField.url === 'string') {
    return imageField.url.trim() || fallbackUrl
  }
  return fallbackUrl
}

/**
 * Text Normalizer Helper
 */
export const normalizeText = (text?: string) => {
  return text?.toLowerCase().trim().replace(/\s+/g, '-') || ''
}

/**
 * Item Detail Path Builder Helper
 */
export const getItemDetailUrl = ({
  locationId,
  category,
  subcategory,
  slug,
}: {
  locationId?: string
  category?: string
  subcategory?: string
  slug?: string
}) => {
  const safeLoc = normalizeText(locationId) || 'chennai'
  const safeCat = normalizeText(category) || 'all'
  const safeSubCat = subcategory ? normalizeText(subcategory) : ''
  const safeSlug = normalizeText(slug)

  if (safeSubCat && safeSubCat !== safeCat) {
    return `/neighbourhood/${safeLoc}/${safeCat}/${safeSubCat}/${safeSlug}`
  }
  return `/neighbourhood/${safeLoc}/${safeCat}/${safeSlug}`
}

/**
 * Group Data by Category Helper
 */
export const groupDocsByCategory = (docs: any[] = []) => {
  return docs.reduce((acc: Record<string, any[]>, item: any) => {
    const cat = item?.category?.title || item?.category?.name || 'Others'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item)
    return acc
  }, {})
}

/**
 * Get Category Counts Array Helper
 */
export const getCategoryStats = (docs: any[] = [], limit = 5) => {
  const grouped = groupDocsByCategory(docs)
  const categories = Object.keys(grouped)

  return categories.slice(0, limit).map((catName) => {
    const items = grouped[catName] || []
    const dynamicIcon = items[0]?.category?.icon

    return {
      name: catName,
      count: items.length,
      iconUrl: dynamicIcon && typeof dynamicIcon === 'object' ? dynamicIcon?.url : null,
    }
  })
}

/**
 * Category Fallback Icon Resolver Helper
 */
export const getCategoryIcon = (categoryName: string, customIconUrl?: string | null) => {
  if (customIconUrl) {
    return customIconUrl
  }

  const defaultIcons: Record<string, string> = {
    Schools: '🏫',
    Hospitals: '🏥',
    Shopping: '🛍️',
    Banks: '🏦',
    Colleges: '🎓',
    'Real Estate': '🏢',
    'Co-working-Space': '💻',
  }

  return defaultIcons[categoryName] || '📍'
}

/**
 * Gallery Image Extractor Helper
 */
export const parseGalleryImages = (gallery: any[] = [], fallbackTitle = 'Gallery Image') => {
  if (!Array.isArray(gallery)) return []
  return gallery.map((g: any) => ({
    url: getMediaUrl(g.image),
    alt: g.alt || fallbackTitle,
    caption: g.caption || '',
  }))
}

/**
 * Website URL Formatter Helper
 */
export const formatWebsiteUrl = (url?: string) => {
  if (!url) return ''
  return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`
}


/**
 * Business Hours Formatter Helper
 */
export const formatBusinessHours = (hoursConfig: any) => {
  if (!hoursConfig) return '10:00 AM - 9:30 PM'
  if (hoursConfig.openTime || hoursConfig.closeTime) {
    return `${hoursConfig.openTime || ''} - ${hoursConfig.closeTime || ''}`.trim()
  }
  return '10:00 AM - 9:30 PM'
}

/**
 * Related Neighbourhood Items Filter Helper
 */
export function getRelatedItems({
  items = [],
  currentSlug = '',
  category = '',
  subcategory = '',
}: {
  items: any[]
  currentSlug: string
  category: string
  subcategory?: string
}) {
  if (!items || !Array.isArray(items) || items.length === 0) return []

  const cleanCurrentSlug = currentSlug?.toLowerCase().trim()
  const cleanCategory = category?.toLowerCase().trim()
  const cleanSubcategory =
    subcategory && subcategory !== 'undefined' ? subcategory.toLowerCase().trim() : ''

  return items.filter((item) => {
    const itemSlug = item?.slug?.toLowerCase().trim()
    if (itemSlug === cleanCurrentSlug) return false
    const rawCategory = item?.category
    const itemCategorySlug = typeof rawCategory === 'object' ? rawCategory?.slug : rawCategory
    const itemCategoryTitle = typeof rawCategory === 'object' ? rawCategory?.title : ''
    const cleanCatSlug = itemCategorySlug?.toString()?.toLowerCase()?.trim()
    const cleanCatTitle = itemCategoryTitle?.toString()?.toLowerCase()?.trim()
    const isCategoryMatch = cleanCatSlug === cleanCategory || cleanCatTitle === cleanCategory
    const rawSubCategories = item?.subCategories || item?.subcategory || []
    const hasSubcategoryMatch =
      Array.isArray(rawSubCategories) &&
      rawSubCategories.some((sub: any) => {
        const subSlug = typeof sub === 'object' ? sub?.slug : sub
        const subTitle = typeof sub === 'object' ? sub?.title : ''
        const cleanSubSlug = subSlug?.toString()?.toLowerCase()?.trim()
        const cleanSubTitle = subTitle?.toString()?.toLowerCase()?.trim()

        return cleanSubSlug === cleanSubcategory || cleanSubTitle === cleanSubcategory
      })

    if (cleanSubcategory) {
      return hasSubcategoryMatch
    }

    return isCategoryMatch
  })
}
