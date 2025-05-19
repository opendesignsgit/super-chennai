import './style.css'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import CloseIcon from '../../public/images/menuBarCloseButton.png'
import logo from '../../public/images/super-chennai-logo-final-header.png'
export default function MenuBar({ setMenuBar }: { setMenuBar: Dispatch<SetStateAction<boolean>> }) {
  const menuItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Career', href: '/career' },
    { label: 'Events', href: '/events' },
    { label: 'Social Chennai', href: '/social-chennai' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Sustainability', href: '/sustainability' },
  ]
  return (
    <>
      <div className="menuBarFullContainer">
        <div className="menuBarFullFirstSection"></div>

        <div className="menuBarFullSecondSection">
          <div className="closeButtonMenubar">
            <Image src={logo} alt="" />
            <Image onClick={() => setMenuBar(false)} src={CloseIcon} alt="" />
          </div>

          <div>
            <ul className="menuBarLinksContent">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
