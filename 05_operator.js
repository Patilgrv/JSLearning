console.log(`=====Arithematic Operator`);
let num1 = 10; 
let num2 = 2;

let result = num1 + num2; //Addition  
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


let num = 10; //compund addition +=
let A= num + 20
let B= num+=20

console.log(A==B);