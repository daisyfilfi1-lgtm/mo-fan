import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
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

  const faqs = [
    { q: t.faq1, a: t.faq1Answer },
    { q: t.faq2, a: t.faq2Answer },
    { q: t.faq3, a: t.faq3Answer },
    { q: t.faq4, a: t.faq4Answer },
    { q: t.faq5, a: t.faq5Answer },
    { q: t.faq6, a: t.faq6Answer },
    { q: t.faq7, a: t.faq7Answer },
    { q: t.faq8, a: t.faq8Answer },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-[#FAFAFA]">
        <div className="container pt-32 pb-20">
          <div className="max-w-4xl">
            <span className="reveal-element text-label-accent mb-6 block" ref={addToRefs}>FAQ</span>
            <h1 className="reveal-element text-hero mb-6" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              {t.faqHeroTitle}
            </h1>
            <p className="reveal-element text-headline text-gray-600 font-normal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              {t.faqHeroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="reveal-element border border-gray-200 overflow-hidden"
                ref={addToRefs}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAFAFA] transition-colors"
                >
                  <span className="font-medium pr-8">{faq.q}</span>
                  <span className={`text-2xl text-[#00D9C0] transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="reveal-element max-w-2xl mx-auto text-center" ref={addToRefs}>
            <h2 className="text-title mb-4">{t.faqMoreTitle}</h2>
            <p className="text-white/60 mb-8">{t.faqMoreDesc}</p>
            <Link to="/contact" className="btn btn-primary">
              {t.faqMoreCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
