export default ({store, app}) => {
  window.addEventListener('resize', function () {
    store.commit('system/setViewport', {
      width: window.innerWidth,
      height: window.innerHeight
    })
  })
  window.dispatchEvent(new Event('resize'))

  // It's going to be faster to operate on our local variable.
  var scrollTop = 0
  let observe = () => {
    let unroundedPos = window.pageYOffset || document.documentElement.scrollTop
    let pos = Math.round(100 * unroundedPos) / 100
    if (scrollTop !== pos) {
      scrollTop = pos
      store.commit('system/setScroll', {
        top: scrollTop
      })
    }
    window.requestAnimationFrame(observe)
  }
  window.requestAnimationFrame(observe)
}
