"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(10 + "Hi");
console.log("Good" + "Morning");
console.log("Operation: 10-Hi==>", 10 - "HI");
console.log("Operation: 0/0 ==>", 0 / 0);
var num = "10";
console.log(_typeof(num));
var num2 = +num; //"10" ==> 10

console.log("".concat(num2, " and it's type ").concat(_typeof(num2)));
var myName = "Gaurav";
var result = +myName;
console.log(_typeof(result));