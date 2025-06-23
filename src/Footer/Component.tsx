/* eslint-disable @next/next/no-img-element */
import config from 'src/payload.config'
import { getPayload } from 'payload'
import './style.css'
import defaultImage from '../assets/images/default/default.png'
import FooterAccordion from '@/components/FooterAccordion/FooterAccordion'

type LinkItem = {
  label: string
  link: string
}

type TopSectionLink = {
  category: string
  links: LinkItem[]
}

type SocialLink = {
  platform: string
  link: string
  icon?: {
    url?: string
  }
}

type FooterSections = {
  topSectionLinks?: TopSectionLink[]
  socialLinks?: SocialLink[]
  mainFooterLogo?: {
    url?: string
    alt?: string
  }
  designByLogo?: {
    url?: string
    alt?: string
  }
  partnersLogo?: {
    url?: string
    alt?: string
  }
}

export default async function Footer() {
  try {
    const payload = await getPayload({ config })
    const response = await payload.findGlobal({ slug: 'footer' })
    const footerSections = response?.footerSections as FooterSections
    const {
      topSectionLinks = [],
      socialLinks = [],
      mainFooterLogo,
      designByLogo,
      partnersLogo,
    } = footerSections

    return (
      <footer className="FooterBackground w-full bg-900 text-white py-8">
        <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
          <div className="containerSection">
            {topSectionLinks.map((section) => (
              <FooterAccordion
                key={section.category}
                heading={section.category}
                items={section.links.map(({ label, link }) => ({ title: label, link }))}
              />
            ))}
            {/* 
            {topSectionLinks.map((section) => (
              <div key={section.category} className="SectionLeft firstsectionwidth">
                <h3 className="FooterHeading">{section.category}</h3>

                <div className="FooterSectionDiv">
                  <div>
                    {section.links.slice(0, 13).map((item, index) => (
                      <a href={item.link} key={index}>
                        <h5>{item.label}</h5>
                      </a>
                    ))}
                  </div>
                  <div>
                    {section.links.slice(13, 26).map((item, index) => (
                      <a href={item.link} key={index + 13}>
                        <h5>{item.label}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        <div className="SectionConatinerSecond1 max-w-7xl mx-auto px-4">
          <div className="footermainsection flex justify-between items-center">
            <div className="LogoandFollow flex items-center">
              <div>
                <img
                  src={mainFooterLogo?.url ?? defaultImage.src}
                  alt={mainFooterLogo?.alt ?? 'Super Chennai Logo'}
                  width={150}
                  height={40}
                />
              </div>
              <div className="followUs ml-6">
                <h3>Follow Us</h3>
                <div className="iconsFlex flex gap-4 mt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.link?.startsWith('http') ? social.link : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                    >
                      <img src={social.icon?.url ?? defaultImage.src} alt={social.platform} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="credaiLogo">
              <img
                src={partnersLogo?.url ?? defaultImage.src}
                alt="Partner Logo"
                width={120}
                height={40}
              />
            </div>

            <div className="copyrights text-right">
              <h5>
                @ 2025 <span>Super Chennai</span>
              </h5>
              <h5>All Rights Reserved.</h5>
              <div className="designBy mt-4">
                <h5>Design By</h5>
                <img src={designByLogo?.url ?? defaultImage.src} alt="Designer Logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return <footer className="py-8 text-center text-white bg-red-800">SOMETHING BROKEN</footer>
  }
}
