import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    name: 'GODORI',
    htmlLink: '<a href="https://playoverwatch.com/ko-kr/heroes/">Overwatch Heros</a>',
    sizeStyle: 'width:100px; height:100px;',
    thumbStyle: 'width:200;',
    playOftheGame: 'Play of the Game',
    x: 0,
    y: 0,
    posIdx: 0,
    positions: [
      { type: ' offense ',
        logo: 'https://res.cloudinary.com/teepublic/image/private/s--gwWnzhqC--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1501014347/production/designs/1765091_1.jpg'
      },
      { type: ' tank ',
        logo: 'https://res.cloudinary.com/teepublic/image/private/s--GyyX-Jqn--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1501015130/production/designs/1765109_1.jpg'
      },
      { type: ' support ',
        logo: 'https://res.cloudinary.com/teepublic/image/private/s--4JqVG8TM--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1504726865/production/designs/1765097_3.jpg'
      }
    ],
    spray: true,
    voteNumber: 0,
    ana: 'https://vignette.wikia.nocookie.net/overwatch/images/0/01/Ana_Spray_-_Icon.png/revision/latest?cb=20160719183230',
    logo: 'https://vignette.wikia.nocookie.net/overwatch/images/9/95/Spray_-_Dark_Logo.png/revision/latest?cb=20160715182449'
  },
  methods: {
    hitEnter: function () {
      alert(this.name + '! You are the best player of the Game!!')
    },
    mousePos: function (myParam, event) {
      this.x = event.clientX * myParam
      this.y = event.clientY * myParam
    },
    vote: function () {
      this.voteNumber++
    },
    voteLuckyFinish: function () {
      this.voteNumber = 20
    },
    resetVote: function () {
      this.voteNumber = 0
    },
    changePos: function (idx) {
      this.posIdx = idx
    }
  }
})
