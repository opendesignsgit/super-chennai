export interface FilterState {
  propertyTypes: string[]
  propertylocations: string[]
  bhk: string[]
  purpose: string[]
  furnishing: string[]
  minBudget: number
  maxBudget: number
  possessionStatus: string[]
  ageOfProperty: string
  plotDimensions: {
    length: number
    width: number
  }
  parking: string[]
  amenities: string[]
  interiors: string[]
  appliances: string[]
  bathroomFeatures: {
    jacuzzi: boolean
    bathtubs: boolean
    heatedFlooring: boolean
    [key: string]: boolean
  }
  facing: string[]
}

export const defaultFilters: FilterState = {
  propertyTypes: [],
  propertylocations: [],
  bhk: [],
  purpose: [],
  furnishing: [],
  minBudget: 0,
  maxBudget: 100000000,
  possessionStatus: [],
  ageOfProperty: '',
  plotDimensions: {
    length: 0,
    width: 0,
  },
  parking: [],
  amenities: [],
  interiors: [],
  appliances: [],
  bathroomFeatures: {
    jacuzzi: false,
    bathtubs: false,
    heatedFlooring: false,
  },
  facing: [],
}