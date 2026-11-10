'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'

type ContactSalesProps = {
  mainTitle?: string
  subtext?: string
  heroImage?: { url?: string } | string
}

export default function ContactSalesFormSection(props: ContactSalesProps) {
  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  const heroImgUrl = getImageUrl(props.heroImage, '/images/genz/man-genz.png')

  return (
    <section className="sc-form-section geznzzzz poppinsfamilyyy" id="contactform">
      <div className="sc-form-container container">
        {/* LEFT SIDE */}
        <div className="sc-form-branding">
          <h2 className="sc-form-main-title">
            {props.mainTitle ? (
              props.mainTitle.includes('COLLECTIVE') ? (
                <>
                  {props.mainTitle.replace('COLLECTIVE', '')}
                  <br />
                  <span className="sc-form-gradient-text">COLLECTIVE</span>
                </>
              ) : (
                props.mainTitle
              )
            ) : (
              <>
                JOIN THE
                <br />
                <span className="sc-form-gradient-text">COLLECTIVE</span>
              </>
            )}
          </h2>

          <div className="sc-form-squiggle"></div>

          <p className="sc-form-subtext">
            {props.subtext || (
              <>
                Submit your details and show us your Chennai through a 30-60 second reel.
                <strong> Auditions are officially open now.</strong>
              </>
            )}
          </p>

          <div className="sc-form-image-wrapper">
            <img src={heroImgUrl} alt="Creator with Camera" className="sc-form-hero-img" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* <div className="sc-form-card">
          <ToastContainer position="bottom-center" autoClose={3000} />
        </div> */}
      </div>
    </section>
  )
}
