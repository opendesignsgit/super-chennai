'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import config from '@payload-config'
import './style.css'
import { getPayload } from 'payload'
import { AnimatePresence, motion } from 'framer-motion'
import MenuBar from '@/components/MenueBar'
import firstSlideImage from './FirstSliderImage.png'

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
      label: 'LIVE',
      link: '/visits-chennai',
      content: [
        {
          title: 'Cost of living',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Residence - Property (Rent/Sale)',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Employment / Business Permits',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Transportation',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Healthcare',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Cultural / Religious attractions',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Recreation',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Safety',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Neighbourhood',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Quality of Life - both financially and environmentally',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Future Growth & Development (Chennai 2030) (media centre)',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
      ],
    },
    {
      label: 'VISIT',
      link: '/visit',
      content: [
        {
          title: 'Accomodation',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Food',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Things to do',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Itinerary',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Hidden Gems',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Shopping',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Travel Tips',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Wellness - Spa , Kyro centres , etc.,.',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Events',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Conferences / Business Seminars',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
      ],
    },
    {
      label: 'WORK',
      link: '/menu3',
      content: [
        {
          title: 'Employment - Job market (Tech,Automobile,Hospitals, etc.,.)',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Startups',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Unicorns',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Co-workingspaces',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'PG',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Salaries & Benefits',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Career Growth',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Networking',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Worklife balance',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
      ],
    },
    {
      label: 'INVEST',
      link: '/menu3',
      content: [
        {
          title: 'Realestate - both residential & commercial',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Franchise',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Startups',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Renewable Energy - Solar & Wind (spare parts related to that industry)',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Retire in chennai',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Government initiatives to help startups/entrepreneurs',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Formalities & Regulations',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: "NEWS - IPO's, NASSCOM etc",
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Events like CIA etc',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Exhibitions - Property ,Automobile , etc',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'API Integration',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
      ],
    },
    {
      label: 'INNOVATE',
      link: '/menu3',
      content: [
        {
          title: 'IT and Software Development',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Artificial Intelligence (AI) and Machine Learning (ML)',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Electric Vehicles (EVs) and Clean Technology',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Smart City Initiatives',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Healthcare Tech Innovations',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Robotics and Automation',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: 'Blockchain and Fintech',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Automotive Tech and R&D',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Education Tech',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
        {
          title: '3D Printing and Additive Manufacturing',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Augmented Reality (AR) and Virtual Reality (VR)',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'Agriculture Tech (Agri-Tech)',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
      ],
    },
    {
      label: 'VOLUNTEER',
      link: '/menu3',
      content: [
        {
          title: 'Web Development',
          desc: 'Modern websites & web apps',
          link: '/services/web',
        },
        {
          title: 'Mobile Apps',
          desc: 'iOS & Android solutions',
          link: '/services/mobile',
        },
        {
          title: 'API Integration',
          desc: 'Connect services seamlessly',
          link: '/services/api',
        },
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
        // const payload = await getPayload({ config })
        // const response = await payload.findGlobal({ slug: 'header' })

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
                <img className="megamenuMainImage" src={firstSlideImage.src} alt="First Slide" />
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
