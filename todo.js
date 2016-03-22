/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.data = []
    todoList.list = []
    todoList.single = []
    todoList.dup = []
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
      var current = null
      var cnt = 0
      for (var i = 0; i < todoList.data.length; i++) {
        if (todoList.data[i] !== current) {
          if (cnt > 0) {
            console.log(current + ' ซ้ำ --> ' + cnt + ' ครั้ง')
          }
          current = todoList.data[i]
          cnt = 1
        } else {
          cnt++
        }
      }
      if (cnt > 0) {
        console.log(current + ' ซ้ำ --> ' + cnt + ' ครั้ง')
      }
    }
  })
