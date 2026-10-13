// 'use client'

// import React from 'react'

// type DetailItem = {
//   id?: string
//   value: string
//   label: string
//   svgCode: string
// }

// type MetroTheDetailsProps = {
//   sectionTitle?: string
//   details?: DetailItem[]
// }

// export default function MetroTheDetailsComponent({
//   sectionTitle = 'THE DETAILS',
//   details = [
//     {
//       value: '21ST AUGUST 2024',
//       label: 'DATE',
//       svgCode: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
//     },
//     {
//       value: '11:00 PM - 12:30 AM',
//       label: 'TIME',
//       svgCode: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
//     },
//     {
//       value: 'ALANDUR METRO TO KOYAMBEDU METRO',
//       label: 'ROUTE',
//       svgCode: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
//     },
//     {
//       value: 'FREE ENTRY (REGISTRATION MANDATORY)',
//       label: 'ENTRY',
//       svgCode: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>`,
//     },
//   ],
// }: MetroTheDetailsProps) {
//   return (
//     <section className="bg-[#EDF4FC] py-12 px-4 rounded-xl my-8 font-sans mb-0">
//       <div className="max-w-7xl mx-auto">
//         {/* Title with decorative lines */}
//         <div className="flex items-center justify-center gap-4 mb-12">
//           <span className="w-8 h-[2px] bg-[#0A1B3D]"></span>
//           <h2 className="headingsection text-[#0A1B3D] text-2xl font-bold tracking-wide uppercase">
//             {sectionTitle}
//           </h2>
//           <span className="w-8 h-[2px] bg-[#0A1B3D]"></span>
//         </div>

//         {/* Details Timeline Row */}
//         <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl mx-auto">
//           {/* Connecting background line for desktop */}
//           <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-gray-300 z-0" />

//           {details?.map((item, index) => (
//             <div
//               key={item.id || index}
//               className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-2"
//             >
//               {/* Circle SVG Container */}
//               <div
//                 className="w-14 h-14 rounded-full bg-[#01236a] flex items-center justify-center shadow-md mb-4 ring-4 ring-slate-50 shrink-0 text-white [&>svg]:w-6 [&>svg]:h-6 [&>svg]:fill-current"
//                 dangerouslySetInnerHTML={{ __html: item.svgCode }}
//               />

//               {/* Value (Bold Main Text) */}
//               <h3 className="text-sm md:text-base font-semibold text-gray-900 uppercase leading-tight mb-1">
//                 {item.value}
//               </h3>

//               {/* Sub-label */}
//               <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'

type PayloadMedia = {
  url: string
  alt?: string
}

type DetailItem = {
  id?: string
  value: string
  label: string
  iconType?: string
  customIcon?: PayloadMedia | string
}

type MetroTheDetailsProps = {
  sectionTitle?: string
  details?: DetailItem[]
}

export default function MetroTheDetailsComponent({
  sectionTitle = 'THE DETAILS',
  details = [
    {
      value: '21ST AUGUST 2024',
      label: 'DATE',
      iconType: 'calendar',
    },
    {
      value: '11:00 PM - 12:30 AM',
      label: 'TIME',
      iconType: 'clock',
    },
    {
      value: 'ALANDUR METRO TO KOYAMBEDU METRO',
      label: 'ROUTE',
      iconType: 'location',
    },
    {
      value: 'FREE ENTRY (REGISTRATION MANDATORY)',
      label: 'ENTRY',
      iconType: 'ticket',
    },
  ],
}: MetroTheDetailsProps) {
  const renderIcon = (item: DetailItem) => {
    const customIconUrl =
      typeof item.customIcon === 'object' ? item.customIcon?.url : item.customIcon

    if (customIconUrl) {
      return (
        <img
          src={customIconUrl}
          alt={item.label}
          className="w-6 h-6 object-contain filter invert brightness-200"
        />
      )
    }

    switch (item.iconType) {
      case 'clock':
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case 'location':
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )
      case 'ticket':
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
        )
      case 'users':
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )
      case 'calendar':
      default:
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )
    }
  }

  return (
    <section className="bg-[#EDF4FC] py-12 px-4 rounded-xl my-8 font-sans mb-0 poppinsfamilyyy">
      <div className="max-w-7xl mx-auto">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="w-8 h-[2px] bg-[#0A1B3D]"></span>
          <h2 className="headingsection text-[#0A1B3D] text-2xl font-bold tracking-wide uppercase">
            {sectionTitle}
          </h2>
          <span className="w-8 h-[2px] bg-[#0A1B3D]"></span>
        </div>

        {/* Details Timeline Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl mx-auto">
          {/* Connecting background line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-gray-300 z-0" />

          {details?.map((item, index) => (
            <div
              key={item.id || index}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-2"
            >
              {/* Circle Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#01236a] flex items-center justify-center shadow-md mb-4 ring-4 ring-slate-50 shrink-0">
                {renderIcon(item)}
              </div>

              {/* Value (Bold Main Text) */}
              <h3 className="text-sm md:text-base font-semibold text-gray-900 uppercase leading-tight mb-1">
                {item.value}
              </h3>

              {/* Sub-label */}
              <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
