/**
 * 支付 API 封装层
 *
 * 当前为 MOCK 实现，用于前端 UI 演示。
 * 接入真实商户时，仅需替换各函数体为真实 HTTP 调用，UI 无需改动。
 *
 * 后端职责（真实接入时需实现）：
 * - 使用商户私钥对请求签名
 * - 调用支付宝/微信统一下单接口
 * - 接收并验签异步支付结果回调
 * - 持久化订单状态
 *
 * 安全约束：
 * - 私钥绝不出现在前端
 * - 金额由后端按 courseId 查库确定，前端只传 courseId
 */

const MOCK_DELAY = 800

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function generateOrderId() {
  const ts = Date.now().toString(36)
  const rand = Math.random().toString(36).slice(2, 8)
  return `MOFAN-${ts}-${rand}`.toUpperCase()
}

/**
 * 创建订单
 * 真实接入：POST /api/orders，body: { courseId, studentInfo }
 * 后端按 courseId 查库获取价格，生成签名后调支付宝/微信统一下单
 *
 * @param {string} courseId - 课程 ID（foundation/professional/master）
 * @param {object} studentInfo - { name, phone, email, wechat }
 * @returns {Promise<{orderId: string, priceCNY: number}>}
 */
export async function createOrder(courseId, studentInfo) {
  // MOCK
  await delay(MOCK_DELAY)
  return {
    orderId: generateOrderId(),
    courseId,
  }
}

/**
 * 请求支付
 * 真实接入：POST /api/orders/:id/pay，body: { method, terminal }
 * 后端根据 method 和 terminal 调用对应接口：
 *   - 支付宝 PC: alipay.trade.precreate → 返回 qr_code
 *   - 支付宝 H5: alipay.trade.wap.pay → 返回支付链接
 *   - 微信 PC: native → 返回 code_url
 *   - 微信 H5: MWEB → 返回 mweb_url
 *   - 微信 JSAPI: JSAPI → 返回 jsApiParams（需 openid）
 *
 * @param {string} orderId
 * @param {'alipay'|'wechatpay'} method
 * @param {'pc'|'h5'|'wechat'} terminal
 */
export async function requestPayment(orderId, method, terminal) {
  // MOCK
  await delay(MOCK_DELAY)
  if (terminal === 'pc') {
    return {
      qrUrl: `https://api.mofan.example.com/mock/qr/${orderId}`,
      expiresAt: Date.now() + 15 * 60 * 1000,
    }
  }
  if (terminal === 'h5') {
    return {
      mwebUrl: `https://api.mofan.example.com/mock/h5/${orderId}`,
      expiresAt: Date.now() + 5 * 60 * 1000,
    }
  }
  return {
    jsApiParams: { timeStamp: String(Math.floor(Date.now() / 1000)), nonceStr: Math.random().toString(36).slice(2) },
    expiresAt: Date.now() + 5 * 60 * 1000,
  }
}

/**
 * 查询支付状态
 * 真实接入：GET /api/orders/:id/status
 * 后端主动查询支付宝/微信订单状态，或读取回调更新后的状态
 *
 * @param {string} orderId
 * @returns {Promise<{status: 'pending'|'success'|'failed'}>}
 */
export async function getPayStatus(orderId) {
  // MOCK: 始终返回 pending，模拟等待用户扫码支付
  // 真实接入时，后端会在收到支付平台回调后更新状态
  // 用户可点击"我已完成支付"按钮模拟支付成功
  await delay(MOCK_DELAY)
  return { status: 'pending' }
}
