"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var greet = "Good Morning";
console.log(_typeof(greet));
console.log(" Total number chars available into this string variable - greet ");
var greetLength = greet.length;
console.log('Total length of string is:', greetLength);
console.log("Find the character by Index value");
var charAtIndex3 = greet.charAt(3);
console.log("Character available at index 3 is:", charAtIndex3);
console.log("Find the last character");
var charAtLastIndex = greet.charAt(greetLength - 1);
console.log("Last char is:", charAtLastIndex);
console.log("Find the index by character value");
var indexOfM = greet.indexOf('M');
var indexOfo = greet.indexOf('o');
console.log("Index of char M is:", indexOfM);
console.log("Index of char o is:", indexOfo);
console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf('o'));
var replaceResult = greet.replace("Morning", "Evening");
console.log(greet);
console.log(replaceResult);
console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Upper Case:", replaceResult.toLowerCase());
var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ", myNameAfterTrim, myName.length, myNameAfterTrim.length); //Find the total extra spaces removed from the string- myName

console.log(myName.length - myNameAfterTrim.length);
console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));
console.log("slice() method");
var sliceResult = greet.slice(5, 11);
console.log(sliceResult);
console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
ff;
console.log("Total words: ", splitResult.length);
var myFriendlist = "Bill Gates,steve Jobs,Elon Musk, Ratan Tata,Sundar Pichai,Satya Nadela, Larry Page,Sergey Brin, Tim Cook, Nandan Nilekani, narayan Murthy";
var splitFriendResult = myFriendlist.split(",");
console.log("Total Number of friends:", splitFriendResult.length);