/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.show = []
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
      console.log(todoList.show)
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
