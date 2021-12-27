class Scroll {
  constructor(el) {
    this.el = document.querySelector(el.el)
    this.top = el.top
    this.unit = el.unit || '%'
    this.el.style.position = `fixed`
    this.el.style.bottom = '0px'
    this.el.style.transform = 'translateY(100%)'
    window.addEventListener('scroll', () => { this.scroll() })
  }
  scroll() {
    const position = this.unitEl()
    this.el.style.bottom = 'unset'
    this.el.style.transform = 'translateY(0)'
    if (position - window.scrollY > 0 || window.scrollY == 0) {
      this.el.style.top = `${position - window.scrollY}px`
    } else {
      this.el.style.top = '0px'
    }
  }
  unitEl() {
    if (this.unit === 'px') {
      return this.top > 0 ? this.top : 0
    } else if (this.unit === '%') {
      return (window.innerHeight / 100) * this.top - this.el.clientHeight
    }
  }
}

new Scroll({
  el: '.header__nav',
  top: '100',
  unit: '%'
})