/*global angular*/
angular.module('todoApp', [])
 .controller('TodoListController', function () {
   var todoList = this
   todoList.title = 'testef'
   todoList.data = [{}]
   todoList.add = function (book, price) {
     console.log(book + '/' + price)
     var data = {
       namebook: book,
       price: price
     }
     todoList.data.push(data)
   }
 })
