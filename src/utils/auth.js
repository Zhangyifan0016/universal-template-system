import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from './constant'
import { setItem, getItem } from './storage'

// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

// 设置时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

// 是否超时
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.now()
  // 获取存入时间戳
  const timeStamp = getTimeStamp()
  // 当前时间减去存入时间是否大于超时时间
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
