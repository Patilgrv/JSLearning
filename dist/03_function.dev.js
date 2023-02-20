"use strict";

//Functions with no arguments and no return value
function showFullName() {
  console.log("My full name is Gaurav Patil");
}

showFullName(); // function call or invoke
//Function with argument and no return value

function showAge(age) {
  console.log("My age is:", age);
}

showAge(27); //Function with no argument and return value

function fullName() {
  var name = "Gaurav Patil";
  return name;
}

var fName = fullName();
console.log(fName); // Function with argument and return value

function sumOfNumbers(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}

var sumResult = sumOfNumbers(10.23, 45, 79);
console.log(sumResult);
var num1 = 100;
var num2 = 200;
var str1 = "Sweety"; // Cutey

var str2 = "Cutey"; // Sweety

var name1 = "chintu";
var name2 = "pintu";

function swapVariables(value1, value2) {
  console.log("Before Swap: ", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap: ", value1, value2);
  return "Swapping variables successfully completed";
}

var swapResult = swapVariables(num1, num2); // Function call or Function invoke

console.log(swapResult);
var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);