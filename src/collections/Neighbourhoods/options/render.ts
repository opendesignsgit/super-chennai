// export function generateBusinessSchema(doc: any) {
//   if (!doc) return null

//   const schemaType =
//     doc?.structuredData?.schemaType || 'LocalBusiness'

//   const images = [
//     doc?.heroImage?.url,
//     ...(doc?.gallery?.map((g: any) => g?.image?.url) || []),
//   ].filter(Boolean)

//   const openingHours =
//     doc?.structuredData?.openingHours?.map(
//       (o: any) => `${o.day} ${o.opens}-${o.closes}`
//     ) || []

//   const paymentMethods =
//     doc?.structuredData?.paymentAccepted?.map(
//       (p: any) => p.method
//     ) || []

//   const amenities =
//     doc?.structuredData?.amenityFeature?.map((a: any) => ({
//       '@type': 'LocationFeatureSpecification',
//       name: a.name,
//       value: a.available,
//     })) || []

//   const schema: any = {
//     '@context': 'https://schema.org',
//     '@type': schemaType,

//     name: doc?.name,
//     description: doc?.description,
//     image: images,

//     url: `${process.env.NEXT_PUBLIC_SITE_URL}/${doc?.slug}`,

//     address: {
//       '@type': 'PostalAddress',
//       streetAddress: doc?.address,
//       addressLocality: doc?.area,
//       addressRegion: doc?.city,
//       addressCountry: 'IN',
//     },

//     geo: {
//       '@type': 'GeoCoordinates',
//       latitude: doc?.location?.latitude,
//       longitude: doc?.location?.longitude,
//     },

//     telephone: doc?.structuredData?.telephone,
//     email: doc?.structuredData?.email,
//     priceRange: doc?.structuredData?.priceRange,
//     paymentAccepted: paymentMethods,
//     openingHours: openingHours,

//     amenityFeature: amenities,
//     hasMap: doc?.structuredData?.mapUrl,

//     sameAs:
//       doc?.structuredData?.socialLinks?.map(
//         (s: any) => s.url
//       ) || [],
//   }

//   if (doc?.rating && doc?.totalReviews) {
//     schema.aggregateRating = {
//       '@type': 'AggregateRating',
//       ratingValue: doc.rating,
//       reviewCount: doc.totalReviews,
//     }
//   }

//   return schema
// }