// 'use client'

// import React from 'react'
// import './style.css'
// import { FormPopupComponent } from '../../SharedBlocks/FormPopup/Components'

// type VolunteerSection = {
//   title: string
//   description: string
//   image: string
//   linkText: string
//   linkUrl: string
// }

// type Props = {
//   sectionTitle: string
//   sectionDescription: string
//   volunteerSections: VolunteerSection[]
// }

// export default function VolunteerBecameSection({
//   sectionTitle,
//   sectionDescription,
//   volunteerSections,
// }: Props) {
//   console.log('VolunteerBecameSection props:', {
//     sectionTitle,
//     sectionDescription,
//     volunteerSections,
//   })

//   // ###########  THIS IS DEFULT IMAGE #################

//   const defaultImage = '/images/default-placeholder.png'

//   return (
//     <div className="VolunterPageBecameVolunteerBg">
//       <div className="VolunteerBecameavolunteer">
//         <h3>{sectionTitle}</h3>
//         <p>{sectionDescription}</p>
//       </div>

//       <div>
//         <div className="container max-w-7xl mx-auto px-4">
//           {volunteerSections.map((section, index) => (
//             <div className="DigitalSectionFLex" key={index}>
//               {index % 2 === 0 ? (
//                 <>
//                   <img
//                     src={section.image.url}
//                     alt={section.image.alt || section.title}
//                     onError={(e) => {
//                       e.currentTarget.src = defaultImage
//                     }}
//                   />

//                   <div className="BecamaAVolunterContentsSection">
//                     <h3>{section.title}</h3>
//                     <p>{section.description}</p>
//                     <div className="exploreVolunteerPage">
//                       <FormPopupComponent
//                         heading="Contact Us"
//                         description="Please fill out the form and we'll get back to you."
//                         buttonText="Enquire Now"
//                       />
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="BecamaAVolunterContentsSection1">
//                     <h3>{section.title}</h3>
//                     <p>{section.description}</p>
//                     <div className="exploreVolunteerPage1">
//                       <FormPopupComponent
//                         heading="Contact Us"
//                         description="Please fill out the form and we'll get back to you."
//                         buttonText="Enquire Now"
//                       />
//                     </div>
//                   </div>
//                   <img
//                     src={section.image.url}
//                     alt={section.image.alt || section.title}
//                     onError={(e) => {
//                       e.currentTarget.src = defaultImage
//                     }}
//                   />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import React from 'react'
import Image from 'next/image'
import './style.css'
import { FormPopupComponent } from '../../SharedBlocks/FormPopup/Components'

type VolunteerSection = {
  title: string
  description: string
  image: {
    url: string
    alt?: string
  }
  linkText: string
  linkUrl: string
}

type Props = {
  sectionTitle: string
  sectionDescription: string
  volunteerSections: VolunteerSection[]
}

export default function VolunteerBecameSection({
  sectionTitle,
  sectionDescription,
  volunteerSections,
}: Props) {
  const defaultImage = '/images/default-placeholder.png'

  return (
    <div className="VolunterPageBecameVolunteerBg">
      <div className="VolunteerBecameavolunteer">
        <h3>{sectionTitle}</h3>
        <p>{sectionDescription}</p>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4">
          {volunteerSections.map((section, index) => {
            const imageUrl = section.image?.url || defaultImage
            const imageAlt = section.image?.alt || section.title

            const ImageComponent = (
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = defaultImage // fallback for server errors
                }}
              />
            )

            return (
              <div className="DigitalSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    {ImageComponent}
                    <div className="BecamaAVolunterContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage">
                        <FormPopupComponent
                          heading="Contact Us"
                          description="Please fill out the form and we'll get back to you."
                          buttonText="Enquire Now"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="BecamaAVolunterContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage1">
                        <FormPopupComponent
                          heading="Contact Us"
                          description="Please fill out the form and we'll get back to you."
                          buttonText="Enquire Now"
                        />
                      </div>
                    </div>
                    {ImageComponent}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
