/**
 * 终端检测工具
 * 区分 PC 浏览器、H5 手机浏览器、微信内访问
 * 决定支付下单方式：PC 扫码 / H5 唤起 / 微信 JSAPI
 */

export function detectTerminal() {
  if (typeof navigator === 'undefined') return 'pc'
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('micromessenger')) return 'wechat'
  if (/mobile|android|iphone|ipad|ipod|windows phone/.test(ua)) return 'h5'
  return 'pc'
}

export function isWechat() {
  if (typeof navigator === 'undefined') return false
  return /micromessenger/i.test(navigator.userAgent)
}

export function isMobile() {
  if (typeof navigator === 'undefined') return false
  return /mobile|android|iphone|ipad|ipod|windows phone/i.test(navigator.userAgent)
}
