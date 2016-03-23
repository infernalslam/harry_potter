/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.show = []
    todoList.totalamount = []
    todoList.promotion = []
    todoList.add = function (id, name, price) {
      if (checkarr(todoList.show, id)) {
        var index = findarr(todoList.show, id)
        todoList.show[index].amount += 1
      } else {
        var data_book = {
          id: id,
          name: name,
          price: price,
          amount: 1
        }
        todoList.show.push(data_book)
      }
      todoList.show.sort(function (a, b) {
        if (a.amount > b.amount) {
          return -1
        }
        if (a.amount < b.amount) {
          return 1
        }
        return 0
      })
      var amountproduct = []
      for (var i = 0; i < todoList.show.length; i++) {
        if (typeof todoList.show[i].amount !== 'undefined') {
          amountproduct.push(todoList.show[i].amount)
        }
      }
      todoList.promotion = amountproduct
      console.log(todoList.promotion)
    }
    todoList.cal = function () {
      var count_book = 0
      // var max = todoList.promotion[0]
      var discount = 0
      for (var i = 0; i <= todoList.promotion.length; i++) {
        for (var j = 0; j < todoList.promotion.length; j++) {
          if (todoList.promotion[j] > 0) {
            count_book++
          }
          console.log('เหลือกี่คู่ :' + count_book)
        }
        if (count_book === 2) {
          discount += 20
          console.log('20')
        } else if (count_book === 3) {
          discount += 60
          console.log('60')
        } else if (count_book === 4) {
          discount += 120
          console.log('120')
        } else if (count_book === 5) {
          discount += 200
          console.log('200')
        } else if (count_book === 6) {
          discount += 300
          console.log('300')
        } else if (count_book === 7) {
          discount += 420
          console.log('420')
        }
        for (var k = 0; k < todoList.promotion.length; k++) {
          todoList.promotion[k] -= 1
        }
        count_book = 0
      }
      console.log('ส่วนลด :' + discount)
    }
    var checkarr = function (arr, id) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return true
        }
      }
    }
    var findarr = function (arr, id) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return i
        }
      }
    }
  })
