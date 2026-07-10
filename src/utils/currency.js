/**
 * 货币与课程价格常量
 * 价格以人民币（CNY）为准，前端仅做展示
 * 真实接入时金额由后端按 courseId 查库确定，前端不可篡改
 */

export const EXCHANGE_RATE = 7.0

export const COURSE_PRICES_CNY = {
  foundation: 343,
  professional: 4893,
  master: 20993,
}

export const COURSE_NAMES = {
  foundation: { zh: '副业启动课', en: 'Side Hustle Starter' },
  professional: { zh: '创业系统课', en: 'Business System' },
  master: { zh: '商业课', en: 'Business Partnership' },
}

export function formatCNY(amount) {
  return '¥' + Number(amount).toLocaleString('zh-CN')
}

export function getCoursePrice(courseId) {
  return COURSE_PRICES_CNY[courseId] || 0
}

export function getCourseName(courseId, language = 'zh') {
  const name = COURSE_NAMES[courseId]
  return name ? name[language] : ''
}
