import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useOrder } from '../contexts/OrderContext'
import { translations } from '../utils/translations'
import { formatCNY } from '../utils/currency'
import { SuccessIcon, FailedIcon, LoadingIcon } from '../components/payment/PaymentIcons'

export default function PaymentResult() {
  const { language } = useLanguage()
  const { order, dispatch } = useOrder()
  const t = translations[language]
  const navigate = useNavigate()

  useEffect(() => {
    if (!order) {
      navigate('/programs')
    }
  }, [order])

  if (!order) return null

  const status = order.status

  const handleBackHome = () => {
    dispatch({ type: 'CLEAR_ORDER' })
    navigate('/')
  }

  const handleViewCourse = () => {
    dispatch({ type: 'CLEAR_ORDER' })
    navigate('/programs')
  }

  const handleRetry = () => {
    navigate(`/checkout/${order.courseId}`)
  }

  return (
    <div className="section" style={{ minHeight: '80vh', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          {status === 'success' && (
            <>
              <div style={{ marginBottom: '2rem' }}>
                <SuccessIcon size={80} />
              </div>
              <h1 className="text-headline mb-4">{t.paySuccess}</h1>
              <p className="text-body text-gray-600 mb-8">{t.paySuccessDesc}</p>

              <div className="card mb-8" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-label">{t.orderNumber}</span>
                  <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.875rem', color: '#525252' }}>
                    {order.orderId}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-label">{language === 'zh' ? '课程' : 'Program'}</span>
                  <span style={{ fontSize: '0.875rem', color: '#404040' }}>
                    {order.courseName[language]}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label">{t.priceCNY}</span>
                  <span style={{ fontSize: '1.25rem', fontFamily: 'Bodoni Moda, serif', fontWeight: 700, color: '#00D9C0' }}>
                    {formatCNY(order.priceCNY)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button onClick={handleViewCourse} className="btn btn-primary w-full">
                  {t.viewCourse}
                </button>
                <button onClick={handleBackHome} className="btn btn-outline w-full">
                  {t.backHome}
                </button>
              </div>
            </>
          )}

          {status === 'failed' && (
            <>
              <div style={{ marginBottom: '2rem' }}>
                <FailedIcon size={80} />
              </div>
              <h1 className="text-headline mb-4">{t.payFailed}</h1>
              <p className="text-body text-gray-600 mb-8">{t.payFailedDesc}</p>

              <div className="flex flex-col gap-4">
                <button onClick={handleRetry} className="btn btn-primary w-full">
                  {t.retryPayment}
                </button>
                <button onClick={handleBackHome} className="btn btn-outline w-full">
                  {t.contactSupport}
                </button>
              </div>
            </>
          )}

          {status === 'paying' && (
            <>
              <div style={{ marginBottom: '2rem' }}>
                <LoadingIcon size={80} />
              </div>
              <h1 className="text-headline mb-4">{t.payPending}</h1>
              <p className="text-body text-gray-600 mb-8">{t.payPendingDesc}</p>
              <button onClick={handleViewCourse} className="btn btn-outline w-full">
                {t.backHome}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
