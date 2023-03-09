"use strict";

// Object literals
var student = {
  firstName: "Prashant",
  lastName: "Deshmukh",
  isWorking: true,
  age: 22,
  collegeName: "ABC",
  id: 123456,
  address: {
    street: "Wakad",
    city: "Pune",
    PIN: "431204"
  },
  school: "Podar School",
  friends: ["Bill", "Stew", "Elon"],
  show: function show() {
    console.log("I am show() function");
  },
  addressDetails: function addressDetails() {
    return "Address is: Street ".concat(this.address.street, ", City ").concat(this.address.city, ", PIN ").concat(this.address.PIN);
  }
};
var resultAddress = student.addressDetails();
console.log(resultAddress); // student.show()
// console.log(student.friends);
// console.log(student.friends[student.friends.length-1]);
// student.address.PIN = 431205;
// // 431205
// console.log(student.address.city);
// student.marks = {
//     math: 80,
//     physics: 60,
//     drawing: 70
// }
// student.school = "ABC";
// console.log(student.marks);
// console.log(student.address.city=431205);
// console.log(student);
// console.log(typeof student);
// // . Dot Notation
// console.log(student.firstName);
// console.log(student.age);
// // [] Notation
// console.log(student["lastName"]);
// // Update property
// student.collegeName = "COEP PUNE";
// // Add new property city = "Mumbai"
// student.city = "Mumbai";
// student.country = "India";
// // Delete the property
// delete student.isWorking;
// console.table(student);
// //Empty Object
// let teacher = { };
// // firstName = "Mohit"
// const array = [];
// const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
// for (let index = 0; index < arrayOfNumbers.length; index++) {
//     const element = arrayOfNumbers[index];
//     if (element%2==0) {
//         array.push(element);  
//     } 
// }
// console.log(array);