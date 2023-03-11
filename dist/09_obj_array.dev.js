"use strict";

var sbiBank = {
  bankName: "sbiBank",
  location: "Narhe",
  account: 62514897564,
  ifsc: "SBIN0004598",
  interestRate: 10.75
};
var axisBank = {
  bankName: "Axis",
  location: "Bajirao Road, Pune",
  account: 4597863258,
  ifsc: "AXIS4567893",
  interestRate: 12.5
};
var hdfcBank = {
  bankName: "hdfc",
  location: "Sinhgad road",
  account: 4593587569,
  ifsc: "HDFC000489",
  interestRate: 11.79
};
var yesBank = {
  bankName: "YesBank",
  location: "Kothrud Pune",
  account: 4568792581,
  ifsc: "YESB0214597",
  interestRate: 14.5
};
var arrayOfBanks = [sbiBank, axisBank, hdfcBank, yesBank];

for (var index = 0; index < arrayOfBanks.length; index++) {
  var element = arrayOfBanks[index];
  console.log("".concat(element.bankName, ", ").concat(element.location, ", ").concat(element.account, ", ").concat(element.interestRate));
}

for (var _i = 0, _arrayOfBanks = arrayOfBanks; _i < _arrayOfBanks.length; _i++) {
  var iterator = _arrayOfBanks[_i];
}