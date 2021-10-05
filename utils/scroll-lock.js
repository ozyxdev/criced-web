const $body = typeof window === 'object' ? document.querySelector('body') : null
let scrollPosition = 0

export default {
  enable() {
    scrollPosition = window.pageYOffset
    $body.style.overflow = 'hidden'
    $body.style.position = 'fixed'
    $body.style.top = `-${scrollPosition}px`
    $body.style.width = 'calc(100vw -  4rem)'
  },
  disable() {
    $body.style.removeProperty('overflow')
    $body.style.removeProperty('position')
    $body.style.removeProperty('top')
    $body.style.removeProperty('width')
    window.scrollTo(0, scrollPosition)
  },
}
