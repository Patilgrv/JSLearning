"use strict";

// WAP to print numbers from 0 to 10
var index = 0; // initialization

while (index <= 10) {
  // condition
  console.log(index);
  index++; // Update Expression
}

console.log("Even numbers");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
var index1 = 0; // initialization

var sum = 0;

while (index < arrayOfNumbers.length) {
  // condition
  var element = arrayOfNumbers[index];

  if (element % 2 == 0) {
    console.log(element);
    sum = sum + element;
  }

  index++; // Update Expression
}