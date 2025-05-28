type FoodItem = {
  title: string
  description: string
  image: {
    url: string
    alt?: string
  }
  link?: string
}

type Props = {
  heading: string
  description: string
  foodItems: FoodItem[]
}