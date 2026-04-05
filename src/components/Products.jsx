import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { productImages } from '../utils/images'

const Products = () => {
  const { language } = useLanguage()
  const t = translations[language]

  // SKU产品数据 - COLORFUL appetizing images
  const skus = [
    {
      id: 'SKU-001',
      name: language === 'zh' ? '芝士流心奶酪馒头' : 'Cheese Lava Mantou',
      nameEn: 'Cheese Lava Mantou',
      category: t.categoryTraffic,
      image: productImages.traffic.cheeseLava,
      size: 'normal',
      color: 'warm'
    },
    {
      id: 'SKU-002',
      name: language === 'zh' ? '彩虹螺旋卷' : 'Rainbow Spiral Roll',
      nameEn: 'Rainbow Spiral Roll',
      category: t.categoryTraffic,
      image: productImages.traffic.rainbowRoll,
      size: 'normal',
      color: 'colorful'
    },
    {
      id: 'SKU-003',
      name: language === 'zh' ? '卡通兔兔包' : 'Bunny-Shaped Bun',
      nameEn: 'Bunny-Shaped Bun',
      category: t.categoryTraffic,
      image: productImages.traffic.bunnyBun,
      size: 'wide',
      color: 'cute'
    },
    {
      id: 'SKU-004',
      name: language === 'zh' ? '奥利奥可可卷' : 'Oreo Chocolate Roll',
      nameEn: 'Oreo Chocolate Roll',
      category: t.categoryProfit,
      image: productImages.profit.oreoRoll,
      size: 'normal',
      color: 'rich'
    },
    {
      id: 'SKU-005',
      name: language === 'zh' ? '全麦坚果能量卷' : 'Whole Wheat Nut Roll',
      nameEn: 'Whole Wheat Nut Roll',
      category: t.categoryProfit,
      image: productImages.profit.wholeWheat,
      size: 'normal',
      color: 'healthy'
    },
    {
      id: 'SKU-006',
      name: language === 'zh' ? '培根芝士咸卷' : 'Bacon Cheese Roll',
      nameEn: 'Bacon Cheese Roll',
      category: t.categoryProfit,
      image: productImages.profit.baconCheese,
      size: 'wide',
      color: 'savory'
    },
    {
      id: 'SKU-007',
      name: language === 'zh' ? '龙年吉祥包' : 'Dragon Celebration Bun',
      nameEn: 'Dragon Celebration Bun',
      category: t.categoryProfit,
      image: productImages.profit.dragonHuamo,
      size: 'normal',
      color: 'festive'
    },
    {
      id: 'SKU-008',
      name: language === 'zh' ? '中秋玉兔流沙包' : 'Moon Rabbit Lava Bun',
      nameEn: 'Moon Rabbit Lava Bun',
      category: t.categoryProfit,
      image: productImages.profit.moonRabbit,
      size: 'normal',
      color: 'elegant'
    },
    {
      id: 'SKU-009',
      name: language === 'zh' ? '仿真苹果馒头' : 'Apple-Shaped Bun',
      nameEn: 'Apple-Shaped Bun',
      category: t.categoryFlagship,
      image: productImages.flagship.appleBun,
      size: 'wide',
      color: 'artistic'
    },
    {
      id: 'SKU-010',
      name: language === 'zh' ? '黑芝麻养生卷' : 'Black Sesame Wellness Roll',
      nameEn: 'Black Sesame Wellness Roll',
      category: t.categoryFlagship,
      image: productImages.flagship.sesameRoll,
      size: 'normal',
      color: 'wellness'
    },
    {
      id: 'SKU-011',
      name: language === 'zh' ? '寿桃庆典包' : 'Longevity Peach Bun',
      nameEn: 'Longevity Peach Bun',
      category: t.categoryFlagship,
      image: productImages.flagship.longevityPeach,
      size: 'normal',
      color: 'celebration'
    }
  ]

  // Category color mapping
  const getCategoryColor = (category) => {
    if (category === t.categoryTraffic) return '#22c55e'
    if (category === t.categoryProfit) return '#3b82f6'
    return '#f59e0b'
  }

  const getCategoryTextColor = (category) => {
    if (category === t.categoryTraffic) return '#15803d'
    if (category === t.categoryProfit) return '#1d4ed8'
    return '#b45309'
  }

  return (
    <section className="section" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container">
        {/* Section Header - Business focused */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          marginBottom: '4rem'
        }} className="md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-label text-gray-400 mb-4 block tracking-[0.2em]">Product Line</span>
            <h2 className="text-headline">{t.productsTitle}</h2>
            <p className="text-body text-gray-500 mt-4 max-w-xl">{t.productsDesc}</p>
          </div>
          
          {/* Category Legend - Business categories */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }} className="md:mt-0">
            {[
              { label: t.categoryTraffic, color: '#22c55e' },
              { label: t.categoryProfit, color: '#3b82f6' },
              { label: t.categoryFlagship, color: '#f59e0b' }
            ].map((cat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color }} />
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid - Using CSS Grid with inline styles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem'
        }} className="md:grid-cols-4">
          {skus.map((sku) => (
            <div 
              key={sku.id}
              className="group"
              style={{
                position: 'relative',
                backgroundColor: 'white',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                aspectRatio: sku.size === 'wide' ? '2/1' : '1/1',
                gridColumn: sku.size === 'wide' ? 'span 2' : 'span 1',
                transition: 'box-shadow 0.5s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              {/* COLOR Image - No B&W filter! */}
              <img
                src={sku.image}
                alt={sku.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'saturate(1.1) contrast(1.05)',
                  transition: 'transform 0.7s'
                }}
                className="group-hover:scale-110"
              />
              
              {/* Subtle gradient overlay for text readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent, transparent)',
                opacity: 0,
                transition: 'opacity 0.5s'
              }} className="group-hover:opacity-100" />
              
              {/* Category Badge - Always Visible */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
                <span style={{
                  padding: '0.375rem 0.75rem',
                  fontSize: '0.75rem',
                  fontFamily: 'Roboto Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  color: getCategoryTextColor(sku.category)
                }}>
                  {sku.category}
                </span>
              </div>

              {/* SKU ID - Top right */}
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontFamily: 'Roboto Mono, monospace',
                  color: '#6b7280',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  padding: '0.25rem 0.5rem'
                }}>{sku.id}</span>
              </div>
              
              {/* Content Overlay (Hover) */}
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '1.25rem',
                zIndex: 10,
                backgroundColor: 'white',
                transform: 'translateY(100%)',
                transition: 'transform 0.5s'
              }} className="group-hover:translate-y-0">
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: '#111827',
                  marginBottom: '0.25rem'
                }}>
                  {sku.name}
                </h3>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  fontFamily: 'Roboto Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {sku.nameEn}
                </p>
                <div style={{
                  marginTop: '0.75rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                    {language === 'zh' ? '查看配方' : 'View Recipe'}
                  </span>
                  <span style={{ color: '#00D9C0' }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Business focused */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            {language === 'zh' 
              ? '所有产品均有详细配方和制作视频，学会即可开始销售' 
              : 'All products include detailed recipes and video tutorials—start selling after learning'}
          </p>
          <button className="btn btn-primary">
            {language === 'zh' ? '查看完整产品目录' : 'View Full Catalog'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
