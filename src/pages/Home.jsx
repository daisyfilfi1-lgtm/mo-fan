import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { heroImages, courseImages } from '../utils/images'

const Home = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* ==========================================================================
          HERO SECTION - Business Success Focus
          ========================================================================== */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        backgroundColor: '#111827'
      }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#1f2937' }}>
          <img
            src={heroImages.main}
            alt="Mantou business success"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              filter: 'saturate(1.1) contrast(1.05) brightness(0.85)'
            }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent)' 
          }} />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.2))' 
          }} />
        </div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '48rem' }}>
            {/* Label */}
            <div className="reveal-element" ref={addToRefs} style={{ marginBottom: '2rem' }}>
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#00D9C0',
                color: 'black',
                fontSize: '0.75rem',
                fontFamily: 'Roboto Mono, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 500
              }}>
                {t.trustLabel}
              </span>
            </div>

            {/* Main Headline - Optimized for Chinese typography */}
            <h1 className="reveal-element" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              {/* Chinese Title - Better line break control */}
              <span style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                color: 'white',
                display: 'block',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
                letterSpacing: '0.05em',
                filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))'
              }}>
                {language === 'zh' ? (
                  <>
                    <span style={{ display: 'block' }}>让中式面点</span>
                    <span style={{ display: 'block' }}>成为全球生意</span>
                  </>
                ) : t.heroTitle}
              </span>
              {/* English Subtitle */}
              <span style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontFamily: 'Bodoni Moda, serif',
                color: '#00D9C0',
                display: 'block',
                fontWeight: 'normal',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.04))'
              }}>
                {language === 'zh' ? 'A Taste of China, Shared with the World' : t.heroTitleSub}
              </span>
            </h1>

            {/* Description */}
            <p 
              className="reveal-element"
              ref={addToRefs}
              style={{ 
                transitionDelay: '0.2s',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: 'rgba(255,255,255,0.8)',
                marginTop: '2.5rem',
                maxWidth: '36rem',
                lineHeight: '1.75'
              }}
            >
              {t.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div 
              className="reveal-element"
              ref={addToRefs}
              style={{ 
                transitionDelay: '0.3s',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '3rem'
              }}
            >
              <Link to="/programs" className="btn btn-primary" style={{ fontSize: '0.875rem' }}>
                {t.joinNow}
              </Link>
              <Link to="/about" className="btn btn-outline-light" style={{ fontSize: '0.875rem' }}>
                {t.readStory}
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="reveal-element"
              ref={addToRefs}
              style={{ 
                transitionDelay: '0.4s',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginTop: '5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {[
                { value: t.trust1, label: t.trust1Label },
                { value: t.trust2, label: t.trust2Label },
                { value: t.trust3, label: t.trust3Label },
                { value: t.trust4, label: t.trust4Label },
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: 'left' }}>
                  <div style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                    fontFamily: 'Bodoni Moda, serif',
                    fontWeight: 'bold',
                    color: '#00D9C0'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem',
                    fontFamily: 'Roboto Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: '0.5rem'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ 
          position: 'absolute', 
          bottom: '2.5rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'Roboto Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.3em' }}>{t.scrollExplore}</span>
          <div style={{ width: '1px', height: '4rem', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
        </div>
      </section>

      {/* ==========================================================================
          SOLUTIONS SECTION - Three Pillars
          ========================================================================== */}
      <section className="section" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
        <div className="container">
          {/* Section Header */}
          <div className="reveal-element" ref={addToRefs} style={{ marginBottom: '5rem' }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              color: '#00D9C0',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              display: 'block',
              marginBottom: '1.5rem'
            }}>
              {t.solutionsSubtitle}
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Bodoni Moda, serif', maxWidth: '42rem' }}>
              {t.solutionsTitle}
            </h2>
          </div>

          {/* Three Pillars - Clean Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem'
          }}>
            {[
              {
                num: '01',
                title: t.solution1,
                subtitle: t.solution1Title,
                desc: t.solution1Desc,
                highlight: t.solution1Highlight
              },
              {
                num: '02',
                title: t.solution2,
                subtitle: t.solution2Title,
                desc: t.solution2Desc,
                highlight: t.solution2Highlight
              },
              {
                num: '03',
                title: t.solution3,
                subtitle: t.solution3Title,
                desc: t.solution3Desc,
                highlight: t.solution3Highlight
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="reveal-element"
                ref={addToRefs}
                style={{ 
                  transitionDelay: `${index * 0.15}s`,
                  padding: '2.5rem',
                  backgroundColor: '#252525',
                  borderRadius: '4px',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span style={{
                  fontSize: 'clamp(3rem, 6vw, 4rem)',
                  fontFamily: 'Bodoni Moda, serif',
                  color: '#00D9C0',
                  opacity: 0.3,
                  display: 'block',
                  marginBottom: '1rem'
                }}>
                  {item.num}
                </span>
                
                <h3 style={{ 
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  fontFamily: 'Bodoni Moda, serif',
                  marginBottom: '0.5rem'
                }}>{item.title}</h3>
                
                <span style={{ 
                  fontSize: '0.75rem',
                  fontFamily: 'Roboto Mono, monospace',
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '1.5rem'
                }}>{item.subtitle}</span>
                
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.75', marginBottom: '2rem' }}>
                  {item.desc}
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '2rem', height: '2px', backgroundColor: '#00D9C0' }} />
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'Roboto Mono, monospace',
                    color: '#00D9C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          PROGRAMS SECTION - Course Cards
          ========================================================================== */}
      <section className="section">
        <div className="container">
          {/* Section Header */}
          <div className="reveal-element" ref={addToRefs} style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '4rem'
          }}>
            <div>
              <span style={{ 
                fontSize: '0.75rem', 
                fontFamily: 'Roboto Mono, monospace',
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                display: 'block',
                marginBottom: '1rem'
              }}>
                Programs
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Bodoni Moda, serif' }}>
                {t.programsTitle}
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#6b7280', 
                marginTop: '1rem', 
                maxWidth: '36rem',
                lineHeight: '1.75'
              }}>
                {t.programsSubtitle}
              </p>
            </div>
            <Link 
              to="/programs" 
              className="btn btn-outline" 
              style={{ marginTop: '2rem' }}
            >
              {language === 'zh' ? '查看全部' : 'View All'}
            </Link>
          </div>

          {/* Course Cards - Bento Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem'
          }}>
            {/* Course 1 - Takes 4 columns */}
            <div 
              className="reveal-element md:col-span-4" 
              ref={addToRefs}
              style={{ gridColumn: 'span 12' }}
            >
              <div style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                height: '500px'
              }}>
                <img
                  src={courseImages.foundation}
                  alt={t.course1Title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                }} />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  padding: '1.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end' 
                }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'Roboto Mono, monospace',
                    color: '#00D9C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem'
                  }}>
                    {t.course1Name}
                  </span>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontFamily: 'Bodoni Moda, serif', 
                    color: 'white', 
                    marginBottom: '0.5rem' 
                  }}>
                    {t.course1Title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {t.course1Desc}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    paddingTop: '1rem', 
                    borderTop: '1px solid rgba(255,255,255,0.2)' 
                  }}>
                    <span style={{ 
                      fontSize: '1.5rem', 
                      fontFamily: 'Bodoni Moda, serif', 
                      color: 'white' 
                    }}>
                      {t.course1Price}
                    </span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontFamily: 'Roboto Mono, monospace', 
                      color: 'rgba(255,255,255,0.5)' 
                    }}>
                      {t.course1Duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 - Takes 8 columns */}
            <div 
              className="reveal-element md:col-span-8" 
              ref={addToRefs}
              style={{ gridColumn: 'span 12', transitionDelay: '0.1s' }}
            >
              <div style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                backgroundColor: '#111827', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                height: '500px'
              }}>
                <img
                  src={courseImages.professional}
                  alt={t.course2Title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
                }} />
                
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                  <span style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#00D9C0',
                    color: 'black',
                    fontSize: '0.75rem',
                    fontFamily: 'Roboto Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                    borderRadius: '4px'
                  }}>
                    {t.course2Tag}
                  </span>
                </div>
                
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  padding: '1.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end' 
                }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'Roboto Mono, monospace',
                    color: '#00D9C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem'
                  }}>
                    {t.course2Name}
                  </span>
                  <h3 style={{ 
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                    fontFamily: 'Bodoni Moda, serif', 
                    color: 'white', 
                    marginBottom: '1rem' 
                  }}>
                    {t.course2Title}
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: 'rgba(255,255,255,0.8)', 
                    marginBottom: '1.5rem',
                    maxWidth: '28rem',
                    lineHeight: '1.6'
                  }}>
                    {t.course2Desc}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
                    <span style={{ fontSize: '2rem', fontFamily: 'Bodoni Moda, serif', color: 'white' }}>
                      {t.course2Price}
                    </span>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'Roboto Mono, monospace', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', display: 'block' }}>
                        Duration
                      </span>
                      <span style={{ color: 'white' }}>{t.course2Duration}</span>
                    </div>
                    <Link to="/programs" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
                      {language === 'zh' ? '了解详情' : 'Learn More'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3 - Full width */}
            <div 
              className="reveal-element" 
              ref={addToRefs}
              style={{ gridColumn: 'span 12', transitionDelay: '0.2s' }}
            >
              <div style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                backgroundColor: '#111827', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                aspectRatio: '21/9',
                minHeight: '280px'
              }}>
                <img
                  src={courseImages.master}
                  alt={t.course3Title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
                }} />
                
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                  <span style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #00D9C0',
                    color: '#00D9C0',
                    fontSize: '0.75rem',
                    fontFamily: 'Roboto Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '4px'
                  }}>
                    {t.course3Tag}
                  </span>
                </div>
                
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  padding: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <div style={{ maxWidth: '36rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontFamily: 'Roboto Mono, monospace',
                      color: '#00D9C0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}>
                      {t.course3Name}
                    </span>
                    <h3 style={{ 
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                      fontFamily: 'Bodoni Moda, serif', 
                      color: 'white', 
                      marginBottom: '0.75rem' 
                    }}>
                      {t.course3Title}
                    </h3>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      marginBottom: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {t.course3Desc}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <span style={{ fontSize: '1.5rem', fontFamily: 'Bodoni Moda, serif', color: 'white' }}>
                        {t.course3Price}
                      </span>
                      <span style={{ fontSize: '0.875rem', fontFamily: 'Roboto Mono, monospace', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                        {t.course3Duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          TESTIMONIALS - Success Stories
          ========================================================================== */}
      <section className="section" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 5rem' }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Success Stories
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Bodoni Moda, serif' }}>
              {t.testimonialsTitle}
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#6b7280', 
              marginTop: '1.5rem',
              lineHeight: '1.75'
            }}>
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {[t.testimonial1, t.testimonial2, t.testimonial3].map((testimonial, index) => (
              <div 
                key={index}
                className="reveal-element"
                ref={addToRefs}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '2rem', height: '2px', backgroundColor: '#00D9C0' }} />
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'Roboto Mono, monospace',
                    color: '#00D9C0',
                    textTransform: 'uppercase'
                  }}>
                    Success Story
                  </span>
                </div>
                
                <p style={{ 
                  fontSize: '1rem',
                  color: '#374151',
                  marginBottom: '1.5rem',
                  lineHeight: '1.75',
                  flex: 1
                }}>
                  {testimonial}
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom right, #00D9C0, #d1d5db)'
                  }} />
                  <div>
                    <p style={{ fontWeight: 500, color: 'black' }}>
                      {[t.testimonial1Author, t.testimonial2Author, t.testimonial3Author][index]}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {[t.testimonial1Role, t.testimonial2Role, t.testimonial3Role][index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          CTA SECTION
          ========================================================================== */}
      <section className="section-lg" style={{ backgroundColor: '#1a1a1a', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          backgroundColor: 'rgba(0, 217, 192, 0.1)',
          borderRadius: '50%',
          filter: 'blur(120px)'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="reveal-element" ref={addToRefs} style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: '"Noto Serif SC", "Bodoni Moda", serif', color: 'white', marginBottom: '2rem', lineHeight: 1.3 }}>
              {language === 'zh' ? (
                <>
                  <span style={{ display: 'block' }}>准备好开启你的</span>
                  <span style={{ display: 'block' }}>面点生意了吗？</span>
                </>
              ) : 'Ready to Start Your Mantou Business?'}
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'rgba(255,255,255,0.7)', 
              marginBottom: '3rem', 
              maxWidth: '36rem',
              margin: '0 auto 3rem',
              lineHeight: '1.75'
            }}>
              {language === 'zh' 
                ? '加入全球2000+女性创业者的行列，用经过验证的商业模式，从第一笼馒头开始构建你的事业版图。' 
                : 'Join 2,000+ women entrepreneurs worldwide. Build your business from the first batch of mantou.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }} className="sm:flex-row">
              <Link to="/programs" className="btn btn-primary btn-lg">
                {language === 'zh' ? '开始学习' : 'Start Learning'}
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                {language === 'zh' ? '预约咨询' : 'Book Consultation'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
