export async function fetchProperties(
  filters: any = {},
  sortBy: string = '-createdAt',
  page: number = 1,
  limit: number = 10
) {
  const whereConditions: any[] = []

  // 1. Property Locations
  if (filters.propertylocations && filters.propertylocations.length > 0) {
    whereConditions.push({
      location: { in: filters.propertylocations },
    })
  }

  // 2. Property Types
  if (filters.propertyTypes && filters.propertyTypes.length > 0) {
    whereConditions.push({
      propertyType: { in: filters.propertyTypes },
    })
  }

  // 3. BHK
  if (filters.bhk && filters.bhk.length > 0) {
    whereConditions.push({
      bhk: { in: filters.bhk },
    })
  }

  // 4. Purpose
  if (filters.purpose && filters.purpose.length > 0) {
    whereConditions.push({
      purpose: { in: filters.purpose },
    })
  }

  // 5. Furnishing
  if (filters.furnishing && filters.furnishing.length > 0) {
    whereConditions.push({
      furnishing: { in: filters.furnishing },
    })
  }

  // 6. Budget
  if (filters.minBudget !== undefined || filters.maxBudget !== undefined) {
    whereConditions.push({
      price: {
        greater_than_equal: filters.minBudget || 0,
        less_than_equal: filters.maxBudget || 100000000,
      },
    })
  }

  const queryWhere = whereConditions.length > 0 ? { and: whereConditions } : {}

  const queryParams = new URLSearchParams({
    where: JSON.stringify(queryWhere),
    sort: sortBy || '-createdAt',
    page: String(page),
    limit: String(limit),
    depth: '2',
  })

  const res = await fetch(`/api/properties?${queryParams.toString()}`, {
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