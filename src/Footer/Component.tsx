/* eslint-disable @next/next/no-img-element */
import './style.css'
import defaultImage from '../assets/images/default/default.png'
import FooterAccordion from '@/components/FooterAccordion/FooterAccordion'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { FooterSections } from '@/models/footer'

//###################### THIS PROPER WAY TO GET FOOTER DATA DONT CHANGE GET DATA METHOD ############################

export default async function Footer() {
  try {
    const response = (await getCachedGlobal('footer', 1)()) as { footerSections: FooterSections }
    const footerSections = response?.footerSections as FooterSections
    const {
      topSectionLinks = [],
      socialLinks = [],
      mainFooterLogo,
      designByLogo,
      partnersLogo,
      bottomRightLogos = [],
      floatingActionWidgets = [],
    } = footerSections

    return (
      <>
        {/* ================= FIXED RIGHT-SIDE VERTICAL SOCIAL BAR ================= */}
        <div className="stickyIconsContainer">
          {socialLinks.map((social) => {
            const iconUrl =
              typeof social.icon === 'object' && social.icon?.url
                ? social.icon.url
                : defaultImage.src

            return (
              <a
                href={social.link?.startsWith('http') ? social.link : '#'}
                key={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="linkedin-sc"
              >
                <img
                  src={iconUrl}
                  alt={`${social.platform} Icon`}
                  // className="w-5 h-5 object-contain"
                />
              </a>
            )
          })}
        </div>

        {/* ================= FIXED BOTTOM-RIGHT CORNER (ARRATAI & WHATSAPP PACK) ================= */}
        {(bottomRightLogos.length > 0 || floatingActionWidgets.length > 0) && (
          <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-4 items-end max-w-[180px]">
            {/* A: Arratai / Event Logos */}
            {bottomRightLogos.length > 0 && (
              <div className="flex flex-col gap-2 items-end w-full">
                {bottomRightLogos.map((item: any, idx: number) => {
                  const imgUrl = item.logoImage?.url ?? defaultImage.src
                  const logoElement = (
                    <img
                      src={imgUrl}
                      alt={item.title}
                      className="h-20 w-auto max-w-[140px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  )

                  return item.websiteLink ? (
                    <a
                      href={item.websiteLink}
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.title}
                      className="block"
                    >
                      {logoElement}
                    </a>
                  ) : (
                    <div key={idx} title={item.title}>
                      {logoElement}
                    </div>
                  )
                })}
              </div>
            )}

            {/* B: WhatsApp / ChatBot Floating Widgets (Now properly aligned directly underneath) */}
            {floatingActionWidgets.length > 0 && (
              <div className="flex flex-col gap-3 items-end w-full">
                {floatingActionWidgets.map((widget: any, idx: number) => {
                  const widgetImgUrl = widget.iconImage?.url ?? defaultImage.src
                  return (
                    <a
                      key={idx}
                      href={widget.link}
                      target={widget.openInNewTab !== false ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      title={widget.title}
                      className="block transition-transform duration-300 hover:scale-110 drop-shadow-lg"
                    >
                      <img
                        src={widgetImgUrl}
                        alt={widget.title}
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ================= MAIN STRIP FOOTER ================= */}
        <footer className="FooterBackground w-full bg-900 text-white py-8">
          <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
            <div className="containerSection">
              {/*################ TOP GRID SYSTEM MOBILE AND DESKTOP############ */}
              {topSectionLinks.slice(0, 4).map((section) => (
                <FooterAccordion
                  key={section.category}
                  heading={section.category}
                  items={section.links.map(({ label, link }) => ({ title: label, link }))}
                />
              ))}
            </div>
          </div>

          <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
            <div className="containerSection">
              {/*################ TOP GRID SYSTEM MOBILE AND DESKTOP############ */}
              {topSectionLinks.slice(4, 7).map((section) => (
                <FooterAccordion
                  key={section.category}
                  heading={section.category}
                  items={section.links.map(({ label, link }) => ({ title: label, link }))}
                />
              ))}
            </div>
          </div>

          {/*############# BOTTOM SECTION SOCIAL MEDIA PARTNER COPY RIGHTS RESERVED DESIGN BY LOGO############ */}
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
                    {socialLinks.map((social) => {
                      const iconUrl =
                        typeof social.icon === 'object' && social.icon?.url
                          ? social.icon.url
                          : defaultImage.src

                      return (
                        <a
                          href={social.link?.startsWith('http') ? social.link : '#'}
                          key={social.platform}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.platform}
                        >
                          <img
                            src={iconUrl}
                            alt={`${social.platform} Icon`}
                            width={24}
                            height={24}
                          />
                        </a>
                      )
                    })}
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
      </>
    )
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return <footer className="py-8 text-center text-white bg-red-800">SOMETHING BROKEN !</footer>
  }
}
