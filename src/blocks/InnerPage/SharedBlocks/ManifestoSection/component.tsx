// 'use client'

// import React, { useRef, useState } from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// type PayloadMedia = {
//   url: string
//   alt?: string
// }

// type SliderImageItem = {
//   id?: string
//   image: PayloadMedia | string
//   altText?: string
// }

// type ManifestoSectionProps = {
//   topHeaderTitle?: string
//   mainHeading?: string
//   paragraph1?: string
//   subHeading?: string
//   paragraph2?: string
//   highlightText?: string
//   buttonText?: string
//   sliderImages?: SliderImageItem[]
//   onDownloadClick?: () => void
// }

// export default function ManifestoSectionComponent({
//   topHeaderTitle = 'Manifesto in Your Hands',
//   mainHeading = 'DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS',
//   paragraph1 = 'The future of Chennai is shaped by the aspirations of its people. Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest.',
//   subHeading = 'Live, Work, Visit, Innovate and Invest',
//   paragraph2 = 'Suffice to say, incredible insights were collated. And they have been put together as a Manifesto on what the people wish for, from Super Chennai.',
//   highlightText = 'Register your details to access and download the full manifesto.',
//   buttonText = 'Download',
//   sliderImages = [
//     { image: '/images/wireImages/Visit.jpg', altText: 'visit' },
//     { image: '/images/wireImages/work.jpg', altText: 'work' },
//     { image: '/images/wireImages/innovate.jpg', altText: 'innovate' },
//     { image: '/images/wireImages/live.jpg', altText: 'live' },
//     { image: '/images/wireImages/Invest.jpg', altText: 'invest' },
//   ],
//   onDownloadClick,
// }: ManifestoSectionProps) {
//   const [activeSlide, setActiveSlide] = useState(0)

//   const handleDownload = () => {
//     if (onDownloadClick) {
//       onDownloadClick()
//     }
//   }

//   const [nav1, setNav1] = useState(null)
//   const [nav2, setNav2] = useState(null)

//   const slider1 = useRef(null)
//   const slider2 = useRef(null)

//   const sliderSettings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   }

//   const mainSettings = {
//     arrows: false,
//     fade: true,
//     asNavFor: nav2,
//   }

//   const thumbSettings = {
//     slidesToShow: 1,
//     swipeToSlide: true,
//     focusOnSelect: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: true,
//     asNavFor: nav1,
//     arrows: false,
//     centerMode: true,
//   }

//   return (
//     <>
//       <section className="mt-10 manifestoSection pb-20 relative manifestopage">
//         <div className="container max-w-7xl mx-auto px-4">
//           {/* Top Header */}
//           <div className="InvestChennaiContent-conclaves mb-8">
//             <h3 className="text-center text-2xl md:text-3xl ">{topHeaderTitle}</h3>
//           </div>

//           <div className="items-center relative">
//             {/* Content Block */}
//             <div className="text-center lg:text-left mb-8 lg:mb-0 relative md:absolute top-0 right-0 w-full md:w-[50%] z-[40] manifestowidth">
//               <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
//                 {mainHeading}
//               </h2>

//               {paragraph1 && (
//                 <p className="paraZeroVolunteerSection mb-4 text-gray-700 leading-relaxed text-sm sm:text-base manifestopara font-medium">
//                   {paragraph1}
//                 </p>
//               )}

//               {subHeading && (
//                 <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
//                   {subHeading}
//                 </h2>
//               )}

//               {paragraph2 && (
//                 <p className="text-gray-600 leading-relaxed mb-2 text-sm sm:text-base manifestopara font-medium">
//                   {paragraph2}
//                 </p>
//               )}

//               {highlightText && (
//                 <p
//                   className="themelink-color text-gray-600 leading-relaxed mb-6 text-sm sm:text-base manifestopara"
//                   style={{
//                     fontFamily: 'NewAmsterdam, sans-serif',
//                     fontSize: '25px',
//                     marginBottom: '12px',
//                   }}
//                 >
//                   {highlightText}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={handleDownload}
//                 className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold theme-button transition duration-300 shadow-md uppercase tracking-wider"
//               >
//                 {buttonText}
//               </button>
//             </div>

//             {/* Image Showcase / Slider Container */}
//             {/* <div className="bulbRectContainer relative w-full hidden md:block">
//             {sliderImages && sliderImages.length > 0 && (
//               <div className="relative overflow-hidden rounded-2xl  ">
//                 <div className="bulbimg">
//                   {(() => {
//                     const currentImg = sliderImages[activeSlide]?.image
//                     const imgUrl = typeof currentImg === 'object' ? currentImg?.url : currentImg
//                     return (
//                       <img
//                         src={imgUrl || '/images/wireImages/Visit.jpg'}
//                         alt={sliderImages[activeSlide]?.altText || 'manifesto image'}
//                         className="w-full h-auto object-cover transition-all duration-500"
//                       />
//                     )
//                   })()}
//                 </div>

