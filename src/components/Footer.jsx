import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

// Social Media Icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
)

const XiaohongshuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
    <path d="M12 7v10"/>
    <path d="M7 9.5v5"/>
    <path d="M17 9.5v5"/>
  </svg>
)

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const footerLinks = {
    programs: [
      { label: t.footerLinkPrograms, path: '/programs' },
      { label: t.footerLinkGallery, path: '/gallery' },
      { label: t.footerLinkJournal, path: '/journal' },
    ],
    company: [
      { label: t.footerLinkAbout, path: '/about' },
      { label: t.footerLinkFAQ, path: '/faq' },
      { label: t.footerLinkContact, path: '/contact' },
    ]
  }

  const socialLinks = [
    { label: 'Instagram', icon: InstagramIcon, href: '#' },
    { label: 'YouTube', icon: YouTubeIcon, href: '#' },
    { label: 'TikTok', icon: TikTokIcon, href: '#' },
    { label: t.footerSocialXHS, icon: XiaohongshuIcon, href: '#' },
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-24">
        {/* Flex layout for columns */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
        }}>
          {/* Brand Column */}
          <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem', textDecoration: 'none' }}>
              <span style={{ 
                fontFamily: 'Bodoni Moda, Noto Serif SC, serif', 
                fontSize: '1.875rem', 
                fontWeight: 'bold',
                letterSpacing: '-0.025em',
                color: 'white'
              }}>
                MOFAN
              </span>
              <span style={{ 
                display: 'block', 
                fontSize: '0.75rem', 
                letterSpacing: '0.3em', 
                color: 'rgba(255,255,255,0.5)',
                marginTop: '0.25rem'
              }}>
                馍 范
              </span>
            </Link>
            <p style={{ 
              color: 'rgba(255,255,255,0.6)', 
              maxWidth: '24rem', 
              lineHeight: '1.75',
              marginBottom: '2rem'
            }}>
              {t.footerTagline}
            </p>
            {/* Social Links with Icons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    title={social.label}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00D9C0'
                      e.currentTarget.style.color = '#000'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    }}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns - Programs */}
          <div style={{ flex: '0 1 150px', minWidth: '120px' }}>
            <h4 style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.5rem'
            }}>
              {t.footerPrograms}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    style={{ 
                      fontSize: '0.875rem', 
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00D9C0'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Columns - Company */}
          <div style={{ flex: '0 1 150px', minWidth: '120px' }}>
            <h4 style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.5rem'
            }}>
              {t.footerCompany}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    style={{ 
                      fontSize: '0.875rem', 
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00D9C0'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div style={{ flex: '0 1 200px', minWidth: '160px' }}>
            <h4 style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.5rem'
            }}>
              {language === 'zh' ? '联系方式' : 'Contact'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
              <p style={{ margin: 0 }}>{t.contactEmail}</p>
              <p style={{ margin: 0 }}>{t.contactWechat}</p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{t.contactHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ 
          paddingTop: '1.5rem', 
          paddingBottom: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <p style={{ 
            fontSize: '0.75rem', 
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'Roboto Mono, monospace',
            margin: 0
          }}>
            {t.footerCopyright}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              {language === 'zh' ? '隐私政策' : 'Privacy'}
            </Link>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              {language === 'zh' ? '使用条款' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
