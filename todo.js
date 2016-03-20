/*global angular*/
angular.module('todoApp', [])
 .controller('TodoListController', function () {
   var todoList = this
   todoList.title = 'testef'
   todoList.data = []
   var checklist = []
   todoList.add = function (book, price, index) {
     console.log(book + '/' + price)
     var data = {
       namebook: book,
       price: price
     }
     todoList.data.push(data)
     checklist.push(index)
     // console.log(checklist)
   }
 })
