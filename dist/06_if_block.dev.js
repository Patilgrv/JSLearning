"use strict";

console.log("Start");
var num = 10;

if (num > 0) {
  console.log("inside if");
  console.log("Number is Positive ".concat(num));
}

console.log("End");
var ageForVote = 10;

if (ageForVote >= 18) {
  console.log("You are eligible for voting");
  console.log("Age is:".concat(ageForVote));
}

console.log("End of next if block");

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  }

  if (num % 2 !== 0) {
    return "Odd";
  }
}

var result = checkEvenOdd(45);
console.log("Given number 45 is ".concat(result));
var result = checkEvenOdd(70);
console.log("Given number 70 is ".concat(result));
var num1 = 5;

if (num1 > 0) {
  console.log("Number ".concat(num1, " is a positive"));
} else {
  console.log("Number ".concat(num1, " is a Negative"));
}

function maleMarriageEligibility(gender, age, boyName) {
  if (gender == "Male" && age > 21) {
    console.log("You are eligible");
  } else {
    console.log("Not Eligible");
  }
}

maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");