//                 {sliderImages.length > 1 && (
//                   <div className="flex justify-center gap-2 my-3">
//                     {sliderImages.map((_, idx) => (
//                       <button
//                         key={idx}
//                         type="button"
//                         onClick={() => setActiveSlide(idx)}
//                         className={`w-2.5 h-2.5 rounded-full transition-all ${
//                           activeSlide === idx ? 'bg-purple-700 w-6' : 'bg-gray-300'
//                         }`}
//                         aria-label={`Go to slide ${idx + 1}`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div> */}

//             {/* Image Showcase / Slider Container */}
//             <div className="bulbRectContainer relative w-full hidden md:block">
//               {sliderImages && sliderImages.length > 0 && (
//                 <Slider {...sliderSettings}>
//                   {sliderImages.map((item, index) => {
//                     const imageUrl = typeof item.image === 'string' ? item.image : item.image?.url

//                     return (
//                       <div className="bulbimg" key={item.id || index}>
//                         <img
//                           src={imageUrl || '/images/wireImages/Visit.jpg'}
//                           alt={item.altText || 'manifesto image'}
//                           className="w-full h-auto object-cover"
//                         />
//                       </div>
//                     )
//                   })}
//                 </Slider>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="block md:hidden manifestoslider">
//         {/* TOP IMAGE */}

//         <Slider {...mainSettings} ref={slider1}>
//           <div className="px-2">
//             <img
//               src="/images/menifestoSvg/bulb/Live.jpg"
//               alt=""
//               className="w-[300px] h-[500px]  rounded-xl"
//             />
//           </div>

//           <div className="px-2">
//             <img
//               src="/images/menifestoSvg/bulb/Innovate.jpg"
//               alt=""
//               className="w-[300px] h-[500px]  rounded-xl"
//             />
//           </div>

//           <div className="px-2">
//             <img
//               src="/images/menifestoSvg/bulb/Invest.jpg"
//               alt=""
//               className="w-[300px] h-[500px]  rounded-xl"
//             />
//           </div>

//           <div className="px-2">
//             <img
//               src="/images/menifestoSvg/bulb/Visit.jpg"
//               alt=""
//               className="w-[300px] h-[500px]  rounded-xl"
//             />
//           </div>

//           <div className="px-2">
//             <img
//               src="/images/menifestoSvg/bulb/work.jpg"
//               alt=""
//               className="w-[300px] h-[500px]  rounded-xl"
//             />
//           </div>
//         </Slider>

//         {/* BOTTOM AUTO SCROLL */}
//         <div className="mt-6">
//           <Slider {...thumbSettings} ref={slider2}>
//             <div className="px-2 p-5">
//               <img
//                 src="/images/menifestoSvg/live.svg"
//                 alt=""
//                 className="w-[300px] h-[400px]  rounded-xl"
//               />
//             </div>

//             <div className="px-2 p-5">
//               <img
//                 src="/images/menifestoSvg/inovate.svg"
//                 alt=""
//                 className="w-[300px] h-[400px]  rounded-xl"
//               />
//             </div>

//             <div className="px-2 p-5">
//               <img
//                 src="/images/menifestoSvg/invest.svg"
//                 alt=""
//                 className="w-[300px] h-[400px]  rounded-xl"
//               />
//             </div>

//             <div className="px-2">
//               <img
//                 src="/images/menifestoSvg/visit.svg"
//                 alt=""
//                 className="w-[300px] h-[400px]  rounded-xl"
//               />
//             </div>

//             <div className="px-2">
//               <img
//                 src="/images/menifestoSvg/work.svg"
//                 alt=""
//                 className="w-[300px] h-[400px]  rounded-xl"
//               />
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </>
//   )
// }

'use client'

import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type PayloadMedia = {
  url: string
  alt?: string
}

type SliderImageItem = {
  id?: string
  image: PayloadMedia | string
  altText?: string
  mobileSvg?: string // Optional property if you have separate SVG icons for mobile thumbnails
}

type ManifestoSectionProps = {
  topHeaderTitle?: string
  mainHeading?: string
  paragraph1?: string
  subHeading?: string
  paragraph2?: string
  highlightText?: string
  buttonText?: string
  sliderImages?: SliderImageItem[]
  onDownloadClick?: () => void
}

