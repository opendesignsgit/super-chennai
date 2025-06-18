/* eslint-disable @next/next/no-img-element */
'use client'

import MenuBar from '@/components/MenueBar'
import type { Header } from '@/payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useRouter } from 'next/navigation'
//######################## ASSETS  #############################################
import iconEmail from '../assets/images/HomePage-Images/Icons/mobile-Header-Email.svg'
import iconEvents from '../assets/images/HomePage-Images/Icons/mobile-Header-Events.svg'
import iconHamburger from '../assets/images/HomePage-Images/Icons/mobile-Header-Hamburger.svg'
import iconSearch from '../assets/images/HomePage-Images/Icons/mobile-Header-Search.svg'
import logoSuperChennai from '../assets/images/HomePage-Images/Superchennai.png'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'

//######################## TYPES  #############################################

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
  contentImage?: {
    filename: string
    mimeType: string
    url?: string
  }
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  //##################### STATE  ##############################################
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuBar, setMenuBar] = useState(false)
  const [searchForm, setSearchForm] = useState(false)
  const router = useRouter()
  //##################### TIMEOUT  ############################################
  let menuTimeout: NodeJS.Timeout

  //##################### INITIALIZATION #######################################
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
            contentImage: item?.link?.contentImage
              ? {
                  filename: item.link.contentImage.filename,
                  mimeType: item.link.contentImage.mimeType,
                  url: `/media/${item.link.contentImage.filename}`,
                }
              : undefined,
          })),
        )
      } catch (error) {
        console.error('Failed to fetch menu items', error)
      }
    }

    fetchMenuItems()
  }, [data])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  //############################# HELPER FUNCTIONS ###############################
  const handleMenuEnter = (item: MenuItem) => {
    clearTimeout(menuTimeout)
    setActiveMenu(item)
  }

  const handleMenuLeave = () => {
    menuTimeout = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  const handleScrollToSearchForm = () => {
    const element = document.getElementById('SearchForm')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  //#################### RENDER UI#################################################
  return (
    <div className="mainMegamenuContainers">
      <header className={`mainMegamenuContainer ${scrolled ? 'scrolled' : ''}`}>
        {/*#################### DESKTOP MENUE NAVBAR ########################### */}
        <nav className="Megamenunav HomePageStyle" onMouseLeave={handleMenuLeave}>
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
          {/*#################### HOVER MENUE  #################################### */}

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
                          const linkPath = block.link.startsWith('/')
                            ? block.link
                            : `/${block.link}`
                          router.push(linkPath)
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
                  {activeMenu?.contentImage?.url && (
                    <img
                      className="megamenuMainImage"
                      src={activeMenu.contentImage.url}
                      alt="Menu Content"
                    />
                  )}
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

        {/*#################### MOBILE MENUE NAVBAR ############################## */}

        <div className="Mobileheader">
          <div className="mobilesvgSize">
            <img src={iconEvents.src} alt="Events Icon" />
          </div>
          <div className="mobilesvgSize">
            <img src={iconEmail.src} alt="Email Icon" />
          </div>
          <div className="mobilesvgSize">
            <Link href="/.">
              <img src={logoSuperChennai.src} alt="Super Chennai Logo" />
            </Link>
          </div>
          <div className="mobilesvgSize" onClick={handleScrollToSearchForm}>
            <img
              src={iconSearch.src}
              alt="Search Icon"
              onClick={() => setSearchForm(true)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="mobilesvgSize">
            <img
              src={iconHamburger.src}
              alt="Hamburger Menu Icon"
              onClick={() => setMenuBar(true)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        {/*#################### DESKTOP MENUE HAMBURGER ########################### */}

        <AnimatePresence>
          {menuBar && (
            <motion.div
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

        {/*#################### MOBILE MENUE HAMBURGER ########################### */}

        <AnimatePresence>
          {searchForm && (
            <motion.div
              className="mobileSearchSectionsRow"
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
              <GlobalSearch placeholderText="" buttonText="" onClose={() => setSearchForm(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}
