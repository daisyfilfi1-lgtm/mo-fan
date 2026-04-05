import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { galleryImages } from '../utils/images'

const Gallery = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const revealRefs = useRef([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
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

  const filters = [
    { key: 'all', label: t.galleryFilterAll },
    { key: 'beginner', label: t.galleryFilterBeginner },
    { key: 'advanced', label: t.galleryFilterAdvanced },
    { key: 'master', label: t.galleryFilterMaster },
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.level === activeFilter)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-[#FAFAFA]">
        <div className="container pt-32 pb-20">
          <div className="max-w-4xl">
            <span className="reveal-element text-label-accent mb-6 block tracking-[0.3em]" ref={addToRefs}>Gallery</span>
            <h1 className="reveal-element text-hero mb-6" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              {t.galleryHeroTitle}
            </h1>
            <p className="reveal-element text-headline text-gray-500 font-normal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              {t.galleryHeroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-200 sticky top-20 bg-white/95 backdrop-blur-sm z-10">
        <div className="container">
          <div className="reveal-element flex flex-wrap gap-8" ref={addToRefs}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`text-sm font-mono uppercase tracking-[0.15em] transition-colors relative pb-2 ${
                  activeFilter === filter.key 
                    ? 'text-[#00D9C0]' 
                    : 'text-gray-400 hover:text-black'
                }`}
              >
                {filter.label}
                {activeFilter === filter.key && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00D9C0]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Style */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((work, index) => (
              <div 
                key={work.id}
                className={`reveal-element group relative overflow-hidden bg-gray-100 cursor-pointer ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                ref={addToRefs}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className={`${index % 5 === 0 ? 'aspect-square' : 'aspect-[4/5]'}`}>
                  <img
                    src={work.src}
                    alt={`Student work ${work.id}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                  />
                  {/* Color reveal on hover */}
                  <img
                    src={work.src}
                    alt={`Student work ${work.id}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-mono uppercase tracking-wider backdrop-blur-sm ${
                    work.level === 'beginner' 
                      ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                      : work.level === 'advanced'
                      ? 'bg-blue-400/20 text-blue-400 border border-blue-400/30'
                      : 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                  }`}>
                    {work.level}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-['Bodoni_Moda'] text-white mb-1">
                    {language === 'zh' ? '学员作品' : 'Student Work'} #{String(work.id).padStart(3, '0')}
                  </h3>
                  <p className="text-sm text-white/60">
                    MOFAN Academy
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="reveal-element max-w-3xl mx-auto text-center" ref={addToRefs}>
            <h2 className="text-headline mb-6">{t.galleryShareTitle}</h2>
            <p className="text-body text-white/60 mb-10">{t.galleryShareDesc}</p>
            <button className="btn btn-primary">
              {t.galleryShareCta}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