export default function ManifestoSectionComponent({
  topHeaderTitle = 'Manifesto in Your Hands',
  mainHeading = 'DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS',
  paragraph1 = 'The future of Chennai is shaped by the aspirations of its people. Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest.',
  subHeading = 'Live, Work, Visit, Innovate and Invest',
  paragraph2 = 'Suffice to say, incredible insights were collated. And they have been put together as a Manifesto on what the people wish for, from Super Chennai.',
  highlightText = 'Register your details to access and download the full manifesto.',
  buttonText = 'Download',
  sliderImages = [
    {
      image: '/images/wireImages/Visit.jpg',
      altText: 'visit',
      mobileSvg: '/images/menifestoSvg/visit.svg',
    },
    {
      image: '/images/wireImages/work.jpg',
      altText: 'work',
      mobileSvg: '/images/menifestoSvg/work.svg',
    },
    {
      image: '/images/wireImages/innovate.jpg',
      altText: 'innovate',
      mobileSvg: '/images/menifestoSvg/inovate.svg',
    },
    {
      image: '/images/wireImages/live.jpg',
      altText: 'live',
      mobileSvg: '/images/menifestoSvg/live.svg',
    },
    {
      image: '/images/wireImages/Invest.jpg',
      altText: 'invest',
      mobileSvg: '/images/menifestoSvg/invest.svg',
    },
  ],
  onDownloadClick,
}: ManifestoSectionProps) {
  const handleDownload = () => {
    if (onDownloadClick) {
      onDownloadClick()
    }
  }

  const [nav1, setNav1] = useState<Slider | null>(null)
  const [nav2, setNav2] = useState<Slider | null>(null)

  const slider1Ref = useRef<Slider | null>(null)
  const slider2Ref = useRef<Slider | null>(null)

  useEffect(() => {
    setNav1(slider1Ref.current)
    setNav2(slider2Ref.current)
  }, [])

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  const mainSettings = {
    arrows: false,
    fade: true,
    asNavFor: nav2 || undefined,
  }

  const thumbSettings = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    asNavFor: nav1 || undefined,
    arrows: false,
    centerMode: true,
  }

  return (
    <>
      <section className="mt-10 manifestoSection pb-20 relative manifestopage">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Top Header */}
          <div className="InvestChennaiContent-conclaves mb-8">
            <h3 className="text-center text-2xl md:text-3xl">{topHeaderTitle}</h3>
          </div>

          <div className="items-center relative">
            {/* Content Block */}
            <div className="text-center lg:text-left mb-8 lg:mb-0 relative md:absolute top-0 right-0 w-full md:w-[50%] z-[40] manifestowidth">
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                {mainHeading}
              </h2>

              {paragraph1 && (
                <p className="paraZeroVolunteerSection mb-4 text-gray-700 leading-relaxed text-sm sm:text-base manifestopara font-medium">
                  {paragraph1}
                </p>
              )}

              {subHeading && (
                <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl">
                  {subHeading}
                </h2>
              )}

              {paragraph2 && (
                <p className="text-gray-600 leading-relaxed mb-2 text-sm sm:text-base manifestopara font-medium">
                  {paragraph2}
                </p>
              )}

              {highlightText && (
                <p
                  className="themelink-color text-gray-600 leading-relaxed mb-6 text-sm sm:text-base manifestopara"
                  style={{
                    fontFamily: 'NewAmsterdam, sans-serif',
                    fontSize: '25px',
                    marginBottom: '12px',
                  }}
                >
                  {highlightText}
                </p>
              )}

              <button
                type="button"
                onClick={handleDownload}
                className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold theme-button transition duration-300 shadow-md uppercase tracking-wider"
              >
                {buttonText}
              </button>
            </div>

            {/* Desktop Image Showcase / Slider Container */}
            <div className="bulbRectContainer relative w-full hidden md:block">
              {sliderImages && sliderImages.length > 0 && (
                <Slider {...sliderSettings}>
                  {sliderImages.map((item, index) => {
                    const imageUrl = typeof item.image === 'string' ? item.image : item.image?.url

                    return (
                      <div className="bulbimg" key={item.id || index}>
                        <img
                          src={imageUrl || '/images/wireImages/Visit.jpg'}
                          alt={item.altText || 'manifesto image'}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )
                  })}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Slider */}
      <div className="block md:hidden manifestoslider">
        <Slider {...mainSettings} ref={slider1Ref}>
          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Live.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>

          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Innovate.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>

          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Invest.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>

          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/Visit.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>

          <div className="px-2">
            <img
              src="/images/menifestoSvg/bulb/work.jpg"
              alt=""
              className="w-[300px] h-[500px]  rounded-xl"
            />
          </div>
        </Slider>

        <div className="mt-6">
          <Slider {...thumbSettings} ref={slider2Ref}>
            {/* {sliderImages.map((item, index) => (
              <div className="px-2 p-5" key={`thumb-${item.id || index}`}>
                <img
                  src={
                    item.mobileSvg ||
                    (typeof item.image === 'string' ? item.image : item.image?.url)
                  }
                  alt=""
                  className="w-[300px] h-[400px] rounded-xl object-cover"
                />
              </div>
            ))} */}

            <div className="px-2 p-5">
              <img
                src="/images/menifestoSvg/live.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

            <div className="px-2 p-5">
              <img
                src="/images/menifestoSvg/inovate.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

            <div className="px-2 p-5">
              <img
                src="/images/menifestoSvg/invest.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

            <div className="px-2">
              <img
                src="/images/menifestoSvg/visit.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>

            <div className="px-2">
              <img
                src="/images/menifestoSvg/work.svg"
                alt=""
                className="w-[300px] h-[400px]  rounded-xl"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}
