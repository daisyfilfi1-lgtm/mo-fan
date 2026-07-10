import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { getCoursePrice, getCourseName } from '../utils/currency'
import { detectTerminal } from '../utils/terminal'

const OrderContext = createContext()

const STORAGE_KEY = 'mofan_current_order'

const initialState = {
  order: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'INIT_ORDER': {
      const { courseId } = action.payload
      const terminal = detectTerminal()
      const order = {
        orderId: null,
        courseId,
        courseName: {
          zh: getCourseName(courseId, 'zh'),
          en: getCourseName(courseId, 'en'),
        },
        priceCNY: getCoursePrice(courseId),
        student: { name: '', phone: '', email: '', wechat: '' },
        paymentMethod: null,
        status: 'filling_info',
        terminal,
        createdAt: Date.now(),
      }
      return { ...state, order }
    }
    case 'SET_STUDENT': {
      if (!state.order) return state
      return { ...state, order: { ...state.order, student: action.payload } }
    }
    case 'SET_PAYMENT_METHOD': {
      if (!state.order) return state
      return { ...state, order: { ...state.order, paymentMethod: action.payload } }
    }
    case 'ORDER_CREATED': {
      if (!state.order) return state
      return {
        ...state,
        order: {
          ...state.order,
          orderId: action.payload.orderId,
          status: 'order_created',
        },
      }
    }
    case 'PAYING': {
      if (!state.order) return state
      return { ...state, order: { ...state.order, status: 'paying' } }
    }
    case 'PAY_SUCCESS': {
      if (!state.order) return state
      return { ...state, order: { ...state.order, status: 'success' } }
    }
    case 'PAY_FAILED': {
      if (!state.order) return state
      return { ...state, order: { ...state.order, status: 'failed' } }
    }
    case 'CLEAR_ORDER':
      return { ...state, order: null }
    case 'RESTORE_ORDER':
      return { ...state, order: action.payload }
    default:
      return state
  }
}

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const order = JSON.parse(saved)
        dispatch({ type: 'RESTORE_ORDER', payload: order })
      }
    } catch (e) {
      // ignore parse errors
    }
  }, [])

  useEffect(() => {
    try {
      if (state.order) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.order))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch (e) {
      // ignore storage errors
    }
  }, [state.order])

  return (
    <OrderContext.Provider value={{ order: state.order, dispatch }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider')
  }
  return context
}

export default OrderContext
