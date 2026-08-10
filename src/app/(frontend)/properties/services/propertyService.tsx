export async function fetchProperties(
  filters: any = {},
  sortBy: string = '-createdAt',
  page: number = 1,
  limit: number = 10,
) {
  const queryParams = new URLSearchParams()

  queryParams.set('sort', sortBy || '-createdAt')
  queryParams.set('page', String(page))
  queryParams.set('limit', String(limit))
  queryParams.set('depth', '2')

  // ########## PROPERTY TYPES  #####################
  if (filters.propertyTypes && filters.propertyTypes.length > 0) {
    filters.propertyTypes.forEach((type: string) => {
      // Direct relationship value/slug match
      queryParams.append('where[propertyType.value][in]', type)
    })
  }

  
  // ########## PROPERTY LOCATION #####################

  if (filters.propertylocations && filters.propertylocations.length > 0) {
    filters.propertylocations.forEach((locId: string | number) => {
      queryParams.append('where[propertyLocation.id][in]', String(locId))
    })
  }

  // 3. BHK (where[bhk][in]=2)
  if (filters.bhk && filters.bhk.length > 0) {
    filters.bhk.forEach((bhkVal: string) => {
      queryParams.append('where[bhk][in]', bhkVal)
    })
  }

  // 4. Purpose (where[purpose][in]=buy)
  if (filters.purpose && filters.purpose.length > 0) {
    filters.purpose.forEach((p: string) => {
      queryParams.append('where[purpose][in]', p)
    })
  }

  // 5. Furnishing (where[furnishing][in]=fully-furnished)
  if (filters.furnishing && filters.furnishing.length > 0) {
    filters.furnishing.forEach((f: string) => {
      queryParams.append('where[furnishing][in]', f)
    })
  }

  // 6. Budget Range (where[price][greater_than_equal]=10000)
  if (filters.minBudget && Number(filters.minBudget) > 0) {
    queryParams.set('where[price][greater_than_equal]', String(filters.minBudget))
  }
  if (filters.maxBudget && Number(filters.maxBudget) > 0) {
    queryParams.set('where[price][less_than_equal]', String(filters.maxBudget))
  }

  // Resulting URL Format:
  // /api/properties?sort=-createdAt&page=1&limit=10&depth=2&where[propertyType.value][in]=villa
  const url = `/api/properties?${queryParams.toString()}`

  const res = await fetch(url, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch properties')
  }

  return res.json()
}
export async function fetchPropertyById(id: string) {
  const res = await fetch(`/api/properties/${id}?depth=2`)
  if (!res.ok) throw new Error('Property not found')
  return res.json()
}

export async function fetchPropertyBySlug(slug: string) {
  const res = await fetch(`/api/properties?where[slug][equals]=${slug}&depth=2`)
  if (!res.ok) throw new Error('Property not found')
  const data = await res.json()
  return data.docs?.[0] || null
}
