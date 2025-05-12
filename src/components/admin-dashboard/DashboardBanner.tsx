import { CustomComponent } from 'payload'
import React from 'react'
import parachuteImg from '../../public/images/super-chennai-logo-final.png'

const CustomDashboardBanner: CustomComponent = ({ _data }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.banner}>
        <div style={styles.logoSection}>
          <img src={parachuteImg.src} alt="Super Chennai Logo" style={styles.logo} />
        </div>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Welcome to Super Chennai Admin Dashboard</h1>
          <p style={styles.subheading}>
            👨‍💻 Your portal to managing all the content and users for Super Chennai.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  
  wrapper: {
    padding: '30px',
    background: 'linear-gradient(135deg, #ff6ec4, #7873f5)',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    marginBottom: '30px',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  logoSection: {
    flex: '0 0 auto',
  },
  logo: {
    width: '120px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  textSection: {
    flex: '1',
    minWidth: '200px',
  },
  heading: {
    fontSize: '26px',
    fontWeight: 700,
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '16px',
    opacity: 0.9,
  },
  
}

export default CustomDashboardBanner
