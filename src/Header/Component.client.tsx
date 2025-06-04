'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import MenuBar from '@/components/MenueBar'
import './style.css'

interface HeaderClientProps {
  data: Header
}

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

interface MenuContentBlock {
  id: string
  title: string
  desc: string
  link: string 
}

interface MenuLinkReferenceValue {
  id: number
  title: string
  slug: string
}

interface MenuLinkReference {
  relationTo: string // e.g. "pages"
  value: MenuLinkReferenceValue
}

interface MenuLink {
  type: string // "reference"
  newTab: boolean | null
  reference?: MenuLinkReference
  url?: string | null
  label: string
  content?: MenuContentBlock[]
}

interface NavItem {
  id: string
  link: MenuLink
}

interface MenuData {
  id: number
  navItems: NavItem[]
  updatedAt: string
  createdAt: string
  globalType: string
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuBar, setMenuBar] = useState(false)
  let menuTimeout: NodeJS.Timeout

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setMenuItems(
          (data?.navItems || []).map((item: any) => ({
            label: item.link.label,
            link: item.link.reference?.value?.slug
              ? `/${item.link.reference.value.slug}`
              : item.link.url || '#',
            content: Array.isArray(item?.link?.content)
              ? item.link.content.filter((block: any) => block.title && block.desc && block.link)
              : [],
          })),
        )
      } catch (error) {
        console.error('Failed to fetch menu items', error)
      }
    }
    console.log('headrt data', data)
    fetchMenuItems()
  }, [data])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuEnter = (item: MenuItem) => {
    clearTimeout(menuTimeout)
    setActiveMenu(item)
  }

  const handleMenuLeave = () => {
    menuTimeout = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  return (
    <div className="mainMegamenuContainers">
      <header className={`mainMegamenuContainer ${scrolled ? 'scrolled' : ''}`}>
        <nav className="Megamenunav" onMouseLeave={handleMenuLeave}>
          <div className={`Megamenutop-bar ${activeMenu ? 'activeStateMegamenu' : ''}`}>
            <Link href="/" className="Megamenulogo" aria-label="Home" />
            <div className="Megamenumenuicon md:hidden">
              <button
                className="Megamenumenuicon md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✖' : '☰'}
              </button>
            </div>

            <ul className="Megamenumenudesktop">
              {menuItems.map((item, i) => (
                <li key={i} className="Megamenumenuitem" onMouseEnter={() => handleMenuEnter(item)}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div
              style={{ cursor: 'pointer' }}
              className="Megamenulogo1 hidden md:block"
              onClick={() => setMenuBar(true)}
            >
              MENU
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeMenu && (
              <motion.div
                key={activeMenu.label}
                className="Newmegamenu hidden md:block show"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <motion.div
                  className="megamenuMainContainer"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  <div className="Newmegamenuinner">
                    {activeMenu.content.map((block, index) => (
                      <motion.div
                        key={index}
                        className="mega-link-wrapper"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={() => {
                          window.location.href = block.link
                          setActiveMenu(null)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <h4 className="mega-block-title">{block.title}</h4>
                        <p className="mega-block-desc">{block.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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
    </div>
  )
}
