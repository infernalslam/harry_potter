/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.products = [
      {
        id: 1,
        pic: 'img/hp_1.jpg',
        name: 'harry potter ศิลาอาถรรพ',
        price: 100.00
      }, {
        id: 2,
        pic: 'img/hp_2.jpg',
        name: 'harry potter ห้องแห่งความลับ',
        price: 100.00
      }, {
        id: 3,
        pic: 'img/hp_3.jpg',
        name: 'harry potter นักโทษแห่งอัซคาบัน',
        price: 100.00
      }, {
        id: 4,
        pic: 'img/hp_4.jpg',
        name: 'harry potter ถ้วยอัคนี',
        price: 100.00
      }, {
        id: 5,
        pic: 'img/hp_5.jpg',
        name: 'harry potter ภาคีนกฟีนิกซ์',
        price: 100.00
      }, {
        id: 6,
        pic: 'img/hp_6.jpg',
        name: 'harry potter เจ้าชายเลือดผสม',
        price: 100.00
      }, {
        id: 7,
        pic: 'img/hp_7.jpg',
        name: 'harry potter เครื่องรางยมทูต',
        price: 100.00
      }
    ]
    todoList.item = [0, 0, 0, 0, 0, 0, 0, 0]
    todoList.add = function (product) {
      // console.log(product)
      if (product.id === 1) {
        todoList.item[1]++
        todoList.item[0]++
      }if (product.id === 2) {
        todoList.item[2]++
        todoList.item[0]++
      } if (product.id === 3) {
        todoList.item[3]++
        todoList.item[0]++
      } if (product.id === 4) {
        todoList.item[4]++
        todoList.item[0]++
      } if (product.id === 5) {
        todoList.item[5]++
        todoList.item[0]++
      } if (product.id === 6) {
        todoList.item[6]++
        todoList.item[0]++
      } if (product.id === 7) {
        todoList.item[7]++
        todoList.item[0]++
      }
      todoList.total = todoList.item[0] * 100
      console.log(todoList.item)
      console.log(todoList.total)
    }
    todoList.print = function () {
      todoList.discount = todoList.sale(todoList.item)
      console.log(todoList.discount)
    }
    todoList.sale = function (item) {
      console.log('item' + item)
      var sale = 0
      var count = 0
      if (item[1] > 0) {
        count++
      }if (item[2] > 0) {
        count++
      }if (item[3] > 0) {
        count++
      }if (item[4] > 0) {
        count++
      }if (item[5] > 0) {
        count++
      }if (item[6] > 0) {
        count++
      }if (item[7] > 0) {
        count++
      }
      // var even = 0
      // for (var i = 1; i < item.length; i++) {
      //   for (var j = 1; j < item.length; j++) {
      //     if (item[i] === item[j] && j !== i && item[i] > 1 && item[j] > 1) {
      //       even = (even + item[i])
      //     }
      //   }
      // }
      if (sale < item[0]) {
        item[0] = item[0] - (item[0] - sale)
      }
      var discount = 0
      if (sale === 2) discount = (item[0] * 100) * (0.1)
      if (sale === 3) discount = (item[0] * 100) * (0.2)
      if (sale === 4) discount = (item[0] * 100) * (0.3)
      if (sale === 5) discount = (item[0] * 100) * (0.4)
      if (sale === 6) discount = (item[0] * 100) * (0.5)
      if (sale === 7) discount = (item[0] * 100) * (0.6)
      return (discount)
    }
  })
