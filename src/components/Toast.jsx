import React, { useState, useCallback, useRef } from 'react'

export function useToastState() {
  const [state, setState] = useState({ message: '', visible: false })
  const timerRef = useRef(null)

  const show = useCallback((message, duration = 2500) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setState({ message, visible: true })
    timerRef.current = setTimeout(() => {
      setState((s) => ({ ...s, visible: false }))
    }, duration)
  }, [])

  return { state, show }
}

export function ToastView({ message, visible }) {
  return (
    <div
      className={`toast ${visible ? 'toast--show' : ''}`}
      role="status"
      aria-live="polite"
      style={{ visibility: message ? 'visible' : 'hidden' }}
    >
      {message}
    </div>
  )
}

export default ToastView
