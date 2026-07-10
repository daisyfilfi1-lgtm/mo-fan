import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useOrder } from '../contexts/OrderContext'
import { translations } from '../utils/translations'
import { formatCNY } from '../utils/currency'
import { requestPayment, getPayStatus } from '../utils/payment'
import { detectTerminal } from '../utils/terminal'
import { AlipayIcon, WechatPayIcon, LoadingIcon } from '../components/payment/PaymentIcons'
import QRCodeDisplay from '../components/payment/QRCodeDisplay'
import { useToastState, ToastView } from '../components/Toast'

export default function Payment() {
  const { orderId } = useParams()
  const { language } = useLanguage()
  const { order, dispatch } = useOrder()
  const t = translations[language]
  const navigate = useNavigate()
  const { state: toastState, show: showToast } = useToastState()

  const [payData, setPayData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const pollRef = useRef(null)

  const terminal = order?.terminal || detectTerminal()
  const method = order?.paymentMethod

  useEffect(() => {
    if (!order || order.orderId !== orderId) {
      navigate('/programs')
      return
    }
    if (order.status === 'success') {
      navigate('/payment/result')
      return
    }

    dispatch({ type: 'PAYING' })

    async function init() {
      try {
        const data = await requestPayment(orderId, method, terminal)
        setPayData(data)
        setLoading(false)
        startPolling()
      } catch (err) {
        setError(language === 'zh' ? '获取支付信息失败' : 'Failed to get payment info')
        setLoading(false)
      }
    }
    init()

    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [orderId])

  function startPolling() {
    pollRef.current = setInterval(async () => {
      try {
        const res = await getPayStatus(orderId)
        if (res.status === 'success') {
          clearInterval(pollRef.current)
          dispatch({ type: 'PAY_SUCCESS' })
          navigate('/payment/result')
        } else if (res.status === 'failed') {
          clearInterval(pollRef.current)
          dispatch({ type: 'PAY_FAILED' })
          navigate('/payment/result')
        }
      } catch (e) {
        // continue polling
      }
    }, 3000)
  }

  function handlePaidClick() {
    if (pollRef.current) clearInterval(pollRef.current)
    dispatch({ type: 'PAY_SUCCESS' })
    navigate('/payment/result')
  }

  function handleH5Pay() {
    showToast(language === 'zh' ? '正在跳转支付页面...' : 'Redirecting to payment...')
    setTimeout(() => {
      dispatch({ type: 'PAY_SUCCESS' })
      navigate('/payment/result')
    }, 1500)
  }

  function handleJsapiPay() {
    showToast(language === 'zh' ? '正在拉起微信支付...' : 'Initiating WeChat Pay...')
    setTimeout(() => {
      dispatch({ type: 'PAY_SUCCESS' })
      navigate('/payment/result')
    }, 2000)
  }

  if (!order) return null

  if (loading) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container text-center">
          <LoadingIcon size={64} />
          <p className="text-label mt-6" style={{ color: '#737373' }}>
            {language === 'zh' ? '正在生成支付订单...' : 'Generating payment order...'}
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container text-center">
          <p className="text-title mb-6" style={{ color: '#737373' }}>{error}</p>
          <button onClick={() => navigate('/programs')} className="btn btn-outline">
            {t.backHome}
          </button>
        </div>
      </div>
    )
  }

  const isAlipay = method === 'alipay'
  const methodName = isAlipay ? t.alipay : t.wechatpay
  const Icon = isAlipay ? AlipayIcon : WechatPayIcon

  return (
    <div className="section" style={{ minHeight: '80vh', backgroundColor: '#FAFAFA' }}>
      <div className="container">
        <div className="max-w-md mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 className="text-headline mb-4">{t.payingTitle}</h1>
            <div className="flex items-center justify-center gap-3">
              <Icon size={32} />
              <span className="text-label" style={{ color: isAlipay ? '#1677FF' : '#09BB07' }}>
                {methodName}
              </span>
            </div>
          </div>

          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}>
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <span className="text-label block mb-2">{t.orderNumber}</span>
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.875rem', color: '#525252' }}>
                {orderId}
              </span>
            </div>

            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', fontFamily: 'Bodoni Moda, serif', fontWeight: 700, color: '#00D9C0' }}>
                {formatCNY(order.priceCNY)}
              </span>
            </div>

            {terminal === 'pc' && payData && (
              <>
                <p className="text-body-sm text-center mb-6">{t.scanHint}</p>
                <QRCodeDisplay
                  method={method}
                  expiresAt={payData.expiresAt}
                  onRefresh={() => window.location.reload()}
                  onPaid={handlePaidClick}
                />
              </>
            )}

            {terminal === 'h5' && (
              <div style={{ textAlign: 'center' }}>
                <p className="text-body-sm mb-6">
                  {language === 'zh'
                    ? `点击下方按钮跳转至${methodName}完成支付`
                    : `Click the button below to continue with ${methodName}`}
                </p>
                <button onClick={handleH5Pay} className="btn btn-primary w-full">
                  {isAlipay ? t.openAlipay : t.openWechat}
                </button>
                <p className="text-body-sm mt-4" style={{ fontSize: '0.75rem', color: '#A3A3A3' }}>
                  {language === 'zh'
                    ? '如未自动唤起，请确认已安装对应 App'
                    : 'If not launched, ensure the app is installed'}
                </p>
              </div>
            )}

            {terminal === 'wechat' && (
              <div style={{ textAlign: 'center' }}>
                <p className="text-body-sm mb-6">{t.jsapiPaying}</p>
                <LoadingIcon size={48} />
                <button onClick={handleJsapiPay} className="btn btn-primary w-full mt-6">
                  {t.openWechat}
                </button>
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => navigate('/programs')}
              className="btn btn-ghost"
              style={{ fontSize: '0.75rem' }}
            >
              {language === 'zh' ? '返回课程' : 'Back to Programs'}
            </button>
          </div>
        </div>
      </div>

      <ToastView message={toastState.message} visible={toastState.visible} />
    </div>
  )
}
