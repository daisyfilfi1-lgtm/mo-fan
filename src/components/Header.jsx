import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const location = useLocation()

  // Handle scroll behavior
  useEffect(() => {
    let lastScroll = 0
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      
      // Add background when scrolled
      setIsScrolled(currentScroll > 50)
      
      // Hide/show nav based on scroll direction
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      
      lastScroll = currentScroll
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/programs', label: t.programs },
    { path: '/about', label: t.about },
    { path: '/journal', label: t.journal },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: isHidden ? '-80px' : 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          transition: 'all 0.5s',
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1, textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Bodoni Moda, serif', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.025em', color: isScrolled ? 'black' : 'black' }}>
              MOFAN
            </span>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#6b7280', marginTop: '0.125rem' }}>
              馍 范
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  position: 'relative',
                  fontSize: '0.75rem',
                  fontFamily: 'Roboto Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  transition: 'color 0.3s',
                  color: isActive(link.path) ? '#00D9C0' : '#4b5563'
                }}
                onMouseEnter={(e) => !isActive(link.path) && (e.target.style.color = 'black')}
                onMouseLeave={(e) => !isActive(link.path) && (e.target.style.color = '#4b5563')}
              >
                {link.label}
                {isActive(link.path) && (
                  <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '1px', backgroundColor: '#00D9C0' }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Language Toggle - Desktop */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex"
              style={{ alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'Roboto Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ fontWeight: language === 'zh' ? 500 : 400, color: language === 'zh' ? 'black' : '#6b7280' }}>CN</span>
              <span style={{ color: '#d1d5db' }}>/</span>
              <span style={{ fontWeight: language === 'en' ? 500 : 400, color: language === 'en' ? 'black' : '#6b7280' }}>EN</span>
            </button>

            {/* CTA Button - Desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-flex"
              style={{ 
                alignItems: 'center', 
                padding: '0.625rem 1.5rem', 
                backgroundColor: 'black', 
                color: 'white', 
                fontSize: '0.75rem', 
                fontFamily: 'Roboto Mono, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#00D9C0'
                e.target.style.color = 'black'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'black'
                e.target.style.color = 'white'
              }}
            >
              {t.contact}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              style={{ width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle menu"
            >
              <div style={{ position: 'relative', width: '1.5rem', height: '1rem' }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: 'black', 
                  transition: 'all 0.3s',
                  top: isMenuOpen ? '50%' : 0,
                  transform: isMenuOpen ? 'rotate(45deg)' : 'none'
                }} />
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: 'black', 
                  transition: 'all 0.3s',
                  opacity: isMenuOpen ? 0 : 1
                }} />
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: 'black', 
                  transition: 'all 0.3s',
                  top: isMenuOpen ? '50%' : '100%',
                  transform: isMenuOpen ? 'rotate(-45deg)' : 'none'
                }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          backgroundColor: 'white',
          transition: 'all 0.5s',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
      >
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Mobile Nav Links */}
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {[...navLinks, { path: '/gallery', label: t.gallery }, { path: '/faq', label: t.faq }, { path: '/contact', label: t.contact }].map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ 
                  padding: '1rem 0', 
                  borderBottom: '1px solid #f3f4f6',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.4s ease ${index * 50}ms`
                }}
              >
                <span className="text-display" style={{ fontSize: '1.875rem' }}>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div style={{ paddingTop: '2rem', borderTop: '1px solid #f3f4f6' }}>
            <button
              onClick={toggleLanguage}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontFamily: 'Roboto Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ fontWeight: language === 'zh' ? 500 : 400, color: language === 'zh' ? 'black' : '#6b7280' }}>中文</span>
              <span style={{ width: '2rem', height: '1px', backgroundColor: '#d1d5db' }} />
              <span style={{ fontWeight: language === 'en' ? 500 : 400, color: language === 'en' ? 'black' : '#6b7280' }}>English</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
