// Arithmetic Operations
let num1 = 14;
let num2 = 2;

let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;

console.log("add ", add);
console.log("sub ", sub);
console.log("mul ", mul);
console.log("div ", div);
console.log("rem ", rem);

// Assignment Operators
num1 += 5;
console.log(num1);

num1 -= 5;
console.log(num1);

// Comparison Operators
console.log(num1 > num2);
console.log(num1 < num2);
console.log(5 >= 5);
console.log(5 <= 5);
console.log(5 == "5");
console.log(5 === "5");

// Logical Operators
console.log(11 > 5 && 5 > 11);
console.log(11 > 5 || 5 > 11);
console.log(!(11 > 5));

// Ternary Operator
terOpr = num1 > 0 ? num1 + " is Positive Number" : num1 + " is Negative Number";
console.log(terOpr);
