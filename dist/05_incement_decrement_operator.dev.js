"use strict";

/*
index ++ ==> index = index+1
index -- ==> index = index-1

*/
var index = 10;
var y = index + 1;
console.log(index, y);
var index = 10;
var y = index++;
console.log("index:".concat(index, "., y:").concat(y));
var index = 10;
var y = ++index;
console.log("index:".concat(index, "., y:").concat(y));