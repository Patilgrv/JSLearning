"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var student = {
  firstName: "Pinky ",
  lastName: "Khemchandani",
  isWorking: true,
  age: 27,
  collageName: "GTU"
};
console.log(student);
console.log(_typeof(student)); // . Dot Notation

console.log(student.firstName); // [] Notation

console.log(student["lastName"]);
var collageName = "GTU";
student.collageName = "COEP Pune";
console.log(student["collageName"]);
console.log(student.age); //Add new property 

student.city = "Mumbai";
student.country = "india";
console.table(student); // Delete the property

delete student.isWorking;
console.log(student); // Empty Object

var teacher = {};
teacher.firstName = "Mohit";
console.log(teacher);