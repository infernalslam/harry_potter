/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.title = 'book store'
    todoList.store = []
    todoList.promo = []
    todoList.discount = 0
    todoList.total = 0
    todoList.page = false
    todoList.show = []
    // function addbut (ep, name, price) {
    //   if (checkStore(todoList.store, ep)) {
    //     var index = addAmount(todoList.store, ep)
    //     todoList.store[index].amount += 1
    //   } else {
    //     var dataBook = {
    //       ep: ep,
    //       name: name,
    //       price: price,
    //       amount: 1
    //     }
    //     todoList.store.push(dataBook)
    //   }
    //   if (checkStore(todoList.show, ep)) {
    //     var index_show = addAmount(todoList.show, ep)
    //     todoList.show[index_show].amount += 1
    //   } else {
    //     var data = {
    //       ep: ep,
    //       name: name,
    //       price: price,
    //       amount: 1
    //     }
    //     todoList.show.push(data)
    //   }
    //   todoList.store.sort(function (a, b) {
    //     if (a.amount > b.amount) return -1
    //     if (a.amount < b.amount) return 1
    //     return 0
    //   })
    //   var amount = []
    //   for (var i = 0; i < todoList.store.length; i++) {
    //     if (typeof todoList.store[i].amount !== 'undefined') {
    //       amount.push(todoList.store[i].amount)
    //     }
    //   }
    //   todoList.promo = amount
    //   console.log('todoList.promo :' + todoList.promo)
    //   todoList.page = true
    //   console.log(todoList.show)
    // }
    // real function
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
      todoList.store.sort(function (a, b) {
        if (a.amount > b.amount) return -1
        if (a.amount < b.amount) return 1
        return 0
      })
      var amount = []
      for (var i = 0; i < todoList.store.length; i++) {
        if (typeof todoList.store[i].amount !== 'undefined') {
          amount.push(todoList.store[i].amount)
        }
      }
      todoList.promo = amount
      console.log('todoList.promo :' + todoList.promo)
      todoList.page = true
      // console.log(todoList.store)
      console.log(todoList.show)
    }
    todoList.bill = function () {
      var total = 0
      for (var i = 0; i < todoList.store.length; i++) {
        total += todoList.store[i].amount
      }
      return total
    }
    todoList.cal = function () {
      var countbook = 0
      var max = 0
      for (var i = 0; i <= todoList.promo.length; i++) {
        for (var j = 0; j < todoList.promo.length; j++) {
          if (todoList.promo[j] > 0) {
            countbook++
            if (max < countbook) {
              max = countbook
            }
          }
        }
        if (countbook === 2) {
          todoList.discount += 20
        } else if (countbook === 3) {
          todoList.discount += 60
        } else if (countbook === 4) {
          todoList.discount += 120
        } else if (countbook === 5) {
          todoList.discount += 200
        } else if (countbook === 6) {
          todoList.discount += 300
        }
        for (var k = 0; k < todoList.promo.length; k++) {
          todoList.promo[k] -= 1
        }
        countbook = 0
      }
      console.log('todoList.discount' + todoList.discount)
    }
    //
    // function pro (arr) {
    //   var countbook = 0
    //   var max = 0
    //   for (var i = 0; i <= arr.length; i++) {
    //     for (var j = 0; j < arr.length; j++) {
    //       if (todoList.arr[j] > 0) {
    //         countbook++
    //         if (max < countbook) {
    //           max = countbook
    //         }
    //       }
    //     }
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
    //     }
    //     for (var k = 0; k < todoList.arr.length; k++) {
    //       todoList.promo[k] -= 1
    //     }
    //     countbook = 0
    //   }
    //   console.log('todoList.discount' + todoList.discount)
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
    // todoList.addbutton = function (data) {
    //   addbut(data.ep, data.name, data.price)
    //   todoList.discount = 0
    //   pro(todoList.promo)
    // }
    // todoList.addsub = function (data) {
    //   if (checkStore(todoList.show, data.ep)) {
    //     var index_show = addAmount(todoList.show, data.ep)
    //     if (todoList.show[index_show].amount > 0) {
    //       todoList.show[index_show].amount -= 1
    //     }
    //   } else {
    //     var sub = {
    //       ep: data.ep,
    //       name: data.name,
    //       price: data.price,
    //       amount: 1
    //     }
    //     todoList.show.push(sub)
    //   }
    //   if (checkStore(todoList.store, data.ep)) {
    //     var index = addAmount(todoList.store, data.ep)
    //     if (todoList.store[index_show].amount > 0) {
    //       todoList.store[index].amount -= 1
    //     }
    //   } else {
    //     var dataBook = {
    //       ep: data.ep,
    //       name: data.name,
    //       price: data.price,
    //       amount: 1
    //     }
    //     todoList.store.push(dataBook)
    //   }
    // }
  })
