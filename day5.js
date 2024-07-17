// Function Declaration
function chkEvenOdd(num) {
  let a = num % 2 == 0 ? "Even Number" : "Odd Number";
  console.log(a);
}
chkEvenOdd(5);

function sqNo(num) {
  let a = num * num;
  console.log(`Square of a ${num} is ${a}`);
}
sqNo(5);

// Function expression
function largeNo(n1, n2) {
  return n1 > n2 ? `${n1} is Large Number` : `${n2} is Large Number`;
}
console.log(largeNo(5, 11));

function concat(str1, str2) {
  return str1 + str2;
  //   return str1.concat(str2);
}
console.log(concat("Su", "prabhat"));

// Arrow Functions
const a = (n1, n2) => {
  return n1 + n2;
};
console.log(a(7, 4));

let str = "mango";
const char = (char) => {
  return str.includes(char.toLowerCase());
};
console.log(char("N"));

// Function Parameters and Default Values
function product(a, b = 7) {
  return a * b;
}
console.log(product(5));
console.log(product(5, 6));

const personDet = (name, age = 26) => {
  return `Namaskar! I am ${name}, ${age} year old.`;
};
console.log(personDet("Hit"));
console.log(personDet("Prit", 25));

// Higher-Order Functions
function repeatFun(callback, times) {
  for (let i = 0; i < times; i++) {
    callback();
  }
}
function sayNamaskar() {
  console.log("Krishna!");
}
repeatFun(sayNamaskar, 3);

function repeatFun2(fun1, val) {
  fun1(val);
}
function fun1(val) {
  fun2("from fun1", val);
}
function fun2(val) {
  console.log(val);
}
repeatFun2(fun1, 2);

function compose(f, g, value) {
  // Apply the first function to the value
  const intermediateResult = f(value);
  // Apply the second function to the intermediate result
  return g(intermediateResult);
}

// Example usage:
function addOne(x) {
  return x + 1; // 3 + 1 = 4;
}

function square(x) {
  return x ** 2; // 4 * 4 = 16;
}

const result = compose(addOne, square, 3);
console.log(result); // Output: 16 (3 + 1)^2
