import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../utils/translations'

export default function QRCodeDisplay({ method, expiresAt, onRefresh, onPaid }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    function update() {
      const left = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000))
      setRemaining(left)
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [expiresAt])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const expired = remaining === 0

  return (
    <div className="qr-container" style={{ textAlign: 'center' }}>
      <div
        style={{
          position: 'relative',
          width: '256px',
          height: '256px',
          margin: '0 auto',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {expired ? (
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <p style={{ color: '#737373', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
              {t.orderExpired}
            </p>
            <button onClick={onRefresh} className="btn btn-outline" style={{ fontSize: '0.75rem' }}>
              {t.refreshStatus}
            </button>
          </div>
        ) : (
          <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="220" fill="#FFFFFF" />
            {[...Array(11)].map((_, i) =>
              [...Array(11)].map((_, j) => {
                const seed = (i * 31 + j * 17 + i * j) % 7
                if (seed > 3) {
                  return (
                    <rect
                      key={`${i}-${j}`}
                      x={10 + i * 18}
                      y={10 + j * 18}
                      width="16"
                      height="16"
                      fill="#000000"
                    />
                  )
                }
                return null
              })
            )}
            <rect x="10" y="10" width="50" height="50" fill="none" stroke="#000000" strokeWidth="4" />
            <rect x="22" y="22" width="26" height="26" fill="#000000" />
            <rect x="160" y="10" width="50" height="50" fill="none" stroke="#000000" strokeWidth="4" />
            <rect x="172" y="22" width="26" height="26" fill="#000000" />
            <rect x="10" y="160" width="50" height="50" fill="none" stroke="#000000" strokeWidth="4" />
            <rect x="22" y="172" width="26" height="26" fill="#000000" />
            <rect x="90" y="90" width="40" height="40" fill={method === 'alipay' ? '#1677FF' : '#09BB07'} />
            <text
              x="110"
              y="116"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="14"
              fontFamily="Roboto Mono, monospace"
              fontWeight="bold"
            >
              {method === 'alipay' ? '支' : '微'}
            </text>
          </svg>
        )}
      </div>

      {!expired && (
        <>
          <p className="text-label" style={{ marginTop: '1rem', color: method === 'alipay' ? '#1677FF' : '#09BB07' }}>
            {method === 'alipay' ? t.alipay : t.wechatpay}
          </p>
          <p className="countdown">
            {t.payCountdown}: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </p>
          <button
            onClick={onPaid}
            className="btn btn-primary"
            style={{ marginTop: '1.5rem', width: '100%' }}
          >
            {t.paidAlready}
          </button>
        </>
      )}
    </div>
  )
}
