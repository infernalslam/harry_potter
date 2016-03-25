/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var koy = function () {
  koy()
  if (should) {
  }
}
describe('TEST Buy Harry Potter Book', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('nightmareJs and mocha and chai', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })

    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b2')
        .wait(1000)
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case1.should.equal('20')
    })
    it('ซื้อเล่ม 1 จำนวน 6 เล่ม, ซื้อเล่ม 2 จำนวน 5 เล่ม, ซื้อเล่ม 3 จำนวน 4 เล่ม, ซื้อเล่ม 4 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 320', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .wait(1000)
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case1.should.equal('320')
    })
    it('ซื้ออย่างล่ะเล่ม ส่วนลดต้องเท่ากับ 420', function * () {
      var case3 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .wait(1000)
        .click('#b7')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case3.should.equal('420')
    })
    it('ซื้อ 3 ,2 ,1 เล่ม ส่วนลดต้องเท่ากับ 80', function * () {
      var case4 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case4.should.equal('80')
    })
    it('ซื้อ 3 , 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case5 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case5.should.equal('20')
    })
    it('ซื้อ 2 , 2 เล่ม ส่วนลดต้องเท่ากับ 40', function * () {
      var case6 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .click('#b2')
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case6.should.equal('40')
    })
    it('ซื้อ 4 เล่มไม่ซ้ำกัน ส่วนลดต้องเท่ากับ 120', function * () {
      var case7 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case7.should.equal('120')
    })
    it('ซื้อ 6 เล่มไม่ซ้ำกัน ส่วนลดต้องเท่ากับ 300', function * () {
      var case8 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .click('#b4')
        .click('#b5')
        .click('#b6')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case8.should.equal('300')
    })
    it('ซื้อ 3 เล่มไม่ซ้ำกัน ส่วนลดต้องเท่ากับ 60', function * () {
      var case9 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b2')
        .click('#b3')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case9.should.equal('60')
    })
    it('ซื้อ 2 เล่มไม่ซ้ำกัน ส่วนลดต้องเท่ากับ 20', function * () {
      var case10 = yield nightmare
        .goto('http://localhost:3000')
        .wait(2000)
        .click('#b1')
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('.dis').innerHTML
          return this.price
        })
      case10.should.equal('20')
    })
  })
})
