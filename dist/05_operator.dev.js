"use strict";

console.log("=====Arithematic Operator");
var num1 = 10;
var num2 = 2;
var result = num1 + num2; //Addition  

console.log("Addition of 10 and 2 is ".concat(result));
result = num1 - num2; //Substraction  

console.log("Substraction of 10 and 2 is ".concat(result));
result = num1 * num2; //Multilpication  

console.log("Multilpication of 10 and 2 is ".concat(result));
result = Math.pow(num1, num2); //exponential (num2=2)

console.log("Exponential of 10 is ".concat(result));
result = num1 / num2; //Division 

console.log("Division (quotient) of 10 and 2 is ".concat(result));
result = num1 % num2; //Modulus 

console.log("Modulus(remainder) of 10 and 2 is ".concat(result));
var num = 10; //compund addition +=

var A = num + 20;
var B = num += 20;
console.log(A == B);