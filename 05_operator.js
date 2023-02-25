console.log(`=====Arithematic Operator`);
var num1 = 10; 
var num2 = 2;

var result = num1 + num2; //Addition  
console.log(`Addition of 10 and 2 is ${result}`);

result = num1 - num2; //Substraction  
console.log(`Substraction of 10 and 2 is ${result}`);

result = num1 * num2; //Multilpication  
console.log(`Multilpication of 10 and 2 is ${result}`);

result = num1 ** num2; //exponential (num2=2)
console.log(`Exponential of 10 is ${result}`);

result = num1 / num2; //Division 
console.log(`Division (quotient) of 10 and 2 is ${result}`);

result = num1 % num2; //Modulus 
console.log(`Modulus(remainder) of 10 and 2 is ${result}`);


var num = 10; //compund addition +=
var A= num + 20
var B= num+=20

console.log(A==B);


console.log("marks >= 35"); //Greater thab equal
// I mark greater than 35
// Is mark greater than equal 35

//Less than equal <=

var marks = 70;
var results = marks >=60 ?"Allow him for intervie":Dontallow; 
console.log((result));

var age = 20;
var res = age>=21? true : false;
console.log(res);




console.log(" Check num is even or odd");
var myNumber = 7;
//Even- divide by  2 and reminder 0

var Result = myNumber%2==0? "Even" : "Odd"
console.log(`Given number is ${Result}`);

var numA = 10; 
var numB = 12;
var resultA =  

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );


 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);