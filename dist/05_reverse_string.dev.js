"use strict";

var reverseString = function reverseString(str) {
  var reverse = ""; // wo

  for (var index = str.length - 1; index >= 0; index--) {
    // 9 
    var charAt = str.charAt(index);
    reverse = reverse + charAt; // "w"+"o" ==> "wo"
  }

  return reverse;
};

var result = reverseString("Do it anyhow");
console.log("Reverse String is: ".concat(result)); //Reverse the last word only

var reverseStr = function reverseStr(str) {
  // str = "Do it anyhow"
  var reverse = ""; // wohyna

  for (var index = str.length - 1; index >= 0; index--) {
    var _char = str.charAt(index); // o


    if (_char == " ") {
      break;
    }

    reverse = reverse + _char; // "w"+"o" ==> "wo"
  }

  return reverse;
};

var result = reverseStr("Do it anyhow");
console.log("Reverse last word : ".concat(result));