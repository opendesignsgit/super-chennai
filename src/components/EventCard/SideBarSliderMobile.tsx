// 'use client'

// import React from 'react'
// import { X, SlidersHorizontal } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { EventsFilterSidebar } from './EventsFilterSidebar'

// type Category = {
//   id: string | number
//   title: string
// }

// type Language = {
//   label: string
//   value: string
// }

// interface SideBarSliderMobileProps {
//   open: boolean
//   onOpen?: () => void
//   onClose: () => void
//   categories?: Category[]
//   languages?: Language[]
// }

// export default function SideBarSliderMobile({
//   open,
//   onOpen,
//   onClose,
//   categories = [],
//   languages = [],
// }: SideBarSliderMobileProps) {
//   return (
//     <>
//       {/* Mobile Filter Toggle Button */}
//       <div className="flex justify-between items-center md:hidden sticky top-[150px] z-[60] bg-[#f4f5f7] py-2">
//         <button
//           onClick={onOpen}
//           className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-white bg-gradient-to-r from-[#a44294] to-[#701c67] shadow-lg active:scale-95 transition cursor-pointer"
//         >
//           <SlidersHorizontal className="w-4 h-4" />
//           Filters
//         </button>
//       </div>

//       {/* Drawer Overlay & Content */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             className="fixed inset-0 bg-black/50 z-[5021] flex justify-end md:hidden backdrop-blur-xs"
//             onClick={onClose}
//           >
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 300,
//                 damping: 30,
//               }}
//               className="bg-white w-4/5 sm:w-[320px] h-full shadow-2xl p-4 flex flex-col justify-between overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <motion.div
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.15, duration: 0.2 }}
//                 className="flex justify-between items-center pb-3 border-b border-gray-100 mb-2 shrink-0"
//               >
//                 <div className="flex items-center gap-2">
//                   <SlidersHorizontal className="w-4 h-4 text-[#a44294]" />
//                   <span className="font-bold text-gray-800 text-lg">Filters</span>
//                 </div>

//                 <button
//                   onClick={onClose}
//                   className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
//                   aria-label="Close Filters"
//                 >
//                   <X size={22} />
//                 </button>
//               </motion.div>

//               {/* Sidebar Content Body */}
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.25, duration: 0.3 }}
//                 className="flex-1 overflow-y-auto pr-1"
//               >
//                 <EventsFilterSidebar categories={categories} languages={languages} />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

'use client'

import React, { useState } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { EventFiltersSidebar } from './EventFilters'

type Category = {
  id: string | number
  title: string
}

type Language = {
  label: string
  value: string
}

interface SideBarSliderMobileProps {
  categories?: Category[]
  languages?: Language[]
}

export default function SideBarSliderMobile({
  categories = [],
  languages = [],
}: SideBarSliderMobileProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Filter Trigger Button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-white bg-gradient-to-r from-[#a44294] to-[#701c67] shadow-lg active:scale-95 transition cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Drawer Overlay & Mobile Animated Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/50 z-[5021] flex justify-end lg:hidden backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="bg-white w-4/5 sm:w-[320px] h-full shadow-2xl p-4 flex flex-col justify-between overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.2 }}
                className="flex justify-between items-center pb-3 border-b border-gray-100 mb-2 shrink-0"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#a44294]" />
                  <span className="font-bold text-gray-800 text-lg">Filters</span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Filters"
                >
                  <X size={22} />
                </button>
              </motion.div>

              {/* Mobile Filter Content */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="flex-1 overflow-y-auto pr-1"
              >
                <EventFiltersSidebar categories={categories} languages={languages} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
