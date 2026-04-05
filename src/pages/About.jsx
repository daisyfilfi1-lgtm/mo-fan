import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { storyImages } from '../utils/images'

const About = () => {
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

  // 国际化版本的创始人故事 - 全球共鸣叙事
  const stories = [
    {
      chapter: '01',
      label: language === 'zh' ? '逆境重生' : 'The Fall & Rise',
      headline: language === 'zh' 
        ? '当一切归零，我才真正开始' 
        : 'Starting from Zero: When Everything Falls Apart',
      content: language === 'zh'
        ? '2023年，我36岁，站在人生的谷底。曾经，我是智慧城市项目的负责人，月入十万，开着体面的车，住在公司楼下的高级公寓。但一场行业风暴，让十年积累化为乌有。最艰难的时刻，我甚至无法为孩子支付学校春游的费用。那个深夜，我明白了：等待救不了任何人，唯有行动才能改写命运。'
        : 'In 2023, at age 36, I hit rock bottom. Once a smart city project director earning $14,000 monthly, driving a luxury car, living in a downtown apartment. Then an industry storm wiped out a decade of work. At my lowest, I couldn\'t afford my child\'s school trip. That midnight, I realized: waiting rescues no one. Only action rewrites destiny.',
      highlight: language === 'zh' ? '真正的力量，始于承认脆弱' : 'True strength begins with acknowledging vulnerability',
      image: storyImages.chapter1
    },
    {
      chapter: '02', 
      label: language === 'zh' ? '手艺觉醒' : 'The Craft Awakening',
      headline: language === 'zh'
        ? '一个面团，承载千年东方智慧'
        : 'One Dough, Thousand Years of Eastern Wisdom',
      content: language === 'zh'
        ? '2023年12月，我在南京的冬夜里支起第一个摊位。30个手工馒头，两个小时，只换来几美元的营收。但命运的种子已悄然埋下——有顾客第二天回来寻找我，我意识到：这是连接。从街头摊位到家庭厨房，从一个人到两千名学员，我发现了一门被低估的东方手艺如何成为现代女性的经济独立工具。'
        : 'December 2023, on a cold Nanjing night, I set up my first stall. 30 handmade buns, two hours, mere dollars in sales. But destiny was seeded—a customer returned the next day. I realized: this is connection. From street stall to home kitchen, from one person to 2,000 students, I discovered how an underestimated Eastern craft could become a tool for modern women\'s economic independence.',
      highlight: language === 'zh' ? '传统手艺，现代商业，女性力量' : 'Ancient craft, modern business, feminine power',
      image: storyImages.chapter2
    },
    {
      chapter: '03',
      label: language === 'zh' ? '全球使命' : 'Global Mission',
      headline: language === 'zh'
        ? '从东方厨房到世界餐桌'
        : 'From Eastern Kitchen to Global Table',
      content: language === 'zh'
        ? '今天，我的工作室有400平方米，日处理近百订单，学员遍布30多个国家。但数字背后，是一个更深层的信念：在这个快速变化的世界里，女性需要的不是另一个空洞的励志故事，而是一个可复制的商业模式。我的使命是帮助10万女性，无论她们身处上海、悉尼还是旧金山，都能用一双手、一个面团，创造出属于自己的事业版图。'
        : 'Today, my 4,000 sq ft studio processes 100 orders daily, with students across 30+ countries. Behind the numbers lies a deeper belief: in this rapidly changing world, women need not another hollow inspiration story, but a replicable business model. My mission is to help 100,000 women—whether in Shanghai, Sydney, or San Francisco—to create their own business empires with just two hands and one dough.',
      highlight: language === 'zh' ? '2000+学员 · 30+国家 · 一个共同的梦想' : '2,000+ students · 30+ countries · One shared dream',
      image: storyImages.chapter3
    }
  ]

  // 全球化价值观
  const values = [
    {
      num: '01',
      title: language === 'zh' ? '匠心传承' : 'Craft Heritage',
      subtitle: language === 'zh' ? '千年技艺，现代演绎' : 'Ancient Techniques, Modern Expression',
      desc: language === 'zh' 
        ? '我们不只是在教做馒头，而是在传递一种可穿越文化边界的手艺。从揉面的力度到发酵的温度，每个细节都承载着东方生活美学。'
        : 'We don\'t just teach bun-making; we transmit a craft that transcends cultural boundaries. From kneading pressure to fermentation temperature, every detail carries Eastern living aesthetics.'
    },
    {
      num: '02',
      title: language === 'zh' ? '全球适配' : 'Global Adaptation',
      subtitle: language === 'zh' ? '无论你在世界哪个角落' : 'Wherever You Are in the World',
      desc: language === 'zh'
        ? '澳洲的牛奶、美国的有机面粉、欧洲的发酵工艺——我们的课程体系帮助学员将中式面点与当地食材完美结合，创造跨文化美食体验。'
        : 'Australian milk, American organic flour, European fermentation—our curriculum helps students blend Chinese pastry with local ingredients, creating cross-cultural culinary experiences.'
    },
    {
      num: '03',
      title: language === 'zh' ? '女性经济独立' : 'Women\'s Economic Independence',
      subtitle: language === 'zh' ? '事业与生活的平衡艺术' : 'The Art of Balancing Business & Life',
      desc: language === 'zh'
        ? '从全职妈妈到创业者，从职场转型到副业增收——我们相信，经济独立是女性获得选择权的基础。无论你是25岁还是55岁，开始永远不晚。'
        : 'From stay-at-home moms to entrepreneurs, career transitions to side income—we believe economic independence is the foundation of women\'s choices. Whether you\'re 25 or 55, it\'s never too late to start.'
    },
    {
      num: '04',
      title: language === 'zh' ? '社区共建' : 'Community Building',
      subtitle: language === 'zh' ? '一个人走得快，一群人走得远' : 'Alone We Go Fast, Together We Go Far',
      desc: language === 'zh'
        ? '馍范不仅是一门课程，更是一个全球化的女性创业者网络。从线上社群到线下聚会，从本地市集到跨国合作——我们见证了无数个"她"变成"她们"。'
        : 'MOFAN is not just a course, but a global network of women entrepreneurs. From online communities to offline gatherings, local markets to cross-border collaborations—we\'ve witnessed countless "shes" becoming "them."'
    }
  ]

  return (
    <div>
      {/* Hero Section - 国际化版本 */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: '#FAFAFA' }}>
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '56rem' }}>
            <span 
              className="reveal-element" 
              ref={addToRefs}
              style={{ 
                fontSize: '0.75rem', 
                fontFamily: 'Roboto Mono, monospace',
                color: '#00D9C0',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              {language === 'zh' ? '全球化女性创业平台' : 'Global Women Entrepreneurship Platform'}
            </span>
            
            <h1 
              className="reveal-element" 
              ref={addToRefs} 
              style={{ 
                transitionDelay: '0.1s',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                marginBottom: '1.5rem',
                lineHeight: 1.3
              }}
            >
              {language === 'zh' ? (
                <>
                  <span style={{ display: 'block' }}>重塑中式面点的</span>
                  <span style={{ display: 'block', color: '#00D9C0' }}>全球商业版图</span>
                </>
              ) : (
                <>
                  <span style={{ display: 'block' }}>Reshaping Chinese Pastry</span>
                  <span style={{ display: 'block', color: '#00D9C0' }}>Into a Global Business</span>
                </>
              )}
            </h1>
            
            <p 
              className="reveal-element" 
              ref={addToRefs} 
              style={{ 
                transitionDelay: '0.2s',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                color: '#4b5563',
                lineHeight: 1.75,
                maxWidth: '40rem'
              }}
            >
              {language === 'zh'
                ? '我是小敏，一个用双手和一技之长，在30岁后重新开始的普通女性。从南京街头到全球30+国家，从一个人到2000+学员，我在证明：手艺不分国界，创业不分年龄，女性的经济独立是最有力的自我表达。'
                : 'I\'m Xiaomin, an ordinary woman who restarted after 30 with nothing but two hands and a craft. From Nanjing streets to 30+ countries, from one person to 2,000+ students, I\'m proving: craft knows no borders, entrepreneurship knows no age, and women\'s economic independence is the most powerful self-expression.'}
            </p>

            <div 
              className="reveal-element" 
              ref={addToRefs}
              style={{ 
                transitionDelay: '0.3s',
                marginTop: '3rem',
                display: 'flex',
                gap: '3rem',
                flexWrap: 'wrap'
              }}
            >
              {[
                { num: '2,000+', label: language === 'zh' ? '全球学员' : 'Global Students' },
                { num: '30+', label: language === 'zh' ? '国家地区' : 'Countries' },
                { num: '$2M+', label: language === 'zh' ? '学员总营收' : 'Student Revenue' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    fontFamily: 'Bodoni Moda, serif', 
                    color: '#00D9C0',
                    fontWeight: 'bold'
                  }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div style={{ 
          position: 'absolute', 
          right: '5%', 
          top: '20%', 
          width: '300px', 
          height: '300px',
          background: 'radial-gradient(circle, rgba(0,217,192,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
      </section>

      {/* 创始人故事 - 国际化叙事 */}
      {stories.map((story, index) => (
        <section 
          key={index} 
          className="section" 
          style={{ 
            backgroundColor: index % 2 === 0 ? 'white' : '#1a1a1a',
            color: index % 2 === 0 ? 'black' : 'white'
          }}
        >
          <div className="container">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '4rem',
              alignItems: 'center'
            }}>
              {/* 文字内容 */}
              <div 
                className="reveal-element" 
                ref={addToRefs}
                style={{ order: index % 2 === 0 ? 1 : 2 }}
              >
                <span style={{ 
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  fontFamily: 'Bodoni Moda, serif',
                  color: index % 2 === 0 ? '#f3f4f6' : 'rgba(255,255,255,0.1)',
                  display: 'block',
                  marginBottom: '-1.5rem'
                }}>
                  {story.chapter}
                </span>
                
                <div style={{ position: 'relative' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'Roboto Mono, monospace',
                    color: '#00D9C0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'block',
                    marginBottom: '1rem'
                  }}>
                    {story.label}
                  </span>
                  
                  <h2 style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', 
                    fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                    marginBottom: '1.5rem',
                    lineHeight: 1.4
                  }}>
                    {story.headline}
                  </h2>
                  
                  <p style={{ 
                    fontSize: '1.125rem', 
                    color: index % 2 === 0 ? '#4b5563' : 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                    marginBottom: '2rem'
                  }}>
                    {story.content}
                  </p>
                  
                  <div style={{ 
                    display: 'inline-block',
                    padding: '1rem 1.5rem',
                    backgroundColor: index % 2 === 0 ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                    borderLeft: '3px solid #00D9C0',
                    borderRadius: '4px'
                  }}>
                    <span style={{ 
                      fontSize: '1.25rem', 
                      fontFamily: 'Bodoni Moda, serif',
                      color: '#00D9C0',
                      fontStyle: 'italic'
                    }}>
                      "{story.highlight}"
                    </span>
                  </div>
                </div>
              </div>

              {/* 图片 */}
              <div 
                className="reveal-element" 
                ref={addToRefs}
                style={{ 
                  transitionDelay: '0.1s',
                  position: 'relative',
                  order: index % 2 === 0 ? 2 : 1
                }}
              >
                <div style={{ 
                  aspectRatio: '4/5', 
                  overflow: 'hidden', 
                  borderRadius: '12px',
                  boxShadow: index % 2 === 0 
                    ? '0 20px 40px rgba(0,0,0,0.1)' 
                    : '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                  <img
                    src={story.image}
                    alt={story.headline}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      filter: index % 2 === 0 ? 'grayscale(100%) contrast(1.1)' : 'none'
                    }}
                  />
                </div>
                
                {/* 装饰边框 */}
                <div style={{ 
                  position: 'absolute', 
                  top: index % 2 === 0 ? '-1rem' : '1rem', 
                  left: index % 2 === 0 ? '-1rem' : '1rem', 
                  width: '100%', 
                  height: '100%', 
                  border: '2px solid #00D9C0',
                  borderRadius: '12px',
                  zIndex: -1,
                  opacity: 0.3
                }} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 全球化价值观 */}
      <section className="section" style={{ backgroundColor: 'black', color: 'white' }}>
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 5rem' }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              color: '#00D9C0',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              display: 'block',
              marginBottom: '1rem'
            }}>
              {language === 'zh' ? '全球化理念' : 'Global Philosophy'}
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              fontFamily: '"Noto Serif SC", serif',
              marginBottom: '1.5rem',
              lineHeight: 1.3
            }}>
              {language === 'zh' 
                ? '一门手艺，连接世界' 
                : 'One Craft, Connecting the World'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              {language === 'zh'
                ? '无论你在哪里，无论你的背景如何，我们相信每个人都有创造价值的能力。馍范不仅是一门课程，更是一个让全球女性相互支持、共同成长的社区。'
                : 'Wherever you are, whatever your background, we believe everyone has the ability to create value. MOFAN is not just a course, but a community where global women support each other and grow together.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="md:grid-cols-2">
            {values.map((value, index) => (
              <div 
                key={index}
                className="reveal-element"
                ref={addToRefs}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  padding: '2.5rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = '#00D9C0'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <span style={{ 
                    fontSize: '2rem',
                    fontFamily: 'Bodoni Moda, serif',
                    color: '#00D9C0',
                    opacity: 0.5,
                    fontWeight: 'bold',
                    minWidth: '2.5rem'
                  }}>
                    {value.num}
                  </span>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontFamily: '"Noto Serif SC", serif',
                      marginBottom: '0.25rem',
                      color: 'white'
                    }}>
                      {value.title}
                    </h3>
                    <span style={{ 
                      fontSize: '0.875rem',
                      color: '#00D9C0',
                      display: 'block',
                      marginBottom: '0.75rem'
                    }}>
                      {value.subtitle}
                    </span>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 国际化版本 */}
      <section className="section-lg" style={{ backgroundColor: '#00D9C0', color: 'black' }}>
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              fontFamily: '"Noto Serif SC", serif',
              marginBottom: '1.5rem',
              lineHeight: 1.3
            }}>
              {language === 'zh' 
                ? '加入全球女性的创业浪潮' 
                : 'Join the Global Wave of Women Entrepreneurs'}
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              marginBottom: '2.5rem',
              lineHeight: 1.75,
              opacity: 0.8
            }}>
              {language === 'zh'
                ? '无论你来自哪里，无论你现在的处境如何，都可以从一个小面团开始，创造属于你的事业版图。'
                : 'No matter where you\'re from or what your current situation is, you can start with one small dough and create your own business empire.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/programs" 
                className="btn"
                style={{ 
                  backgroundColor: 'black', 
                  color: 'white',
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  borderRadius: '8px'
                }}
              >
                {language === 'zh' ? '探索课程' : 'Explore Programs'}
              </a>
              <a 
                href="/contact" 
                className="btn"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'black',
                  border: '2px solid black',
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  borderRadius: '8px'
                }}
              >
                {language === 'zh' ? '联系我们' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
