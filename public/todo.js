/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.store = []
    todoList.promo = []
    todoList.discountTotal = 0
    todoList.total = 0
    todoList.page = false
    todoList.show = []
    todoList.addBook = function (ep, name, price) {
      if (checkStore(todoList.store, ep)) {
        var index = addAmount(todoList.store, ep)
        todoList.store[index].amount += 1
      } else {
        var dataBook = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.store.push(dataBook)
      }
      if (checkStore(todoList.show, ep)) {
        var index_show = addAmount(todoList.show, ep)
        todoList.show[index_show].amount += 1
      } else {
        var data = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.show.push(data)
      }
      // todoList.store.sort(function (a, b) {
      //   if (a.amount > b.amount) return -1
      //   if (a.amount < b.amount) return 1
      //   return 0
      // })
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') {
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      console.log('todoList.promo :' + todoList.promo)
      todoList.page = true
      // cal(todoList.promo)
      var book = todoList.store
      todoList.discountTotal = todoList.discount(book)
    }
    todoList.bill = function () {
      var total = 0
      for (var i = 0; i < todoList.store.length; i++) {
        total += todoList.store[i].amount
      }
      return total * 100
    }
    // todoList.cal = function () {
    //   var countbook = 0
    //   var max = 0
    //   for (var i = 0; i <= todoList.promo.length; i++) {
    //     for (var j = 0; j < todoList.promo.length; j++) {
    //       if (todoList.promo[j] > 0) {
    //         countbook++
    //         if (max < countbook) {
    //           max = countbook
    //         }
    //       }
    //     }
    //     console.log('countbook :' + countbook)
    //     if (countbook === 2) {
    //       todoList.discount += 20
    //     } else if (countbook === 3) {
    //       todoList.discount += 60
    //     } else if (countbook === 4) {
    //       todoList.discount += 120
    //     } else if (countbook === 5) {
    //       todoList.discount += 200
    //     } else if (countbook === 6) {
    //       todoList.discount += 300
    //     } else if (countbook === 7) {
    //       todoList.discount += 420
    //     }
    //     for (var k = 0; k < todoList.promo.length; k++) {
    //       todoList.promo[k] -= 1
    //     }
    //     countbook = 0
    //   }
    //   console.log('todoList.discount' + todoList.discount)
    // }
    // function cal (data) {
    //   console.log(data)
    //   var countbook = 0
    //   todoList.discount = 0
    //   var max = 0
    //   for (var i = 0; i <= data.length; i++) {
    //     for (var j = 0; j <= data.length; j++) {
    //       if (data[j] > 0) {
    //         countbook++
    //         if (max < countbook) {
    //           max = countbook
    //         }
    //       }
    //     }
    //     console.log('countbook :' + countbook)
    //     if (countbook === 2) {
    //       todoList.discount += 20
    //       console.log('20')
    //     } else if (countbook === 3) {
    //       todoList.discount += 60
    //       console.log('60')
    //     } else if (countbook === 4) {
    //       todoList.discount += 120
    //       console.log('120')
    //     } else if (countbook === 5) {
    //       todoList.discount += 200
    //       console.log('200')
    //     } else if (countbook === 6) {
    //       todoList.discount += 300
    //       console.log('300')
    //     } else if (countbook === 7) {
    //       todoList.discount += 420
    //       console.log('420')
    //     }
    //     for (var k = 0; k < data.length; k++) {
    //       todoList.promo[k] -= 1
    //       countbook = 0
    //     }
    //   }
    //   console.log('todoList.discount' + todoList.discount)
    //   console.log('todoList.promo' + todoList.promo)
    // }
    var checkStore = function (store, ep) {
      for (var i = 0; i < store.length; i++) {
        if (store[i].ep === ep) {
          return true
        }
      }
    }
    var addAmount = function (store, ep) {
      for (var i = 0; i < store.length; i++) {
        if (store[i].ep === ep) {
          return i
        }
      }
    }
    todoList.delbutton = function (data, index) {
      // var index = todoList.show.indexOf(data.ep)
      console.log('ช่องที่เราต้องการจะลบ' + index)
      todoList.promo.splice(index, 1)
      todoList.show.splice(index, 1)
      todoList.store.splice(index, 1)
      console.log('ช่องอะเรของโชว์:' + todoList.show)
      if (todoList.show.length === 0) {
        todoList.page = false
      }
      var book = todoList.store
      todoList.discountTotal = todoList.discount(book)
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') {
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      console.log('เรียงใหม่เเล้วได้ :' + todoList.promo)
      // cal(todoList.promo)
    }
    todoList.addbutton = function (show, index) {
      repeataddBook(show.ep, show.name, show.price)
    }
    function repeataddBook (ep, name, price) {
      if (checkStore(todoList.store, ep)) {
        var index = addAmount(todoList.store, ep)
        todoList.store[index].amount += 1
      } else {
        var dataBook = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.store.push(dataBook)
      }
      if (checkStore(todoList.show, ep)) {
        var index_show = addAmount(todoList.show, ep)
        todoList.show[index_show].amount += 1
      } else {
        var data = {
          ep: ep,
          name: name,
          price: price,
          amount: 1
        }
        todoList.show.push(data)
      }
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') {
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      console.log('todoList.promo :' + todoList.promo)
      todoList.page = true
      // cal(todoList.promo)
      var book = todoList.store
      todoList.discountTotal = todoList.discount(book)
    }
    function repeatsubBook (ep, name, price) {
      // if (checkStore(todoList.store, ep)) {
      //   var index = addAmount(todoList.store, ep)
      //   if (todoList.store[index].amount !== 0) {
      //     todoList.store[index].amount -= 1
      //   }
      // } else {
      //   var dataBook = {
      //     ep: ep,
      //     name: name,
      //     price: price,
      //     amount: 1
      //   }
      //   todoList.store.push(dataBook)
      // }
      // if (checkStore(todoList.show, ep)) {
      //   var index_show = addAmount(todoList.show, ep)
      //   if (todoList.show[index_show].amount !== 0) {
      //     todoList.show[index_show].amount -= 1
      //   }
      // } else {
      //   var data = {
      //     ep: ep,
      //     name: name,
      //     price: price,
      //     amount: 1
      //   }
      //   todoList.show.push(data)
      // }
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') {
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      console.log('todoList.promo :' + todoList.promo)
      todoList.page = true
      var book = todoList.store
      todoList.discountTotal = todoList.discount(book)
      // cal(todoList.promo)
    }
    todoList.subbutton = function (show, index) {
      repeatsubBook(show.ep, show.name, show.price)
    }
    var filterData = function (array) {
      return array.filter((element) => element.amount !== 0)
    }
    todoList.discount = function (book) {
      var items = book.map((obj) => {
        return { amount: obj.amount, price: obj.price }
      })
      var totalDis = 0
      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { amount: obj.amount - 1, price: obj.price }
        })
        items = filterData(items)
      }
      console.log(totalDis)
      return totalDis
    }
  })
