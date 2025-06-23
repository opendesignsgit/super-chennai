'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

type AccordionItem = {
  title: string
  link: string
}

type Props = {
  heading: string
  items: AccordionItem[]
}

const FooterAccordion: React.FC<Props> = ({ heading, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="SectionLeft firstsectionwidth">
      <h3 className="FooterHeading" onClick={() => setIsOpen(!isOpen)}>
        {heading}
        <span className="symbol">{isOpen ? '−' : '+'}</span>
      </h3>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="FooterSectionDiv"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div>
              {items.map((item, index) => (
                <Link href={item.link} key={index}>
                  <h5>{item.title}</h5>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FooterAccordion
