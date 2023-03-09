"use strict";

var employee = {
  id: 124567,
  name: "Elon Musk",
  country: "US",
  city: "Silicon Valley"
};
console.log("==== in operator =====");
var isIdAvailable = "id" in employee;
console.log(isIdAvailable); // traversing in obj

for (var key in employee) {
  if (Object.hasOwnProperty.call(employee, key)) {
    var element = employee[key];
    console.log(key, element);
  }
}

var keysOFEmployee = Object.keys(employee);
console.log(keysOFEmployee);
var valuesOFEmployee = Object.values(employee);
console.log(valuesOFEmployee);
var entriesOFEmployee = Object.entries(employee);
console.log(entriesOFEmployee);