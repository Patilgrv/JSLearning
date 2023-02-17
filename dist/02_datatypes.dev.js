"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var myName = 'Virat Kohli';
var fatherName = "Yogesh Kohli";
var age = 31;
var weight = 82.5;
var isMarried = true;
var isLazy = false;

var typeOfMyName = _typeof(myName);

console.log("Typeof variable myName: ", typeOfMyName);
console.log("typeOf variable fatherName:", _typeof(fatherName));
console.log("Type of Age:", _typeof(age));
console.log("Type of weight:", _typeof(weight));
console.log("Type of isMarried:", _typeof(isMarried));
console.log("Type of isLazy:", _typeof(isLazy));
var graduation;
console.log("Value of  graduation variable is: ", graduation);
console.log("typeOf graduation is: ", _typeof(graduation));