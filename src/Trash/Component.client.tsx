// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// import type { Header } from '@/payload-types'

// import { Logo } from '@/components/Logo/Logo'
// import { HeaderNav } from './Nav'

// interface HeaderClientProps {
//   data: Header
// }

// export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
//   /* Storing the value in a useState to avoid hydration errors */
//   const [theme, setTheme] = useState<string | null>(null)
//   const { headerTheme, setHeaderTheme } = useHeaderTheme()
//   const pathname = usePathname()

//   useEffect(() => {
//     setHeaderTheme(null)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname])

//   useEffect(() => {
//     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [headerTheme])

//   return (
//     <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
//       <div className="py-8 flex justify-between">
//         <Link href="/">
//           <Logo loading="eager" priority="high" className="invert dark:invert-0" />
//         </Link>
//         <HeaderNav data={data} />
//       </div>
//     </header>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import config from '@payload-config'
import './style.css'
import { getPayload } from 'payload'
import { AnimatePresence, motion } from 'framer-motion'
import MenuBar from '@/components/MenueBar'

interface Block {
  title: string
  desc: string
  link: string
}

interface MenuItem {
  label: string
  link: string
  content: Block[]
}

// #######  MOCK MENUES  ########3
const response = {
  header: [
    {
      label: 'Menu 1',
      link: '/menu1',
      content: [
        { title: 'Submenu 1', desc: 'Description 1', link: '/submenu1' },
        { title: 'Submenu 2', desc: 'Description 2', link: '/submenu2' },
      ],
    },
    {
      label: 'Menu 2',
      link: '/menu2',
      content: [
        { title: 'Submenu 3', desc: 'Description 3', link: '/submenu3' },
        { title: 'Submenu 4', desc: 'Description 4', link: '/submenu4' },
      ],
    },
    {
      label: 'Menu 3',
      link: '/menu3',
      content: [
        { title: 'Submenu 5', desc: 'Description 5', link: '/submenu5' },
        { title: 'Submenu 6', desc: 'Description 6', link: '/submenu6' },
      ],
    },
  ],
}

const dropIn = {
  hidden: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    filter: 'blur(4px)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuBar, setMenuBar] = useState(false)

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const payload = await getPayload({ config })
        const response = await payload.findGlobal({ slug: 'header' })

        setMenuItems(
          (response?.header || []).map((item: any) => ({
            ...item,
            content: item.content
              ? item.content.filter((block: any) => block.title && block.desc && block.link)
              : [],
          })),
        )
      } catch (error) {
        console.error('Failed to fetch menu items', error)
      }
    }

    fetchMenuItems()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (activeMenu) {
      const timer = setTimeout(() => setMenuVisible(true), 10)
      return () => clearTimeout(timer)
    } else {
      setMenuVisible(false)
    }
  }, [activeMenu])

  return (
    <header className={`mainMegamenuContainer ${scrolled ? 'scrolled' : ''}`}>
      <nav
        className="Megamenunav"
        onMouseLeave={() => {
          setMenuVisible(false)
          setTimeout(() => setActiveMenu(null), 300)
        }}
      >
        <div className={`Megamenutop-bar ${activeMenu ? 'activeStateMegamenu' : ''}`}>
          <Link href="/" className="Megamenulogo"></Link>

          <button
            className="Megamenumenuicon md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✖' : '☰'}
          </button>

          <ul className="Megamenumenudesktop">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="Megamenumenuitem"
                onMouseEnter={() => {
                  setActiveMenu(item)
                  setMenuVisible(true)
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div
            style={{ cursor: 'pointer' }}
            className="Megamenulogo1 hidden md:block"
            onClick={() => setMenuBar(true)}
          >
            ||| MENU
          </div>
          {activeMenu && (
            <div className={`Newmegamenu hidden md:block ${menuVisible ? 'show' : ''}`}>
              <div className="megamenuMainContainer">
                <div className="Newmegamenuinner">
                  {activeMenu.content.map((block, index) => (
                    <Link key={index} href={block.link} className="mega-link-wrapper">
                      <h4 className="mega-block-title">{block.title}</h4>
                      <p className="mega-block-desc">{block.desc}</p>
                    </Link>
                  ))}
                </div>
                <img className="megamenuMainImage" src="./FirstSliderImage.png" alt="" />
              </div>
            </div>
          )}

          {mobileMenuOpen && (
            <div className="mobile-menu md:hidden">
              {menuItems.map((item, i) => (
                <div key={i} className="mobile-section">
                  <Link href={item.link}>
                    <p className="mobile-title">{item.label}</p>
                  </Link>
                  <div className="mobile-content">
                    {item.content.map((block, j) => (
                      <Link key={j} href={block.link} className="mobile-link-wrapper">
                        <p className="mobile-subtitle">{block.title}</p>
                        <p className="mobile-subdesc">{block.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {menuBar && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 100000000,
            }}
          >
            <MenuBar setMenuBar={setMenuBar} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
