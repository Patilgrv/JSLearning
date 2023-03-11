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
var player = {
  fullName: "Virat Kohli",
  totalCenturies: 46,
  isMarries: true
};
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed

delete player.totalCenturies; // deleting property - Not allowed as object is freezed

player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);
var student = {
  firstName: "Elon",
  lastName: "Musk",
  age: 54
};
var address = {
  country: "US",
  city: "Silicon Valley",
  PIN: "QA2345"
};
var newObj = {};
Object.assign(newObj, student, address);
console.table(newObj); // First way 

var mergedObject = Object.assign({}, student, address);
console.table(mergedObject); // Second way 

var newObject = {};
Object.assign(newObject, student, address);
console.table(newObject); //  Third way

Object.assign(student, address);
console.table(student); //  Fourth way

Object.assign(address, student);
console.table(address);