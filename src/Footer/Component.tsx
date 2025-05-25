// import { getCachedGlobal } from '@/utilities/getGlobals'
// import Link from 'next/link'
// import React from 'react'

// import type { Footer } from '@/payload-types'

// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
// import { CMSLink } from '@/components/Link'
// import { Logo } from '@/components/Logo/Logo'

// export async function Footer() {
//   const footerData: Footer = await getCachedGlobal('footer', 1)()

//   const navItems = footerData?.navItems || []

//   return (
//     <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
//       <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
//         <Link className="flex items-center" href="/">
//           <Logo />
//         </Link>

//         <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
//           <ThemeSelector />
//           <nav className="flex flex-col md:flex-row gap-4">
//             {navItems.map(({ link }, i) => {
//               return <CMSLink className="text-white" key={i} {...link} />
//             })}
//           </nav>
//         </div>
//       </div>
//     </footer>
//   )
// }

import config from '@payload-config'
import React from 'react'
import { getPayload } from 'payload'
import Link from 'next/link'
import './style.css'

export default async function Footer() {
  try {
    const payload = await getPayload({ config })
    const response = await payload.findGlobal({ slug: 'footer' })
    const footerSections = response?.footerSections || {}
    const { socialLinks = [], ...linkSections } = footerSections

    // console.log('------------', footerSections)

    const digitalChennaiLinks = footerSections.digitalChennaiLinks || []
    const socialChennaiLinks = footerSections.socialChennaiLinks || []
    const funChennaiLinks = footerSections.funChennaiLinks || []
    const startupChennaiLinks = footerSections.startupChennaiLinks || []
    const foodieChennaiLinks = footerSections.foodieChennaiLinks || []
    const techChennaiLinks = footerSections.techChennaiLinks || []
    // ###### SECOND SECTIONS CALLS ############
    const creativeChennaiLinks = footerSections.creativeChennaiLinks || []
    const businessChennaiLinks1 = footerSections.businessChennaiLinks || []
    const networkChennaiLinks = footerSections.networkChennaiLinks || []
    const usefulLinks = footerSections.usefulLinks || []

    return (
      <footer className="FooterBackground w-full bg-900 text-white py-8">
        <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
          <div className="containerSection">
            <div className="SectionLeft firstsectionwidth">
              <h3 className="FooterHeading">Digital Chennai</h3>
              <div className="FooterSectionDiv">
                <div>
                  {digitalChennaiLinks.slice(0, 13).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.label}</h5>
                    </a>
                  ))}
                </div>
                <div>
                  {digitalChennaiLinks.slice(13, 26).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.label}</h5>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="SectionLeft firstsectionwidth">
              <h3 className="FooterHeading">Social Chennai</h3>
              <div className="FooterSectionDiv">
                <div>
                  {socialChennaiLinks.slice(0, 13).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                </div>
                <div>
                  {socialChennaiLinks.slice(13, 26).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.title}</h5>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footerthirdSection">
              <div className="SectionLeft">
                <h3 className="FooterHeading">Fun Chennai</h3>
                <div className="FooterSectionDiv">
                  <div>
                    {funChennaiLinks.slice(0, 5).map((item, index) => (
                      <a href={item.link} key={index}>
                        <h5>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="SectionLeft">
                <h3 className="FooterHeading">Startup Chennai</h3>
                <div className="FooterSectionDiv">
                  <div>
                    {startupChennaiLinks.slice(0, 5).map((item, index) => (
                      <a href={item.link} key={index}>
                        <h5>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Foodie and Tech Chennai */}
            <div className="footerthirdSection">
              <div className="SectionLeft">
                <h3 className="FooterHeading">Foodie Chennai</h3>
                <div className="FooterSectionDiv">
                  <div>
                    {foodieChennaiLinks.slice(0, 10).map((item, index) => (
                      <a href={item.link} key={index}>
                        <h5>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* TECH chennai*/}

              <div className="SectionLeft">
                <h3 className="FooterHeading">Tech Chennai</h3>
                <div className="FooterSectionDiv">
                  <div>
                    {techChennaiLinks.slice(0, 10).map((item, index) => (
                      <a href={item.link} key={index}>
                        <h5>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
          <div className="containerSection ">
            {/* Creative Chennai Section */}
            <div className="SectionLeft firstsectionwidth">
              <h3 className="FooterHeading">CREATIVE CHENNAI</h3>
              <div className="FooterSectionDiv ">
                <div>
                  {creativeChennaiLinks.slice(0, 10).map((link, index) => (
                    <h5 key={link.id || index}>
                      <Link href={link.link || '#'}>{link.label || link.label}</Link>
                    </h5>
                  ))}
                </div>
              </div>
            </div>
            {/* Business Chennai Section */}
            <div className="SectionLeft firstsectionwidth">
              <h3 className="FooterHeading">BUSINESS CHENNAI</h3>
              <div className="FooterSectionDiv">
                <div>
                  {businessChennaiLinks1.slice(0, 10).map((link, index) => (
                    <h5 key={link.id || index}>
                      <Link href={link.link || '#'}>{link.label}</Link>
                    </h5>
                  ))}
                </div>
              </div>
            </div>

            {/* Network Chennai Section */}
            <div className="SectionLeft firstsectionwidth">
              <h3 className="FooterHeading">NETWORK CHENNAI</h3>
              <div className="FooterSectionDiv grid grid-cols-2 gap-4">
                <div>
                  {networkChennaiLinks.slice(0, 10).map((link, index) => (
                    <h5 key={link.id || index}>
                      <Link href={link.link || '#'}>{link.label}</Link>
                    </h5>
                  ))}
                </div>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="SectionLeft firstsectionwidth">
              <h3 className="FooterHeading">USEFUL LINKS</h3>
              <div className="FooterSectionDiv grid grid-cols-2 gap-4">
                <div>
                  {usefulLinks.slice(0, 10).map((link, index) => (
                    <h5 key={link.id || index}>
                      <Link href={link.link || '#'}>{link.label}</Link>
                    </h5>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="SectionConatinerSecond1 max-w-7xl mx-auto px-4">
          <div className="footermainsection flex justify-between items-center">
            <div className="LogoandFollow flex items-center">
              <div>
                <img
                  src={
                    footerSections?.mainFooterLogo?.url || '/images/super-chennai-logo-final.png'
                  }
                  alt={footerSections?.mainFooterLogo?.alt || 'Super Chennai Logo'}
                />
              </div>
              <div className="followUs ml-6">
                <h3>Follow Us</h3>
                <div className="iconsFlex flex gap-4 mt-2">
                  {footerSections?.socialLinks?.map((social) => (
                    <a
                      key={social.id}
                      href={social.link.startsWith('http') ? social.link : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                    >
                      <img
                        src={social?.icon?.url || '/images/default-icon.png'}
                        alt={social?.icon?.alt || social.platform}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="copyrights text-right">
              <h5>
                @ 2025 <span>Super Chennai</span>
              </h5>
              <h5>All Rights Reserved.</h5>
              <div className="designBy mt-4">
                <h5>Design By</h5>
                <img
                  src={footerSections?.designByLogo?.url || '../../images/threads.png'}
                  alt="Designer Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return <footer className="py-8 text-center text-white bg-red-800">SOMTHING BROKEN</footer>
  }
}
