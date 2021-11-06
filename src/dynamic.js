import style from './css.js'

const player = {
  id: undefined,
  time: 50,
  n: 1,
  ui: {
    output1: document.querySelector('#output1'),
    output2: document.querySelector('#output2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: () => {
    player.ui.output1.innerText = style.substr(0,player.n)
    player.ui.output2.innerHTML = style.substr(0,player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]  // value = pause / play / slow ...
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > style.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.output1.innerText = style.substr(0, player.n)
    player.ui.output2.innerHTML = style.substr(0, player.n)
    player.ui.output1.scrollTop = player.ui.output1.scrollHeight
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  play: () => {
    player.pause()
    player.id = setInterval(player.run, player.time)
  },
  slow: () => {
    player.pause()
    player.time = 200
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 50
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()