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
 })
