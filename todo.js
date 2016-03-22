/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.data = []
    todoList.list = []
    todoList.p1 = []
    todoList.p2 = []
    todoList.p3 = []
    todoList.p4 = []
    todoList.p5 = []
    todoList.p6 = []
    todoList.p7 = []
    var p1 = 1
    var p2 = 1
    var p3 = 1
    var p4 = 1
    var p5 = 1
    var p6 = 1
    var p7 = 1
    todoList.add = function (id, name, price) {
      var data = {
        id: parseInt(id),
        name: name,
        price: parseInt(price)
      }
      todoList.list.push(data)
      todoList.data.push(id)
    }
    todoList.cal = function () {
      todoList.data.sort()
      console.log('sort():' + todoList.data)
      for (var i = 0; i < todoList.data.length; i++) {
        if (todoList.data[i] === '1') {
          todoList.p1.push(p1)
          p1 = p1 + 1
        }
        if (todoList.data[i] === '2') {
          todoList.p2.push(p2)
          p2 = p2 + 1
        }
        if (todoList.data[i] === '3') {
          todoList.p3.push(p3)
          p3 = p3 + 1
        }
        if (todoList.data[i] === '4') {
          todoList.p4.push(p2)
          p4 = p4 + 1
        }
        if (todoList.data[i] === '5') {
          todoList.p5.push(p5)
          p5 = p5 + 1
        }
        if (todoList.data[i] === '6') {
          todoList.p6.push(p6)
          p6 = p6 + 1
        }
        if (todoList.data[i] === '7') {
          todoList.p7.push(p7)
          p7 = p7 + 1
        }
      }
      if (typeof todoList.p1[0] === 'undefined') {
        todoList.p1.push(0)
      }
      if (typeof todoList.p2[0] === 'undefined') {
        todoList.p2.push(0)
      }
      if (typeof todoList.p3[0] === 'undefined') {
        todoList.p3.push(0)
      }
      if (typeof todoList.p4[0] === 'undefined') {
        todoList.p4.push(0)
      }
      if (typeof todoList.p5[0] === 'undefined') {
        todoList.p5.push(0)
      }
      if (typeof todoList.p6[0] === 'undefined') {
        todoList.p6.push(0)
      }
      if (typeof todoList.p7[0] === 'undefined') {
        todoList.p7.push(0)
      }
      // console.log
      console.log('p1 :' + todoList.p1[todoList.p1.length - 1])
      console.log('p2 :' + todoList.p2[todoList.p2.length - 1])
      console.log('p3 :' + todoList.p3[todoList.p3.length - 1])
      console.log('p4 :' + todoList.p4[todoList.p4.length - 1])
      console.log('p5 :' + todoList.p5[todoList.p5.length - 1])
      console.log('p6 :' + todoList.p6[todoList.p6.length - 1])
      console.log('p7 :' + todoList.p7[todoList.p7.length - 1])
    // for (var k = todoList.list.length; k >= 0; k--) {
    //   if (todoList.p1[k])
    // }
    }
  })
