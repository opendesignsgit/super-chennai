import { DefaultHeroBanner } from "./DefaultHeroBanner/Component"

type Props = {
  slug: string;
  hero: {
    type: string;
    heading?: string;
    image?: any;
    backgroundColor?: string;
    // Add other properties as needed
  };
};

export const RenderHero: React.FC<Props> = ({ hero }) => {
  if (!hero || hero.type === 'none') return null

  const { heading, image, backgroundColor } = hero

  // Ensure image is a valid Media object (not just an ID)
  const resolvedImage =
    typeof image === 'object' && image !== null ? image : undefined

  return (
    <DefaultHeroBanner
      heading={heading}
      image={resolvedImage}
      backgroundColor={backgroundColor ?? undefined}
    />
  )
}


// return (
//     <DefaultHeroBanner
//       heading={heading}
//       image={image}
//       backgroundColor={backgroundColor}
//       type={'none'}
//     />
//   )