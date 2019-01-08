/*
 * 移动端高清解决方案
 * @Author: strong
 * @Date: 2018-11-26 00:17:13
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-28 16:00:18
 */
function flex (baseFontSize, normal, fontscale) {
  const win = window
  const REM_BASE_SIZE = 100
  const _baseFontSize = baseFontSize || REM_BASE_SIZE
  const _fontscale = fontscale || 1
  const doc = win.document
  const ua = navigator.userAgent
  const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
  const UCversion = ua.match(/U3\/((\d+|\.){5,})/i)
  const isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80
  const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
  let dpr = win.devicePixelRatio || 1
  if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
    // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
    dpr = 1
  }
  const scale = normal ? 1 : 1 / dpr
  localStorage.setItem('initial-scale', scale)
  let metaEl = doc.querySelector('meta[name="viewport"]')
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    doc.head.appendChild(metaEl)
  }
  metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`)
  doc.documentElement.style.fontSize = normal ? '50px' : `${_baseFontSize / 2 * dpr * _fontscale}px`
  console.log(`${_baseFontSize / 2 * dpr * _fontscale}px`)
  const currentScreenW = window.screen.availWidth || 375
  let _fontscale_ = 1
  console.log(currentScreenW)
  if (currentScreenW < 375) {
    _fontscale_ = currentScreenW / 375
    doc.documentElement.style.fontSize = normal ? '50px' : `${_baseFontSize / 2 * dpr * currentScreenW / 375}px`
  }
  localStorage.setItem('font-scale', _fontscale_)
}
export default flex(100)
