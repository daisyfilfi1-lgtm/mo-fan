import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { courseImages } from '../utils/images'

const Programs = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const navigate = useNavigate()
  const revealRefs = useRef([])
  const [activeTab, setActiveTab] = useState(0)

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

  // 三门课程数据
  const courses = [
    {
      id: 'foundation',
      name: language === 'zh' ? '副业启动课' : 'Side Hustle Starter',
      subtitle: language === 'zh' ? 'Foundation' : 'Foundation',
      price: '$49',
      duration: language === 'zh' ? '3课时' : '3 Lessons',
      desc: language === 'zh' 
        ? '3款基础造型 · 周末即可开始 · 低成本试错' 
        : '3 basic designs · Start weekends · Low-cost trial',
      features: language === 'zh' 
        ? ['基础面团手法', '3款入门造型', '简单发酵技巧', '朋友圈初阶文案']
        : ['Basic dough techniques', '3 entry designs', 'Simple fermentation', 'Beginner social copy'],
      highlight: language === 'zh' ? '适合人群：零基础小白、想周末搞钱的上班族' : 'Perfect for: Beginners, side hustlers',
      image: courseImages.foundation,
      tag: language === 'zh' ? '入门首选' : 'Beginner',
      color: '#22c55e'
    },
    {
      id: 'professional',
      name: language === 'zh' ? '创业系统课' : 'Business System',
      subtitle: language === 'zh' ? 'Professional' : 'Professional',
      price: '$699',
      duration: language === 'zh' ? '系统课程' : 'Full Course',
      desc: language === 'zh' 
        ? '基础知识 · 卷类专题 · 花样造型 · 海外适配' 
        : 'Basics · Rolls · Creative designs · Global adaptation',
      features: language === 'zh' 
        ? ['完整配方体系', '卷类专题深度', '花样造型进阶', '海外食材适配', '短视频获客', '私域转化SOP']
        : ['Complete recipe system', 'Advanced rolls', 'Creative designs', 'Global ingredients', 'Short video traffic', 'Private domain SOP'],
      highlight: language === 'zh' ? '适合人群：想全职创业、建立完整商业模式的学员' : 'Perfect for: Full-time entrepreneurs',
      image: courseImages.professional,
      tag: language === 'zh' ? '最受欢迎' : 'Most Popular',
      color: '#00D9C0',
      popular: true
    },
    {
      id: 'master',
      name: language === 'zh' ? '商业课' : 'Business Partnership',
      subtitle: language === 'zh' ? 'Master' : 'Master',
      price: '$2,999',
      duration: language === 'zh' ? '5天线下营' : '5-Day Camp',
      desc: language === 'zh' 
        ? '供应链支持 · 品牌授权书 · 5天线下营' 
        : 'Supply chain · Brand licensing · 5-day camp',
      features: language === 'zh' 
        ? ['5天线下密训', '供应链全程支持', '品牌授权证书', '1对1商业顾问', '定制化增长方案', '资源对接']
        : ['5-day intensive camp', 'Supply chain support', 'Brand license', '1:1 consultant', 'Growth strategy', 'Resource network'],
      highlight: language === 'zh' ? '适合人群：有基础、想规模化扩张的创业者' : 'Perfect for: Scaling entrepreneurs',
      image: courseImages.master,
      tag: language === 'zh' ? '高阶' : 'Advanced',
      color: '#f59e0b'
    }
  ]

  const cases = [
    { name: t.case1Name, role: t.case1Role, result: t.case1Result, story: t.case1Story },
    { name: t.case2Name, role: t.case2Role, result: t.case2Result, story: t.case2Story },
    { name: t.case3Name, role: t.case3Role, result: t.case3Result, story: t.case3Story },
  ]

  const guarantees = [
    { title: t.guarantee1, desc: t.guarantee1Desc },
    { title: t.guarantee2, desc: t.guarantee2Desc },
    { title: t.guarantee3, desc: t.guarantee3Desc },
    { title: t.guarantee4, desc: t.guarantee4Desc },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#FAFAFA' }}>
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
              Programs
            </span>
            <h1 
              className="reveal-element" 
              ref={addToRefs} 
              style={{ 
                transitionDelay: '0.1s',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              {language === 'zh' ? '选择适合你的课程' : 'Choose Your Path'}
            </h1>
            <p 
              className="reveal-element" 
              ref={addToRefs} 
              style={{ 
                transitionDelay: '0.2s',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontFamily: 'Bodoni Moda, serif',
                color: '#4b5563',
                fontWeight: 'normal',
                lineHeight: 1.6
              }}
            >
              {language === 'zh' ? (
                <>
                  <span style={{ display: 'block' }}>从副业试水，到系统创业，再到规模化扩张。</span>
                  <span style={{ display: 'block' }}>我们为每个阶段的你，准备了最适合的解决方案。</span>
                </>
              ) : (
                <>
                  <span style={{ display: 'block' }}>From side hustle to full business to scaling up.</span>
                  <span style={{ display: 'block' }}>We have the right solution for every stage.</span>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Course Comparison Cards */}
      <section className="section">
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
              marginBottom: '1rem'
            }}>
              {language === 'zh' ? '三大课程体系' : 'Three Course Levels'}
            </h2>
            <p style={{ color: '#6b7280', maxWidth: '36rem', margin: '0 auto' }}>
              {language === 'zh' 
                ? '无论你在哪里，我们都能帮你迈出下一步' 
                : 'No matter where you are, we help you take the next step'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {courses.map((course, index) => (
              <div 
                key={course.id}
                className="reveal-element"
                ref={addToRefs}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: course.popular 
                    ? '0 20px 40px rgba(0,217,192,0.15)' 
                    : '0 4px 20px rgba(0,0,0,0.08)',
                  border: course.popular ? '2px solid #00D9C0' : '1px solid #e5e5e5',
                  position: 'relative',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = course.popular 
                    ? '0 20px 40px rgba(0,217,192,0.15)' 
                    : '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                {/* 标签 */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: course.color,
                  color: course.popular ? 'black' : 'white',
                  fontSize: '0.75rem',
                  fontFamily: 'Roboto Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}>
                  {course.tag}
                </div>

                {/* 图片 */}
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={course.image} 
                    alt={course.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* 课程级别 */}
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: course.color,
                    fontFamily: 'Roboto Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {course.subtitle}
                  </span>

                  {/* 课程名称 */}
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontFamily: '"Noto Serif SC", serif',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {course.name}
                  </h3>

                  {/* 描述 */}
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6
                  }}>
                    {course.desc}
                  </p>

                  {/* 价格 */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'baseline', 
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    <span style={{ 
                      fontSize: '2.5rem', 
                      fontFamily: 'Bodoni Moda, serif',
                      color: course.color,
                      fontWeight: 'bold'
                    }}>
                      {course.price}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                      / {course.duration}
                    </span>
                  </div>

                  {/* 功能列表 */}
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {course.features.map((feature, i) => (
                      <li key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                        fontSize: '0.9rem',
                        color: '#374151'
                      }}>
                        <span style={{ 
                          color: course.color,
                          fontWeight: 'bold',
                          fontSize: '1rem'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* 适合人群 */}
                  <p style={{ 
                    fontSize: '0.8rem', 
                    color: '#9ca3af',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}>
                    {course.highlight}
                  </p>

                  {/* 按钮 */}
                  <button 
                    className="btn"
                    style={{ 
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: course.popular ? course.color : 'transparent',
                      color: course.popular ? 'black' : course.color,
                      border: `2px solid ${course.color}`,
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      if (!course.popular) {
                        e.target.style.backgroundColor = course.color
                        e.target.style.color = 'white'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!course.popular) {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = course.color
                      }
                    }}
                  >
                    {language === 'zh' ? '了解详情' : 'Learn More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Course Tabs */}
      <section style={{ backgroundColor: '#1a1a1a', color: 'white' }} className="section">
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'Roboto Mono, monospace',
              color: '#00D9C0',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Course Details
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              fontFamily: '"Noto Serif SC", serif',
              marginBottom: '1rem'
            }}>
              {language === 'zh' ? '详细课程对比' : 'Detailed Comparison'}
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="reveal-element" ref={addToRefs} style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {courses.map((course, index) => (
              <button
                key={course.id}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: activeTab === index ? course.color : 'transparent',
                  color: activeTab === index ? (course.popular ? 'black' : 'white') : 'rgba(255,255,255,0.6)',
                  border: `2px solid ${activeTab === index ? course.color : 'rgba(255,255,255,0.2)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s'
                }}
              >
                {course.name}
              </button>
            ))}
          </div>

          {/* Active Course Detail */}
          <div className="reveal-element" ref={addToRefs} style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '3rem',
            border: `2px solid ${courses[activeTab].color}`
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontFamily: '"Noto Serif SC", serif',
                  marginBottom: '1rem',
                  color: courses[activeTab].color
                }}>
                  {courses[activeTab].name}
                </h3>
                <p style={{ 
                  fontSize: '1.125rem', 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.8,
                  marginBottom: '2rem'
                }}>
                  {courses[activeTab].desc}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '1rem'
                  }}>
                    {language === 'zh' ? '课程包含' : 'Includes'}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {courses[activeTab].features.map((feature, i) => (
                      <div key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        padding: '0.75rem 1rem',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderRadius: '8px'
                      }}>
                        <span style={{ 
                          width: '24px',
                          height: '24px',
                          backgroundColor: courses[activeTab].color,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: courses[activeTab].popular ? 'black' : 'white',
                          fontWeight: 'bold',
                          fontSize: '0.75rem'
                        }}>
                          {i + 1}
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '2rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(0,217,192,0.1)',
                  borderRadius: '12px'
                }}>
                  <div>
                    <span style={{ 
                      fontSize: '3rem', 
                      fontFamily: 'Bodoni Moda, serif',
                      color: '#00D9C0',
                      fontWeight: 'bold'
                    }}>
                      {courses[activeTab].price}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', marginLeft: '0.5rem' }}>
                      / {courses[activeTab].duration}
                    </span>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => navigate(`/checkout/${courses[activeTab].id}`)}
                  >
                    {language === 'zh' ? '立即报名' : 'Enroll Now'}
                  </button>
                </div>
              </div>

              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                <img 
                  src={courses[activeTab].image} 
                  alt={courses[activeTab].name}
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="section">
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ marginBottom: '4rem' }}>
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
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              fontFamily: '"Noto Serif SC", serif',
              lineHeight: 1.3
            }}>
              {t.caseStudyTitle}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {cases.map((caseItem, index) => (
              <div 
                key={index}
                className="reveal-element"
                ref={addToRefs}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  backgroundColor: '#FAFAFA',
                  padding: '2rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FAFAFA'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ 
                  fontSize: '2rem', 
                  fontFamily: 'Bodoni Moda, serif', 
                  color: '#00D9C0',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>
                  {caseItem.result}
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.125rem' }}>
                  {caseItem.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1rem' }}>
                  {caseItem.role}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7 }}>
                  {caseItem.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ backgroundColor: '#FAFAFA' }} className="section">
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ textAlign: 'center', maxWidth: '32rem', margin: '0 auto 4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              fontFamily: '"Noto Serif SC", serif',
              marginBottom: '1rem',
              lineHeight: 1.3
            }}>
              {t.guaranteeTitle}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {guarantees.map((item, index) => (
              <div 
                key={index}
                className="reveal-element"
                ref={addToRefs}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #00D9C0',
                  borderRadius: '50%'
                }}>
                  <span style={{ color: '#00D9C0', fontSize: '1.25rem', fontWeight: 'bold' }}>✓</span>
                </div>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
