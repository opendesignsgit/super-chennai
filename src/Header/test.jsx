import { useState, useEffect } from 'react'
import '../assets/Css/ExampleHeader.css'
import MenuBar from './MenuBar'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    label: 'Live',
    labellink: '/live',
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
    label: 'Visit',
    labellink: '/visit',
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
    label: 'Work',
    labellink: '/work',
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
    label: 'Invest',
    labellink: '/invest',
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
    label: 'Innovate',
    labellink: '/Innovate',
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
    label: 'Volunteer',
    labellink: 'Volunteer',

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
]

const FullWidthHeaderMegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const [menuBar, setMenuBar] = useState(false)
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

  useEffect(() => {
    const hasNewMegaMenu = document.querySelector('.Newmegamenu') !== null
    setIsActive(hasNewMegaMenu)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    if (activeMenu) {
      const timer = setTimeout(() => setMenuVisible(true), 10) // Trigger .show class
      return () => clearTimeout(timer)
    } else {
      setMenuVisible(false) // Remove .show class immediately
    }
  }, [activeMenu])

  return (
    <>
      <div className="mainMegamenuContainer">
        <header className={`mainMegamenuContainer ${scrolled ? 'scrolled' : ''}`}>
          <nav
            className="Megamenunav"
            // onMouseLeave={() => setActiveMenu(null)}
            onMouseLeave={() => {
              setMenuVisible(false) // Start fade-out
              setTimeout(() => setActiveMenu(null), 300) // Delay unmount
            }}
          >
            <div className={`Megamenutop-bar ${activeMenu ? 'activeStateMegamenu' : ''}`}>
              <Link to="/">
                <div className="Megamenulogo"></div>
              </Link>

              <div className="Megamenumenuicon md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? '✖' : '☰'}
                </button>
              </div>

              <ul className="Megamenumenudesktop">
                {menuItems.map((item, i) => (
                  <Link to={item.labellink}>
                    <li
                      key={i}
                      className="Megamenumenuitem"
                      // onMouseEnter={() => setActiveMenu(item)}
                      onMouseEnter={() => {
                        setActiveMenu(item)
                        setMenuVisible(true)
                      }}
                    >
                      {item.label}
                      {/* <span className="menu-arrow">▼</span> */}
                    </li>
                  </Link>
                ))}
              </ul>

              <div
                style={{ cursor: 'pointer' }}
                className="Megamenulogo1 hidden md:block"
                onClick={() => setMenuBar(true)}
              >
                ||| MENU
              </div>
            </div>

            {activeMenu && (
              <div className={`Newmegamenu hidden md:block ${menuVisible ? 'show' : ''}`}>
                <div className="megamenuMainContainer">
                  <div className="Newmegamenuinner">
                    {activeMenu.content.map((block, index) => (
                      <Link to={block.link} key={index} className="mega-link-wrapper">
                        <h4 className="mega-block-title">{block.title}</h4>
                        <p className="mega-block-desc">{block.desc}</p>
                      </Link>
                    ))}
                  </div>
                  <img className="megamenuMainImage" src="./images/FirstSliderImage.png" alt="" />
                </div>
              </div>
            )}

            {mobileMenuOpen && (
              <div className="mobile-menu md:hidden">
                {menuItems.map((item, i) => (
                  <div key={i} className="mobile-section">
                    <Link to={item.labellink}>
                      <p className="mobile-title">{item.label}</p>
                    </Link>

                    <div className="mobile-content">
                      {item.content.map((block, j) => (
                        <Link to={block.link} key={j} className="mobile-link-wrapper">
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
        </header>

        <AnimatePresence>
          {menuBar && (
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: 'absolute', // Or fixed, depending on your layout
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
      </div>
    </>
  )
}

export default FullWidthHeaderMegaMenu
