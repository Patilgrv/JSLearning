"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bank = function Bank(bankName, location, account, ifsc, interestRate) {
  _classCallCheck(this, Bank);

  this.bankName = bankName;
  this.location = location;
  this.account = account;
  this.ifsc = ifsc;
  this.interestRate = interestRate;
};

var sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598", 10.75);
console.log(sbiBank);
var axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisBank);