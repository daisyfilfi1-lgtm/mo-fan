import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const revealRefs = useRef([])
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert(language === 'zh' ? '消息已发送！我们会尽快回复。' : 'Message sent! We will reply soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-[#FAFAFA]">
        <div className="container pt-32 pb-20">
          <div className="max-w-4xl">
            <span className="reveal-element text-label-accent mb-6 block" ref={addToRefs}>Contact</span>
            <h1 className="reveal-element text-hero mb-6" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              {t.contactHeroTitle}
            </h1>
            <p className="reveal-element text-headline text-gray-600 font-normal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              {t.contactHeroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Info & Form */}
            <div>
              {/* Contact Info */}
              <div className="reveal-element mb-12" ref={addToRefs}>
                <h2 className="text-title mb-8">{t.contactInfoTitle}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#00D9C0]">
                      ✉
                    </div>
                    <div>
                      <span className="text-label block mb-1">Email</span>
                      <span className="text-gray-700">{t.contactEmail}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#00D9C0]">
                      💬
                    </div>
                    <div>
                      <span className="text-label block mb-1">WeChat</span>
                      <span className="text-gray-700">{t.contactWechat}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#00D9C0]">
                      🕐
                    </div>
                    <div>
                      <span className="text-label block mb-1">Hours</span>
                      <span className="text-gray-700">{t.contactHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="reveal-element" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
                <h2 className="text-title mb-8">{t.contactFormTitle}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-label block mb-2">{t.contactFormName}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#00D9C0] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-label block mb-2">{t.contactFormEmail}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#00D9C0] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-label block mb-2">{t.contactFormMessage}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#00D9C0] focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    {t.contactFormSubmit}
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Booking */}
            <div className="reveal-element" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-[#FAFAFA] p-8 lg:p-12 h-full">
                <h2 className="text-title mb-4">{t.contactBookingTitle}</h2>
                <p className="text-gray-600 mb-8">{t.contactBookingDesc}</p>
                
                {/* Calendly Placeholder */}
                <div className="bg-white border border-gray-200 p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full">
                    <span className="text-2xl text-gray-400">📅</span>
                  </div>
                  <p className="text-gray-500 text-sm">Calendly Integration</p>
                  <p className="text-gray-400 text-xs mt-2">Booking widget will be embedded here</p>
                </div>

                <div className="mt-8 p-6 border border-gray-200">
                  <h3 className="font-medium mb-2">{language === 'zh' ? '预约须知' : 'Booking Notes'}</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• {language === 'zh' ? '每次咨询约30分钟' : 'Each session lasts ~30 minutes'}</li>
                    <li>• {language === 'zh' ? '通过Zoom进行' : 'Conducted via Zoom'}</li>
                    <li>• {language === 'zh' ? '支持中英文' : 'Available in Chinese and English'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
