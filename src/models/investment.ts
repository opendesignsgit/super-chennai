// export type InvestmentImage = {
//   url: string
//   alt?: string
// }

// export type InvestmentItem = {
//   id: string
//   title: string
//   description?: string
//   image?: InvestmentImage
// }

// export type Investment = {
//   sectionTitle?: string
//   sectionDescription?: string
//   sectionImage?: {
//     url?: string
//     alt?: string
//   }
//   investmentItems?: InvestmentItem[]
// }

// export type InvestmentAPIItem = {
//   sectionImage: any
//   sectionDescription: any
//   sectionTitle: any
//   id: string
//   title: string
//   investments?: Investment[]
//     investmentItems?: InvestmentItem[] 

// }

// export type InvestmentAPIResponse = {
//   docs: InvestmentAPIItem[]
// }

// export type ExtractedCategory = {
//   id: string
//   title: string
//   sectionTitle: string
//   sectionDescription: string
//   sectionImage: string
//   investmentItems: InvestmentItem[]
// }

// export type ChennaiInvestmentsProps = {
//   heading: string
//   subheading?: string
// }
// export type ChennaiInvestmentsState = {
//   extracted: ExtractedCategory[]
//   selectedCategory: string
//   loading: boolean
//   error?: string
// }


// export type SectionInvestment = {
//   id: string
//   title: string
//   sectionTitle?: string
//   sectionDescription?: string
//   sectionImage?: string
//   investmentItems: InvestmentItem[]
// }
// export type InvestDetailsProps = {
//   data: {
//     id: string
//     title: string
//     investments: InvestmentAPIItem[]
//   }
// }

interface InvestmentImage {
  url: string
  alt?: string
}

interface InvestmentItem {
  id: string
  title: string
  description?: string
  image?: InvestmentImage
}

interface Investment {
  sectionTitle?: string
  sectionDescription?: string
  sectionImage?: {
    url?: string
    alt?: string
  }
  investmentItems?: InvestmentItem[]
}

interface InvestmentAPIItem {
  sectionImage: any
  sectionDescription: any
  sectionTitle: any
  id: string
  title: string
  investments?: Investment[]
  investmentItems?: InvestmentItem[]
}

interface InvestmentAPIResponse {
  docs: InvestmentAPIItem[]
}

interface ExtractedCategory {
  id: string
  title: string
  sectionTitle: string
  sectionDescription: string
  sectionImage: string
  investmentItems: InvestmentItem[]
}

interface ChennaiInvestmentsProps {
  heading: string
  subheading?: string
}

interface ChennaiInvestmentsState {
  extracted: ExtractedCategory[]
  selectedCategory: string
  loading: boolean
  error?: string
}

interface SectionInvestment {
  id: string
  title: string
  sectionTitle?: string
  sectionDescription?: string
  sectionImage?: string
  investmentItems: InvestmentItem[]
}

interface InvestDetailsProps {
  data: {
    id: string
    title: string
    investments: InvestmentAPIItem[]
  }
}

export type {
  InvestmentImage,
  InvestmentItem,
  Investment,
  InvestmentAPIItem,
  InvestmentAPIResponse,
  ExtractedCategory,
  ChennaiInvestmentsProps,
  ChennaiInvestmentsState,
  SectionInvestment,
  InvestDetailsProps,
}
