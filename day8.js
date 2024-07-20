// Template Literals
let nickname = "Hit";
let age = 26;
let tempLiteral = `My name is ${nickname} and I am ${age} year old.`;
console.log(tempLiteral);

let multiLine = `Hello,

My name is ${nickname} and I am ${age} years old.

Best regards,
Hit`;
console.log(multiLine);

// Destructuring
let no = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = no;
console.log(a, b);
let [a1, , a2] = no;
console.log(a1, a2);

let book = { title: "Peace", author: "H", year: 2024 };
let { title, author, year, price } = book;
console.log(title, author, year, price);
let { t, at, y, p } = book;
console.log(t, at, y, p); // res => is undefined
let { title: ti, author: au, year: ye, price: pr } = book;
console.log(ti, au, ye, pr);
let novel = book;
console.log(novel.title, novel.author);

// Spread and Rest Operators
// Spread

// Arrays similar applies to {}
const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];
let newArray = [...originalArray, ...additionalElements];
console.log(newArray);
let newArrWithIndEle = [7, 8, 9, ...originalArray];
console.log(newArrWithIndEle);

// Function -> Function Calls
let spreadSum = (a, b, c) => {
  return a + b + c;
};
const nums = [1, 2, 3, 4];
let spreadAns = spreadSum(...nums); // Function Calls
console.log("spreadAns", spreadAns);

// Rest

// Arrays similar applies to {}
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

// Function -> Function Parameters
//Function Parameters
let restSum = (...originalArray) => {
  sum = 0;
  originalArray.map((element) => {
    sum += element;
  });
  return sum;
};

let restAns = restSum(1, 2, 3);
console.log("restAns", restAns);

// Default Parameters
function prod(a, b = 1) {
  return a * b;
}
console.log(prod(7));

// Enhanced Object Literals

// Define properties
const job = "Developer";
// Define methods
const greet = function () {
  console.log(`Hello, my name is ${this.nickname} and I am a ${this.job}.`);
};

const person = {
  nickname,
  age,
  job,
  greet,
  // Method shorthand
  introduce() {
    console.log(`Hi, I'm ${this.nickname}, ${this.age} years old.`);
  },
};

// Log the object to the console
console.log(person);
// Call the methods
person.greet();
person.introduce();

// object with computed property
// Define variables for property names
let propName1 = "name";
let propName2 = "age";
let propName3 = "city";

// Create an object with computed property names
let individual = {
  [propName1]: "Diya",
  [propName2]: 30,
  [propName3]: "Mumbai",
};

// Log the object to the console
console.log(individual);
