import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useOrder } from '../contexts/OrderContext'
import { translations } from '../utils/translations'
import { courseImages } from '../utils/images'
import { formatCNY, getCoursePrice, getCourseName } from '../utils/currency'
import { createOrder } from '../utils/payment'
import { AlipayIcon, WechatPayIcon } from '../components/payment/PaymentIcons'
import { useToastState, ToastView } from '../components/Toast'

const VALID_COURSES = ['foundation', 'professional', 'master']

export default function Checkout() {
  const { courseId } = useParams()
  const { language } = useLanguage()
  const { order, dispatch } = useOrder()
  const t = translations[language]
  const navigate = useNavigate()
  const { state: toastState, show: showToast } = useToastState()

  const [student, setStudent] = useState({ name: '', phone: '', email: '', wechat: '' })
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!VALID_COURSES.includes(courseId)) {
      navigate('/programs')
      return
    }
    if (!order || order.courseId !== courseId || order.status === 'success' || order.status === 'failed') {
      dispatch({ type: 'INIT_ORDER', payload: { courseId } })
    }
  }, [courseId])

  useEffect(() => {
    if (order && order.student && order.student.name) {
      setStudent(order.student)
    }
    if (order && order.paymentMethod) {
      setPaymentMethod(order.paymentMethod)
    }
  }, [order])

  const priceCNY = getCoursePrice(courseId)
  const courseName = getCourseName(courseId, language)
  const courseImage = courseImages[courseId]

  const handleInputChange = (field) => (e) => {
    setStudent({ ...student, [field]: e.target.value })
  }

  const handleMethodSelect = (method) => {
    setPaymentMethod(method)
  }

  const validate = () => {
    if (!student.name.trim()) {
      showToast(language === 'zh' ? '请输入姓名' : 'Please enter your name')
      return false
    }
    if (!student.phone.trim()) {
      showToast(language === 'zh' ? '请输入手机号' : 'Please enter your phone')
      return false
    }
    if (!/^\S+@\S+\.\S+$/.test(student.email)) {
      showToast(language === 'zh' ? '请输入有效邮箱' : 'Please enter a valid email')
      return false
    }
    if (!paymentMethod) {
      showToast(language === 'zh' ? '请选择支付方式' : 'Please select a payment method')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    dispatch({ type: 'SET_STUDENT', payload: student })
    dispatch({ type: 'SET_PAYMENT_METHOD', payload: paymentMethod })
    try {
      const res = await createOrder(courseId, student)
      dispatch({ type: 'ORDER_CREATED', payload: { orderId: res.orderId } })
      navigate(`/payment/${res.orderId}`)
    } catch (err) {
      showToast(language === 'zh' ? '下单失败，请重试' : 'Order failed, please retry')
    } finally {
      setSubmitting(false)
    }
  }

  if (!VALID_COURSES.includes(courseId)) return null

  const inputStyle = 'w-full px-4 py-3 border border-gray-200 focus:border-[#00D9C0] focus:outline-none transition-colors'

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container pt-32 pb-20">
          <div className="max-w-4xl">
            <span className="text-label-accent mb-6 block">{t.checkoutTitle}</span>
            <h1 className="text-hero mb-6">{courseName}</h1>
            <p className="text-headline text-gray-600 font-normal">
              {language === 'zh' ? '确认信息并完成支付' : 'Confirm your details and complete payment'}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-title mb-8">{t.checkoutStudentInfo}</h2>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div>
                  <label className="text-label block mb-2">{t.studentName} *</label>
                  <input
                    type="text"
                    value={student.name}
                    onChange={handleInputChange('name')}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label className="text-label block mb-2">{t.studentPhone} *</label>
                  <input
                    type="tel"
                    value={student.phone}
                    onChange={handleInputChange('phone')}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label className="text-label block mb-2">{t.studentEmail} *</label>
                  <input
                    type="email"
                    value={student.email}
                    onChange={handleInputChange('email')}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label className="text-label block mb-2">{t.studentWechat}</label>
                  <input
                    type="text"
                    value={student.wechat}
                    onChange={handleInputChange('wechat')}
                    className={inputStyle}
                  />
                </div>

                <div className="mt-8">
                  <h2 className="text-title mb-6">{t.paymentMethod}</h2>
                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={() => handleMethodSelect('alipay')}
                      className={`pay-method ${paymentMethod === 'alipay' ? 'pay-method--active' : ''}`}
                    >
                      <AlipayIcon size={36} />
                      <span className="flex-1 text-left ml-4">
                        <span className="block font-medium">{t.alipay}</span>
                        <span className="text-label" style={{ color: '#737373' }}>
                          {language === 'zh' ? '支付宝安全支付' : 'Alipay Secure Payment'}
                        </span>
                      </span>
                      <span className="pay-method__check" style={{ opacity: paymentMethod === 'alipay' ? 1 : 0 }}>
                        ✓
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleMethodSelect('wechatpay')}
                      className={`pay-method ${paymentMethod === 'wechatpay' ? 'pay-method--active' : ''}`}
                    >
                      <WechatPayIcon size={36} />
                      <span className="flex-1 text-left ml-4">
                        <span className="block font-medium">{t.wechatpay}</span>
                        <span className="text-label" style={{ color: '#737373' }}>
                          {language === 'zh' ? '微信安全支付' : 'WeChat Pay Secure'}
                        </span>
                      </span>
                      <span className="pay-method__check" style={{ opacity: paymentMethod === 'wechatpay' ? 1 : 0 }}>
                        ✓
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary w-full mt-8"
                  style={{ opacity: submitting ? 0.6 : 1 }}
                >
                  {submitting ? (language === 'zh' ? '提交中...' : 'Processing...') : t.confirmOrder}
                </button>
              </form>
            </div>

            <div>
              <div className="sticky" style={{ top: '100px' }}>
                <h2 className="text-title mb-8">{t.orderSummary}</h2>
                <div className="card" style={{ border: '1px solid #E5E5E5' }}>
                  {courseImage && (
                    <img
                      src={courseImage}
                      alt={courseName}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="p-8">
                    <h3 className="text-title mb-2" style={{ fontSize: '1.5rem' }}>{courseName}</h3>
                    <p className="text-body-sm mb-6">
                      {language === 'zh' ? '培训课程报名' : 'Program Enrollment'}
                    </p>

                    <div className="border-t pt-6 mt-6" style={{ borderColor: '#E5E5E5' }}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-label">{t.priceCNY}</span>
                        <span style={{ fontSize: '2rem', fontFamily: 'Bodoni Moda, serif', fontWeight: 700, color: '#00D9C0' }}>
                          {formatCNY(priceCNY)}
                        </span>
                      </div>
                      <p className="text-body-sm" style={{ fontSize: '0.75rem', color: '#A3A3A3' }}>
                        {language === 'zh'
                          ? '支付金额以人民币为准，汇率由支付时确定'
                          : 'Payment amount in CNY; exchange rate determined at payment time'}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t" style={{ borderColor: '#E5E5E5' }}>
                      <div className="flex items-start gap-3 mb-4">
                        <span style={{ color: '#00D9C0', fontSize: '1.2rem' }}>✓</span>
                        <span className="text-body-sm">
                          {language === 'zh' ? '30天无理由退款保证' : '30-day money-back guarantee'}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span style={{ color: '#00D9C0', fontSize: '1.2rem' }}>✓</span>
                        <span className="text-body-sm">
                          {language === 'zh' ? '支付成功后立即开通课程' : 'Instant access after payment'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastView message={toastState.message} visible={toastState.visible} />
    </div>
  )
}
