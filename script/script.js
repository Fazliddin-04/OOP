class Typing {
  constructor(prop) {
    this.el = document.querySelector(prop.el)
    this.text = this.el.innerHTML.trim()
    this.el.innerHTML = ''
    this.interval = prop.interval || 100
    this.delay = prop.delay || 100
    this.startOnScreen = prop.startOnScreen || false
    // if (this.startOnScreen) {
    //   console.log(this.startOnScreen);
    //   this.startAct(this.el)
    // }
    // else {
    setTimeout(() => {
      this.write()
    }, this.delay)
    // }
  }

  write(i = 0) {
    this.el.innerHTML += this.text[i]
    i++
    if (this.text.length > i) {
      setTimeout(() => {
        this.write(i)
      }, this.interval)
    }
  }

  // startAct(e, func = this.write()) {
  //   window.addEventListener('scroll', function scroll() {
  //     if (this.scrollY > e.closest('div').offsetTop - e.closest('div').clientHeight * 2) {
  //       setTimeout(() => {
  //         func
  //       }, this.delay)
  //       console.log(this.scrollY > e.closest('div').offsetTop - e.closest('div').clientHeight * 2);
  //       window.removeEventListener('scroll', scroll)
  //     }
  //   })
  // }
}

new Typing({
  el: '.header__content h1',
  interval: 200,
  delay: 200,
})

new Typing({
  el: '.info__scroll-desc',
  interval: 50,
  delay: 100,
  startOnScreen: true
})

class Escaping {
  constructor(prop) {
    this.el = document.querySelector(prop.el)
    this.border = document.querySelector(prop.border)
    this.escape = prop.escape || false
    if (this.escape) {
      this.catchMe(this.el)
    }
  }

  catchMe(e) {
    e.addEventListener('mouseover', () => {
      e.style.opacity = 0
      var maxX = this.border.clientWidth - e.clientWidth
      var maxY = this.border.clientHeight - e.clientHeight

      this.el.style.marginTop = `${this.getRandomInt(0, maxY)}px`
      this.el.style.marginLeft = `${this.getRandomInt(0, maxX)}px`
      setTimeout(() => {
        e.style.transition = '0.3s'
        e.style.opacity = 1
      }, 500)
    })
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

new Escaping({
  border: '.header',
  el: '.header__content',
  escape: true
})
