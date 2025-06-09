type FoodItem = {
  title: string
  description: string
  image: {
    url: string
    alt?: string
  }
  page?: {
    slug?: string
  }
  customLink?: string
}

type Props = {
  heading: string
  headingSpan?: string
  description: string
  foodItems: FoodItem[]
}
