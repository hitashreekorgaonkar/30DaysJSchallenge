// Modules

// Creating and Exporting Modules
// 1
const addNumbers = require("./modules/mathModule");
const result = addNumbers(3, 5);
console.log(`The sum is: ${result}`);

// 2
const person = require("./modules/personModule");
person.greet();
person.haveBirthday();

// Named and Default Exports
// 1
const { add, subtract, multiply, divide } = require("./modules/mathFunctions");
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);

// 2
// Go to mainScript.mjs

// Importing Entire Modules
// 1
const utilityModule = require("./modules/mathFunctions");
console.log(`As an object PI: ${utilityModule.PI}`);
console.log(
  `As an object Addition: ${num1} + ${num2} = ${utilityModule.add(num1, num2)}`
);
console.log(
  `As an object Subtraction: ${num1} - ${num2} = ${utilityModule.subtract(
    num1,
    num2
  )}`
);
console.log(
  `As an object Multiplication: ${num1} * ${num2} = ${utilityModule.multiply(
    num1,
    num2
  )}`
);
console.log(
  `As an object Division: ${num1} / ${num2} = ${utilityModule.divide(
    num1,
    num2
  )}`
);

// Using Third-Party Modules
// 1 & 2
// Chat-gpt

// Module Bundling
// Chat-gpt
