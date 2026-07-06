// /* eslint-disable @next/next/no-img-element */
// import { Banner } from '@payloadcms/ui/elements/Banner'
// import React from 'react'

// // import { SeedButton } from './SeedButton'
// import './index.scss'
// import SearchBanner from '../../assets/images/AccodomationBannerr.jpg'

// const baseClass = 'before-dashboard'

// const BeforeDashboard: React.FC = () => {
//   return (
//     <div className={baseClass}>
//       <Banner className={`${baseClass}__banner`} type="success">
//         <h4>Welcome to your dashboard!</h4>
//       </Banner>
//       <div className="accaodomationBannerSection">
//         <div>
//           <img src={SearchBanner.src} alt="" />
//         </div>
//         <div className="accodoamationBannerContainer">
//           <div className="accodoamationBannerText">
//             <h3>Super Chennai</h3>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default BeforeDashboard

/* eslint-disable @next/next/no-img-element */



import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'
import './index.scss'
import SearchBanner from '../../assets/images/AccodomationBannerr.jpg'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      {/* Dynamic Upper Welcome Banner */}
      <Banner className={`${baseClass}__banner dynamic-welcome-banner`} type="success">
        <div className="banner-content-wrapper">
          <span className="pulse-indicator"></span>
          <h4>Welcome back! Your dashboard is fully loaded and active.</h4>
        </div>
      </Banner>

      {/* Advanced Hero Section */}
      <div className="accommodation-hero-wrapper">
        <div className="hero-image-pane">
          <img src={SearchBanner.src} alt="Chennai Dashboard Banner" className="hero-bg" />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="hero-content-overlay">
          <div className="hero-badge">WORKSPACE</div>
          <h1 className="hero-title">Super Chennai</h1>
          <p className="hero-subtitle">
            Manage your local neighborhoods, dynamic metrics, and configurations smoothly from one
            integrated workspace.
          </p>

          {/* Quick Metrics Analytics Row inside the banner */}
          <div className="hero-quick-stats">
            <div className="stat-pill">
              <span className="stat-dot green"></span>
              <span>CMS Engine v3.0</span>
            </div>
            <div className="stat-pill">
              <span className="stat-dot purple"></span>
              <span>Live Preview Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeDashboard
